import type { Metadata } from "next";
import "./globals.css";
import { Footer, LeftSidebar } from "../components/partials";
import { RightSidebar } from "../components/partials";
export const metadata: Metadata = {
  title: "Phurba Sherpa",
  description: "A personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex font-sans text-slate bg-primary">
        <LeftSidebar />
        <main className="max-w-7xl w-full mx-auto  px-6 md:px-16 lg:px-32 ">
          {children}
          <Footer />
        </main>
        <RightSidebar />
      </body>
    </html>
  );
}
