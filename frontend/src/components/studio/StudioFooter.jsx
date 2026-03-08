import { navItems } from "@/data/studioContent";

export const StudioFooter = () => {
  return (
    <footer className="border-t border-white/10 py-10" data-testid="studio-footer">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-6 lg:px-10">
        <div data-testid="footer-brand-block">
          <p className="text-sm uppercase tracking-[0.25em] text-studio-champagne" data-testid="footer-brand-text">
            G.J. Interiors Design Studio
          </p>
          <p className="mt-2 text-xs text-studio-text/60" data-testid="footer-copyright-text">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-4" data-testid="footer-nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-studio-text/60 transition-colors duration-300 hover:text-studio-champagne"
              data-testid={`footer-${item.testId}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};