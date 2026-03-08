import { Quote } from "lucide-react";
import { Reveal } from "@/components/studio/Reveal";
import { testimonials } from "@/data/studioContent";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32" data-testid="testimonials-section">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 max-w-2xl space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-studio-gold" data-testid="testimonials-eyebrow-text">
            Client Voices
          </p>
          <h2 className="text-3xl text-studio-text sm:text-4xl" data-testid="testimonials-heading-text">
            Trusted by clients who wanted spaces that stand apart.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3" data-testid="testimonials-cards-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.client}
              delay={index * 0.1}
              className="border border-white/10 bg-studio-panel/80 p-6 backdrop-blur"
            >
              <article data-testid={`testimonial-card-${index + 1}`}>
                <Quote className="h-8 w-8 text-studio-champagne" strokeWidth={1.5} />
                <p className="mt-5 text-sm leading-relaxed text-studio-text/85" data-testid={`testimonial-quote-${index + 1}`}>
                  “{testimonial.quote}”
                </p>
                <p className="mt-6 text-base text-studio-text" data-testid={`testimonial-client-${index + 1}`}>
                  {testimonial.client}
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-studio-text/60" data-testid={`testimonial-project-${index + 1}`}>
                  {testimonial.project}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};