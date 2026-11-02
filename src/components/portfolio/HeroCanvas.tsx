import { useEffect, useRef } from "react";

interface Point3D {
  baseX: number;
  baseY: number;
  baseZ: number;
  isAccent: boolean;
}

/**
 * Lightweight 60fps 3D perspective-projected geodesic wireframe & node field.
 * Uses pure 3D rotation matrices (rotateX, rotateY, perspective projection)
 * with damped spring cursor physics—delivering true 3D depth at 0 KB library cost.
 */
export const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;

    // Build a Fibonacci 3D sphere of nodes + latitude/longitude rings
    const NUM_POINTS = 130;
    const points: Point3D[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < NUM_POINTS; i++) {
      const y = 1 - (i / (NUM_POINTS - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      points.push({
        baseX: x,
        baseY: y,
        baseZ: z,
        isAccent: i % 9 === 0,
      });
    }

    // Precompute edges between nearby points on the unit sphere for wireframe mesh
    const edges: [number, number][] = [];
    const maxEdgeDistSq = 0.22;
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].baseX - points[j].baseX;
        const dy = points[i].baseY - points[j].baseY;
        const dz = points[i].baseZ - points[j].baseZ;
        const dSq = dx * dx + dy * dy + dz * dz;
        if (dSq < maxEdgeDistSq) {
          edges.push([i, j]);
        }
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Damped spring state for cursor tilt & local repulsion
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let mouseX = -9999;
    let mouseY = -9999;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetTiltY = normX * 0.45;
      targetTiltX = -normY * 0.35;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let autoAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        autoAngle += 0.0022;
        currentTiltX += (targetTiltX - currentTiltX) * 0.05;
        currentTiltY += (targetTiltY - currentTiltY) * 0.05;
      }

      const sphereRadius = Math.min(width, height) * 0.36;
      const centerX = width * 0.68;
      const centerY = height * 0.46;
      const fov = 620;

      const rotY = autoAngle + currentTiltY;
      const rotX = 0.25 + currentTiltX;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Project 3D points into 2D screen space
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.baseX * cosY - p.baseZ * sinY;
        const z1 = p.baseZ * cosY + p.baseX * sinY;
        // Rotate around X
        const y2 = p.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.baseY * sinX;

        const worldX = x1 * sphereRadius;
        const worldY = y2 * sphereRadius;
        const worldZ = z2 * sphereRadius;

        const scale = fov / (fov + worldZ + sphereRadius);
        let screenX = centerX + worldX * scale;
        let screenY = centerY + worldY * scale;

        // Subtle 2D cursor repulsion when pointer is near a projected vertex
        const dx = screenX - mouseX;
        const dy = screenY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactRadius = 130;
        let cursorBoost = 0;
        if (dist < interactRadius && dist > 0.1) {
          const force = (1 - dist / interactRadius) * 14;
          screenX += (dx / dist) * force;
          screenY += (dy / dist) * force;
          cursorBoost = 1 - dist / interactRadius;
        }

        // Normalize depth (-1 back to +1 front)
        const depthAlpha = (z2 + 1) * 0.5;

        return {
          x: screenX,
          y: screenY,
          z: z2,
          scale,
          depthAlpha,
          cursorBoost,
          isAccent: p.isAccent,
        };
      });

      // Draw wireframe edges
      ctx.lineWidth = 0.75;
      for (let i = 0; i < edges.length; i++) {
        const [aIdx, bIdx] = edges[i];
        const a = projected[aIdx];
        const b = projected[bIdx];
        const avgDepth = (a.depthAlpha + b.depthAlpha) * 0.5;
        const boost = Math.max(a.cursorBoost, b.cursorBoost);

        if (boost > 0.15) {
          ctx.strokeStyle = `hsla(75, 94%, 70%, ${0.08 + boost * 0.35})`;
        } else {
          ctx.strokeStyle = `hsla(40, 20%, 96%, ${0.02 + avgDepth * 0.085})`;
        }

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Draw projected vertices
      for (let i = 0; i < projected.length; i++) {
        const pt = projected[i];
        const radius = (pt.isAccent ? 2.1 : 1.3) * pt.scale + pt.cursorBoost * 1.5;

        if (pt.isAccent || pt.cursorBoost > 0.1) {
          const alpha = 0.25 + pt.depthAlpha * 0.55 + pt.cursorBoost * 0.3;
          ctx.fillStyle = `hsla(75, 94%, 70%, ${Math.min(1, alpha)})`;
        } else {
          const alpha = 0.08 + pt.depthAlpha * 0.32;
          ctx.fillStyle = `hsla(40, 20%, 96%, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
};
