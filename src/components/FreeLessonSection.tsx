import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const FreeLessonSection = () => {
  return (
    <section className="py-20 sm:py-32 px-6 relative overflow-hidden">
      {/* Subtle glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/[0.08] px-5 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-body text-xs uppercase tracking-[0.2em] text-primary font-medium">
              Lezione Gratuita Disponibile
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.1] mb-6">
            <span className="text-signal">LA SFIDA:</span>
            <br />
            In meno di 10 minuti ti insegno a creare una{" "}
            <span className="text-signal">Web App 100% funzionante!</span>
          </h2>

          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-2">
            Registrazione utenti, login/logout, database, accessibile da internet.
          </p>
          <p className="font-body text-foreground font-medium text-base sm:text-lg">
            Tutto questo senza scrivere una singola riga di codice "tradizionale".
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 via-primary/10 to-primary/30" />

          <div className="relative bg-card p-8 sm:p-14 text-center">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />

            <div className="w-14 h-14 border border-primary/40 bg-primary/[0.08] flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight mb-3">
              Accetta la Sfida
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-8 max-w-md mx-auto">
              Guarda come creo una web app completa in meno di 10 minuti. 
              Se non ti convince, non hai nulla da perdere.
            </p>

            <a
              href="https://lezione.superprogrammatore.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-primary text-primary-foreground font-body font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_hsl(51_100%_50%/0.3)] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                Guarda la Lezione Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>

            <p className="font-body text-[11px] text-muted-foreground mt-4">
              ⭐ 100% Gratuito — Nessuna carta richiesta
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeLessonSection;
