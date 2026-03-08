import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/studio/Reveal";
import { brandConfig, founderProfile } from "@/data/studioContent";

export const FounderSection = () => {
  return (
    <section id="founder" className="py-24 md:py-32" data-testid="founder-portfolio-section">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr,1.3fr] lg:px-10">
        <Reveal className="relative">
          <div
            className="absolute -left-5 -top-5 h-24 w-24 border border-studio-champagne/35"
            aria-hidden="true"
          />
          <img
            src={founderProfile.imageUrl}
            alt={`${founderProfile.name} portrait`}
            className="aspect-[4/5] w-full border border-white/10 object-cover object-center"
            data-testid="founder-portfolio-image"
          />
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-studio-gold" data-testid="founder-eyebrow-text">
            Founder Portfolio
          </p>

          <h2 className="text-3xl text-studio-text sm:text-4xl" data-testid="founder-name-text">
            {founderProfile.name}
          </h2>
          <p className="text-base text-studio-champagne md:text-lg" data-testid="founder-role-text">
            {founderProfile.role}
          </p>
          <p className="text-sm uppercase tracking-[0.18em] text-studio-text/70" data-testid="founder-studio-text">
            {founderProfile.studio}
          </p>

          <p className="text-base text-studio-text/80 md:text-lg" data-testid="founder-bio-text">
            {founderProfile.bio}
          </p>

          <div className="grid gap-4 md:grid-cols-2" data-testid="founder-highlight-grid">
            <div className="border border-white/10 bg-black/25 p-5" data-testid="founder-experience-card">
              <p className="text-xs uppercase tracking-[0.2em] text-studio-gold">Experience</p>
              <p className="mt-2 text-2xl text-studio-text" data-testid="founder-experience-text">
                {founderProfile.experience}
              </p>
            </div>

            <div className="border border-white/10 bg-black/25 p-5" data-testid="founder-specializations-card">
              <p className="text-xs uppercase tracking-[0.2em] text-studio-gold">Specializations</p>
              <ul className="mt-2 space-y-2 text-sm text-studio-text/80" data-testid="founder-specializations-list">
                {founderProfile.specializations.map((item) => (
                  <li key={item} className="flex items-start gap-2" data-testid={`founder-specialization-${item}`}>
                    <Sparkles className="mt-0.5 h-4 w-4 text-studio-champagne" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-white/10 bg-black/25 p-5" data-testid="founder-achievements-card">
            <p className="text-xs uppercase tracking-[0.2em] text-studio-gold">Achievements</p>
            <ul className="mt-3 space-y-2 text-sm text-studio-text/80" data-testid="founder-achievements-list">
              {founderProfile.achievements.map((item) => (
                <li key={item} className="list-disc pl-1" data-testid={`founder-achievement-${item}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Button
            asChild
            className="rounded-none bg-studio-champagne px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-white"
            data-testid="founder-whatsapp-button"
          >
            <a
              href={`https://wa.me/${brandConfig.contact.whatsappNumberIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="founder-whatsapp-link"
            >
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Founder
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};