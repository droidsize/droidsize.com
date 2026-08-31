import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-[var(--site-inverse)] px-5 py-3 font-semibold text-[var(--site-inverse-ink)] focus:not-sr-only"
        >
          Skip to main content
        </a>
        <div className="fixed inset-0 -z-10 bg-[var(--site-canvas)]"></div>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
