import { ServicesSection } from "@/components/studio/ServicesSection";
import { ProcessSection } from "@/components/studio/ProcessSection";

export default function ServicesPage() {
  return (
    <div className="pt-20" data-testid="services-page">
      <ServicesSection />
      <ProcessSection />
    </div>
  );
}