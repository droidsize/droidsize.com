"use client";

import Cursor from "@/components/cursor";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import SmoothScroll from "@/components/smooth-scroll";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <SmoothScroll />
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#141211] via-[#1e1924] to-[#141211] bg-[length:100%_100%] bg-no-repeat"></div>
          <Navbar />
          {children}
          <Footer />
        </main>
        <Cursor />
      </div>
    </>
  );
}
