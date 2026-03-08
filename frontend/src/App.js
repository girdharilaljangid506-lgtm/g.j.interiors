import "@/App.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { StudioNavbar } from "@/components/studio/StudioNavbar";
import { HeroSection } from "@/components/studio/HeroSection";
import { AboutSection } from "@/components/studio/AboutSection";
import { FounderSection } from "@/components/studio/FounderSection";
import { ServicesSection } from "@/components/studio/ServicesSection";
import { PortfolioSection } from "@/components/studio/PortfolioSection";
import { ProcessSection } from "@/components/studio/ProcessSection";
import { TestimonialsSection } from "@/components/studio/TestimonialsSection";
import { ContactSection } from "@/components/studio/ContactSection";
import { StudioFooter } from "@/components/studio/StudioFooter";
import { FloatingInstagramButton } from "@/components/studio/FloatingInstagramButton";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="studio-app" data-testid="studio-website-root">
        <StudioNavbar />
        <main className="relative z-10" data-testid="studio-main-content">
          <HeroSection />
          <AboutSection />
          <FounderSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <StudioFooter />
        <FloatingInstagramButton />
        <Toaster richColors position="top-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
