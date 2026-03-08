import { Building2, LampDesk, Sparkles, Sofa } from "lucide-react";
import { Reveal } from "@/components/studio/Reveal";
import { services } from "@/data/studioContent";

const icons = [LampDesk, Building2, Sofa, Sparkles];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32" data-testid="services-section">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 max-w-2xl space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-studio-gold" data-testid="services-eyebrow-text">
            Services
          </p>
          <h2 className="text-3xl text-studio-text sm:text-4xl" data-testid="services-heading-text">
            Signature offerings crafted for elevated living and bold commercial identities.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2" data-testid="services-cards-grid">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal
                key={service.title}
                delay={index * 0.1}
                className="group border border-white/10 bg-studio-panel/80 p-8 backdrop-blur transition-colors duration-500 hover:border-studio-champagne/45"
              >
                <div data-testid={`service-card-${index + 1}`}>
                  <Icon className="mb-5 h-8 w-8 text-studio-champagne" strokeWidth={1.5} />
                  <h3 className="text-2xl text-studio-text" data-testid={`service-title-${index + 1}`}>
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-studio-text/75" data-testid={`service-description-${index + 1}`}>
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};