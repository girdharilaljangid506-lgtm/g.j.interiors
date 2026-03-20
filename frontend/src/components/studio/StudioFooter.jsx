import { Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";
import { brandConfig, legalLinks, navItems } from "@/data/studioContent";

export const StudioFooter = () => {
  const handleInstagramOpen = (event) => {
    event.preventDefault();
    const popup = window.open(brandConfig.instagramUrl, "_blank", "noopener,noreferrer");
    if (!popup) {
      console.warn("Instagram popup blocked. Please allow popups and try again.");
    }
  };

  return (
    <footer className="border-t border-white/10 py-10" data-testid="studio-footer">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-6 lg:px-10">
        <div data-testid="footer-brand-block">
          <div className="flex items-center gap-3" data-testid="footer-brand-row">
            {brandConfig.logoUrl ? (
              <img
                src={brandConfig.logoUrl}
                alt={`${brandConfig.name} logo`}
                className="h-12 w-auto border border-white/10 object-contain"
                data-testid="studio-logo-image-footer"
              />
            ) : null}
            <p className="text-sm uppercase tracking-[0.25em] text-studio-champagne" data-testid="footer-brand-text">
              {brandConfig.fullName}
            </p>
          </div>
          <p className="mt-2 text-xs text-studio-text/60" data-testid="footer-copyright-text">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <a
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInstagramOpen}
            className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-studio-champagne transition-colors duration-300 hover:text-white"
            data-testid="footer-instagram-link"
          >
            <Instagram className="h-4 w-4" />
            <span data-testid="footer-instagram-handle-text">{brandConfig.instagramHandle}</span>
          </a>
          <a
            href={`tel:${brandConfig.contact.phoneRaw}`}
            className="mt-2 block text-xs uppercase tracking-[0.15em] text-studio-text/65 transition-colors duration-300 hover:text-studio-champagne"
            data-testid="footer-phone-link"
          >
            <span data-testid="footer-phone-text">{brandConfig.contact.phoneDisplay}</span>
          </a>
        </div>

        <nav className="flex flex-wrap items-center gap-4" data-testid="footer-nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="text-xs uppercase tracking-[0.2em] text-studio-text/60 transition-colors duration-300 hover:text-studio-champagne"
              data-testid={`footer-${item.testId}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <nav className="flex flex-wrap items-center gap-4" data-testid="footer-legal-links">
          {legalLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="text-xs uppercase tracking-[0.15em] text-studio-text/50 transition-colors duration-300 hover:text-studio-champagne"
              data-testid={item.testId}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
};