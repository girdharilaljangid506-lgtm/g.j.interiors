import { Reveal } from "@/components/studio/Reveal";
import { brandConfig, portfolioItems } from "@/data/studioContent";

export const PortfolioSection = () => {
  const handleInstagramOpen = (event) => {
    event.preventDefault();
    const popup = window.open(brandConfig.instagramUrl, "_blank", "noopener,noreferrer");
    if (!popup) {
      window.location.href = brandConfig.instagramUrl;
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32" data-testid="portfolio-section">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 max-w-2xl space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-studio-gold" data-testid="portfolio-eyebrow-text">
            Selected Projects
          </p>
          <h2 className="text-3xl text-studio-text sm:text-4xl" data-testid="portfolio-heading-text">
            A cinematic bento gallery of project data curated from your Instagram direction.
          </h2>
          <a
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleInstagramOpen}
            className="inline-flex items-center border border-studio-champagne/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-studio-champagne transition-colors duration-300 hover:bg-studio-champagne/10"
            data-testid="portfolio-instagram-profile-link"
          >
            View More on {brandConfig.instagramHandle}
          </a>
        </Reveal>

        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-3" data-testid="portfolio-bento-grid">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className={`group relative overflow-hidden border border-white/10 ${item.gridClass}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full scale-110 object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-100"
                data-testid={`portfolio-image-${index + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5" data-testid={`portfolio-item-${index + 1}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-studio-champagne" data-testid={`portfolio-category-${index + 1}`}>
                  {item.category}
                </p>
                <h3 className="mt-1 text-xl text-white" data-testid={`portfolio-title-${index + 1}`}>
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-studio-text/70" data-testid={`portfolio-source-${index + 1}`}>
                  {item.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};