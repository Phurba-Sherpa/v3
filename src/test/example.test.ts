import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Index from "@/pages/Index";

// Polyfill ResizeObserver and scrollIntoView for cmdk inside jsdom
global.ResizeObserver =
  global.ResizeObserver ||
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}

HTMLCanvasElement.prototype.getContext = (() => null) as unknown as typeof HTMLCanvasElement.prototype.getContext;

describe("Phurba Sherpa Portfolio", () => {
  it("renders all 5 editorial sections and quantified engineering work", () => {
    render(React.createElement(Index));

    expect(screen.getAllByText(/Full-Stack & AI Systems Engineer/i).length).toBeGreaterThan(0);
    expect(screen.getByText("98.6%")).toBeInTheDocument();
    expect(
      screen.getByText(/Conversational Card Transaction Analytics Engine/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Kortix Suna Autonomous PDF Report Pipeline/i),
    ).toBeInTheDocument();
    expect(screen.getByText("ollama-pr-review-gh-action")).toBeInTheDocument();
    expect(screen.getAllByText(/Techkraft Inc/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/WOW Finstack/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/PeakMetrics/i).length).toBeGreaterThan(0);
    expect(
      screen.getByText(/AWS Future Agentic Engineer Nanodegree/i),
    ).toBeInTheDocument();
  });

  it("opens the interactive ⌘K Command Palette when clicking the header trigger", () => {
    render(React.createElement(Index));

    const menuButton = screen.getByRole("button", { name: /open command menu/i });
    fireEvent.click(menuButton);

    expect(
      screen.getByPlaceholderText(/Jump to section, copy email, or inspect systems/i),
    ).toBeInTheDocument();
  });
});
