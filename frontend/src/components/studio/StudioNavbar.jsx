import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/studioContent";

export const StudioNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="studio-navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-white/10 bg-black/70 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <a
          href="#hero"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-studio-champagne"
          data-testid="studio-brand-link"
        >
          G.J. Interiors
        </a>

        <nav
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          data-testid="studio-navbar-links"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-studio-text/80 transition-colors duration-300 hover:text-studio-champagne"
              data-testid={item.testId}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          className="rounded-none border border-studio-champagne/60 bg-studio-champagne px-6 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:bg-white"
          data-testid="navbar-book-consultation-button"
        >
          <a href="#contact" data-testid="navbar-book-consultation-link">
            Book Consultation
          </a>
        </Button>
      </div>
    </motion.header>
  );
};