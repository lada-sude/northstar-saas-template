import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(129,140,248,0.16),_transparent_32%),linear-gradient(to_bottom,_#f8fbff_0%,_#eef4ff_100%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}