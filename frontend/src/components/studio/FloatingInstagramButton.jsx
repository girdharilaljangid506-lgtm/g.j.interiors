import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { brandConfig } from "@/data/studioContent";

export const FloatingInstagramButton = () => {
  const handleInstagramOpen = (event) => {
    event.preventDefault();
    const popup = window.open(brandConfig.instagramUrl, "_blank", "noopener,noreferrer");
    if (!popup) {
      console.warn("Instagram popup blocked. Please allow popups and try again.");
    }
  };

  return (
    <motion.a
      href={brandConfig.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleInstagramOpen}
      aria-label="Follow on Instagram"
      data-testid="floating-instagram-button"
      className="fixed right-3 top-1/2 z-[60] -translate-y-1/2 border border-studio-champagne/60 bg-black/75 p-3 text-studio-champagne shadow-[0_0_25px_rgba(212,175,55,0.35)] backdrop-blur transition-colors duration-300 hover:bg-studio-champagne hover:text-black sm:right-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <Instagram className="h-5 w-5" strokeWidth={1.8} data-testid="floating-instagram-icon" />
    </motion.a>
  );
};