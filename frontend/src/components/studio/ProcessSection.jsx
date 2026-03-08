import { Reveal } from "@/components/studio/Reveal";
import { processSteps } from "@/data/studioContent";

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32" data-testid="process-section">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-12 max-w-2xl space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-studio-gold" data-testid="process-eyebrow-text">
            Our Design Journey
          </p>
          <h2 className="text-3xl text-studio-text sm:text-4xl" data-testid="process-heading-text">
            A four-stage approach that keeps creativity dramatic and execution precise.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2" data-testid="process-steps-grid">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.step}
              delay={index * 0.1}
              className="border border-white/10 bg-black/30 p-8 backdrop-blur"
            >
              <article data-testid={`process-step-${step.step}`}>
                <p className="text-4xl text-studio-champagne" data-testid={`process-step-number-${step.step}`}>
                  {step.step}
                </p>
                <h3 className="mt-4 text-2xl text-studio-text" data-testid={`process-step-title-${step.step}`}>
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-studio-text/75" data-testid={`process-step-detail-${step.step}`}>
                  {step.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};