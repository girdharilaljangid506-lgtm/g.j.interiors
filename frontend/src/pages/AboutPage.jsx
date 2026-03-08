import { AboutSection } from "@/components/studio/AboutSection";
import { FounderSection } from "@/components/studio/FounderSection";

export default function AboutPage() {
  return (
    <div className="pt-20" data-testid="about-page">
      <AboutSection />
      <FounderSection />
    </div>
  );
}