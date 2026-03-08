import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/studio/Reveal";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32" data-testid="about-section">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal className="space-y-6">
          <p
            className="text-xs uppercase tracking-[0.3em] text-studio-gold"
            data-testid="about-eyebrow-text"
          >
            About the Studio
          </p>
          <h2 className="text-3xl text-studio-text sm:text-4xl" data-testid="about-heading-text">
            Designing spatial stories with precision, mood, and timeless detail.
          </h2>
          <p className="text-base text-studio-text/80 md:text-lg" data-testid="about-description-text">
            At G.J. Interiors Design Studio, every project begins with your lifestyle and ends
            with a deeply personalized environment. We combine architectural intelligence with
            expressive material palettes to deliver spaces that perform and inspire.
          </p>

          <ul className="space-y-4" data-testid="about-highlights-list">
            <li className="flex items-start gap-3" data-testid="about-highlight-turnkey">
              <CheckCircle2 className="mt-1 h-5 w-5 text-studio-champagne" />
              <span className="text-sm text-studio-text/80">End-to-end design + turnkey execution</span>
            </li>
            <li className="flex items-start gap-3" data-testid="about-highlight-materials">
              <CheckCircle2 className="mt-1 h-5 w-5 text-studio-champagne" />
              <span className="text-sm text-studio-text/80">Global material references with local craftsmanship</span>
            </li>
            <li className="flex items-start gap-3" data-testid="about-highlight-timelines">
              <CheckCircle2 className="mt-1 h-5 w-5 text-studio-champagne" />
              <span className="text-sm text-studio-text/80">Transparent planning, budget control, and timeline discipline</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="relative">
          <div
            className="absolute -left-6 -top-6 h-24 w-24 border border-studio-champagne/30"
            aria-hidden="true"
          />
          <img
            src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?q=85&w=1080"
            alt="Interior design studio workspace"
            className="aspect-[4/5] w-full border border-white/10 object-cover object-center"
            data-testid="about-image"
          />
        </Reveal>
      </div>
    </section>
  );
};