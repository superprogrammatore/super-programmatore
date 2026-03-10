import { motion } from "framer-motion";
import { Award } from "lucide-react";

const CertificateSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative border border-primary/30 bg-card overflow-hidden"
        >
          {/* Top gold bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
          {/* Bottom gold bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />

          <div className="p-8 sm:p-16 flex flex-col items-center md:flex-row md:items-center gap-8 md:gap-16">
            {/* Certificate visual */}
            <div className="flex-shrink-0">
              <div className="relative w-[160px] h-[210px] sm:w-[200px] sm:h-[260px] border border-primary/40 bg-primary/[0.04] flex flex-col items-center justify-center">
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-primary" />
                <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-primary" />
                <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-primary" />

                <Award className="w-12 h-12 text-primary mb-4" />
                <div className="w-10 h-[1px] bg-primary/50 mb-4" />
                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-primary text-center leading-relaxed px-4">
                  Attestato
                  <br />
                  AI Application
                  <br />
                  Builder
                </span>
                <div className="w-10 h-[1px] bg-primary/50 mt-4" />
              </div>
            </div>

            {/* Text content */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="w-6 h-[1px] bg-primary" />
                <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
                  Certificazione
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-[1.1] mb-4">
                ATTESTATO DI
                <br />
                <span className="text-signal">AI APPLICATION BUILDER</span>
              </h2>

              <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-lg">
                Al completamento del percorso riceverai l'attestato ufficiale di{" "}
                <span className="text-foreground font-medium">AI Application Builder</span> — 
                la prova concreta che sai progettare e sviluppare applicazioni 
                professionali utilizzando l'intelligenza artificiale.
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {["Competenza verificata", "Portfolio progetti reali", "Profilo professionale"].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] uppercase tracking-[0.15em] text-primary border border-primary/30 bg-primary/[0.05] px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
