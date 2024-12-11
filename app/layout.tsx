import type { Metadata } from "next";
import "./globals.css";
import { Footer, LeftSidebar, Nav } from "../components/partials";
import { RightSidebar } from "../components/partials";

const title = "Phurba Sherpa - Software Developer";
const description =
  "Portfolio of a passionate software developer showcasing innovative projects, technical skills, and expertise in building user-centric web applications. Let's create impactful digital solutions together.";

const url = "https://phurbasherpa.name.np/";
export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    type: "website",
    siteName: "Phurba's personal website",
    images: [
      {
        url: "/v3.png",
        secureUrl: "/v3.png",
        width: 600,
        height: 300,
        alt: "Preview image for Phurba's website",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className="bg-primary text-slate font-sans overflow-x-hidden">
        <Nav />
        <div className="flex">
          <LeftSidebar />
          <main className="max-w-7xl w-full mx-auto  px-6 md:px-16 lg:px-32">
            {children}
            <Footer />
          </main>
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
