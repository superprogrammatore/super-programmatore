import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import VideoSection from "@/components/VideoSection";
import ProblemSection from "@/components/ProblemSection";
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
      <MethodSection />
      <AppsGridSection />
      <InstructorSection />
      <FreeLessonSection />
      <CertificateSection />
      <PricingSection />
      <FinalCTA />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
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
      </footer>
    </div>
  );
};

export default Index;
