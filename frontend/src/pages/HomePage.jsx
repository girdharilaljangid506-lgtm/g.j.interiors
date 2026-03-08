import { Link } from "react-router-dom";
import { HeroSection } from "@/components/studio/HeroSection";
import { ServicesSection } from "@/components/studio/ServicesSection";
import { PortfolioSection } from "@/components/studio/PortfolioSection";
import { testimonials, brandConfig } from "@/data/studioContent";

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />

      <section className="py-24" data-testid="home-trust-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl text-studio-text sm:text-4xl" data-testid="home-trust-heading">
            Trusted by homeowners and businesses across Gujarat.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3" data-testid="home-trust-grid">
            {testimonials.slice(0, 3).map((item, index) => (
              <article key={item.client} className="border border-white/10 bg-black/25 p-5" data-testid={`home-trust-card-${index + 1}`}>
                <p className="text-sm text-studio-text/80" data-testid={`home-trust-quote-${index + 1}`}>“{item.quote}”</p>
                <p className="mt-4 text-base text-studio-champagne" data-testid={`home-trust-client-${index + 1}`}>{item.client}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4" data-testid="home-trust-cta-row">
            <Link to="/testimonials" className="border border-studio-champagne/40 px-6 py-3 text-xs uppercase tracking-[0.2em] text-studio-champagne" data-testid="home-view-testimonials-link">
              View All Testimonials
            </Link>
            <a href={`https://wa.me/${brandConfig.contact.whatsappNumberIntl}`} target="_blank" rel="noopener noreferrer" className="bg-studio-champagne px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black" data-testid="home-whatsapp-cta-link">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}