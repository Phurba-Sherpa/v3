import type { Metadata } from "next";
import "./globals.css";
import { Footer, LeftSidebar, Nav } from "../components/partials";
import { RightSidebar } from "../components/partials";

export const metadata: Metadata = {
  title: "Phurba Sherpa",
  description: "A personal website",
  openGraph: {
    title: "Phurba Sherpa - Software Developer",
    url: "http://phurbasherpaname.np",
    type: "website",
    images: [
      {
        url: "http://phurbasherpaname.np/v3.png",
        width: 600,
        height: 300,
        alt: "Phurba Sherpa's Personal Website",
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
