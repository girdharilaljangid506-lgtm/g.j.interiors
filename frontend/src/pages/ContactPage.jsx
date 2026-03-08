import { MessageCircle, PhoneCall } from "lucide-react";
import { ContactSection } from "@/components/studio/ContactSection";
import { brandConfig } from "@/data/studioContent";

export default function ContactPage() {
  return (
    <div className="pt-28" data-testid="contact-page">
      <section className="pb-8" data-testid="contact-page-quick-actions-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h1 className="text-4xl text-studio-text sm:text-5xl lg:text-6xl" data-testid="contact-page-heading">
            Let’s discuss your next interior project.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-studio-text/75 md:text-lg" data-testid="contact-page-subheading">
            Use the quick actions below or send inquiry details through the form.
          </p>

          <div className="mt-8 flex flex-wrap gap-4" data-testid="contact-page-action-buttons">
            <a
              href={`https://wa.me/${brandConfig.contact.whatsappNumberIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-studio-champagne px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black"
              data-testid="contact-page-whatsapp-link"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${brandConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-studio-champagne/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-studio-champagne"
              data-testid="contact-page-call-link"
            >
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}