import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import ProblemSection from "@/components/ProblemSection";
import CareerSection from "@/components/CareerSection";
import MethodSection from "@/components/MethodSection";
import AppsGridSection from "@/components/AppsGridSection";
import InstructorSection from "@/components/InstructorSection";
import PricingSection from "@/components/PricingSection";
import CertificateSection from "@/components/CertificateSection";
import FreeLessonSection from "@/components/FreeLessonSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <VideoSection />
      <ProblemSection />
      <CareerSection />
      <MethodSection />
      <AppsGridSection />
      <InstructorSection />
      <FreeLessonSection />
      <CertificateSection />
      <PricingSection />
      <FinalCTA />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-body text-xs text-muted-foreground">
              © 2026 Eugenio Fontana. Tutti i diritti riservati.
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary" />
              <span className="font-display text-xs tracking-[0.2em] uppercase text-signal">
                Super Programmatore
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Link to="/privacy-policy" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link to="/cookie-policy" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <span className="text-border">|</span>
            <span className="font-body text-xs text-muted-foreground">
              P.IVA 07097370485
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
