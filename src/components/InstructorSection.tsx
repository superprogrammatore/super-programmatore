import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const InstructorSection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Il creatore
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-16">
            CHI C'È
            <br />
            <span className="text-signal">DIETRO QUESTO PROGETTO.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 items-start">
            {/* Monogram portrait */}
            <div className="relative mx-auto md:mx-0">
              <div className="w-[240px] h-[300px] bg-card border border-border flex flex-col items-center justify-center relative overflow-hidden">
                {/* Grid lines inside */}
                <div className="absolute inset-0 grid-overlay opacity-40" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                <div className="relative z-10 text-center">
                  <div className="text-7xl font-display text-primary leading-none tracking-tight">EF</div>
                  <div className="w-12 h-[2px] bg-primary mx-auto mt-5 mb-3" />
                  <span className="font-body text-xs text-muted-foreground uppercase tracking-[0.2em]">
                    Fondatore
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-primary" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-primary" />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl uppercase tracking-tight mb-1">
                  Eugenio Fontana
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Programmazione", "Cloud Computing", "Cybersecurity"].map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Formatore nel settore tecnologico con anni di esperienza nella formazione 
                  su programmazione, cloud computing e cybersecurity.
                </p>
                <p>
                  Questo progetto nasce dall'esperienza diretta nella formazione e dalla 
                  convinzione che il modo tradizionale di insegnare programmazione sia 
                  diventato obsoleto.{" "}
                  <span className="text-foreground font-medium">L'AI ha cambiato le regole. Chi si adatta per primo, vince.</span>
                </p>
              </div>
              
              <div className="border-l-2 border-primary pl-6 py-3">
                <p className="font-body text-foreground text-lg italic leading-relaxed">
                  "Il metodo che ho sviluppato combina spiegazione teorica, applicazioni interattive 
                  e costruzione di progetti reali — un approccio che{" "}
                  <span className="text-signal not-italic font-semibold">non troverai in nessun altro corso online</span>."
                </p>
              </div>

              <a
                href="https://eugeniofontana.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-signal transition-colors group mt-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="border-b border-primary/30 group-hover:border-signal/50 transition-colors">eugeniofontana.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
