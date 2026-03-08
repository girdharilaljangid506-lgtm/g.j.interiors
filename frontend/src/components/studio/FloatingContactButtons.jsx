import { MessageCircle, PhoneCall } from "lucide-react";
import { brandConfig } from "@/data/studioContent";

export const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-20 left-4 z-[60] flex flex-col gap-3" data-testid="floating-contact-buttons">
      <a
        href={`https://wa.me/${brandConfig.contact.whatsappNumberIntl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-studio-champagne/60 bg-black/75 px-4 py-2 text-xs uppercase tracking-[0.12em] text-studio-champagne backdrop-blur transition-colors duration-300 hover:bg-studio-champagne hover:text-black"
        data-testid="floating-whatsapp-button"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <a
        href={`tel:${brandConfig.contact.phoneRaw}`}
        className="inline-flex items-center gap-2 border border-studio-champagne/60 bg-black/75 px-4 py-2 text-xs uppercase tracking-[0.12em] text-studio-champagne backdrop-blur transition-colors duration-300 hover:bg-studio-champagne hover:text-black"
        data-testid="floating-call-button"
      >
        <PhoneCall className="h-4 w-4" /> Call
      </a>
    </div>
  );
};