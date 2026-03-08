import "@/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { StudioNavbar } from "@/components/studio/StudioNavbar";
import { StudioFooter } from "@/components/studio/StudioFooter";
import { FloatingInstagramButton } from "@/components/studio/FloatingInstagramButton";
import { FloatingContactButtons } from "@/components/studio/FloatingContactButtons";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import FounderPage from "@/pages/FounderPage";
import ServicesPage from "@/pages/ServicesPage";
import ProjectsPage from "@/pages/ProjectsPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <BrowserRouter>
        <div className="studio-app" data-testid="studio-website-root">
          <StudioNavbar />
          <main className="relative z-10" data-testid="studio-main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/founder" element={<FounderPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <StudioFooter />
          <FloatingContactButtons />
          <FloatingInstagramButton />
          <Toaster richColors position="top-right" />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
