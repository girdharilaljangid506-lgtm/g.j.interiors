import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { brandConfig, navItems } from "@/data/studioContent";

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
        <NavLink
          to="/"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-studio-champagne"
          data-testid="studio-brand-link"
        >
          {brandConfig.logoUrl ? (
            <img
              src={brandConfig.logoUrl}
              alt={`${brandConfig.name} logo`}
              className="h-10 w-auto object-contain"
              data-testid="studio-logo-image-navbar"
            />
          ) : null}
          <span data-testid="studio-brand-name-navbar">{brandConfig.name}</span>
        </NavLink>

        <nav
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          data-testid="studio-navbar-links"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? "text-studio-champagne" : "text-studio-text/80 hover:text-studio-champagne"
                }`
              }
              data-testid={item.testId}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button
          asChild
          className="rounded-none border border-studio-champagne/60 bg-studio-champagne px-6 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black hover:bg-white"
          data-testid="navbar-book-consultation-button"
        >
          <NavLink to="/contact" data-testid="navbar-book-consultation-link">
            Book Consultation
          </NavLink>
        </Button>
      </div>
    </motion.header>
  );
};