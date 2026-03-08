import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroStats } from "@/data/studioContent";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden pt-24"
      data-testid="hero-section"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://customer-assets.emergentagent.com/job_gj-design-lab/artifacts/w04yttty_LIVINGROOM%20AND%20KITCHEN%20%283%29.jpg"
          alt="Cinematic interior by G.J. Interiors"
          className="hero-image-pulse h-full w-full object-cover object-center"
          data-testid="hero-background-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/70 to-[#0a0a0a]" />
      </div>

      <div className="floating-glow absolute left-[8%] top-[20%] h-36 w-36 rounded-full bg-studio-gold/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
        <motion.p
          className="mb-4 text-xs uppercase tracking-[0.35em] text-studio-champagne"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-testid="hero-eyebrow-text"
        >
          Cinematic Interior Design Studio
        </motion.p>

        <motion.h1
          className="max-w-4xl text-4xl text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          data-testid="hero-main-heading"
        >
          We design immersive spaces that feel as bold as your vision.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-base text-studio-text/80 md:text-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          data-testid="hero-subheading-text"
        >
          G.J. Interiors crafts luxury residential and commercial environments through
          mood, material, and movement.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <Button
            asChild
            className="rounded-none bg-studio-champagne px-8 py-6 text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-white"
            data-testid="hero-view-portfolio-button"
          >
            <a href="#portfolio" data-testid="hero-view-portfolio-link">
              View Portfolio
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-none border-studio-champagne/40 bg-black/40 px-8 py-6 text-xs font-semibold uppercase tracking-[0.2em] text-studio-champagne hover:bg-studio-champagne/10"
            data-testid="hero-start-project-button"
          >
            <a href="#contact" data-testid="hero-start-project-link">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-4 border border-white/10 bg-black/45 p-6 backdrop-blur md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          data-testid="hero-stats-panel"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="space-y-1" data-testid={`hero-stat-${stat.value}`}>
              <p className="text-3xl font-semibold text-studio-champagne" data-testid={`hero-stat-value-${stat.value}`}>
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-studio-text/65" data-testid={`hero-stat-label-${stat.value}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};