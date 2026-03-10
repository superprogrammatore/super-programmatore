import { motion } from "framer-motion";
import Particles from "./Particles";

const PricingSection = () => {
  return (
    <section id="offerta" className="py-32 px-6 relative overflow-hidden">
      <Particles count={15} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Offerta limitata
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-6">
            OFFERTA DI LANCIO
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
            Il valore completo del programma è 997€. Per il lancio, accedi all'intero 
            percorso a una frazione del prezzo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-lg mx-auto"
        >
          {/* Outer glow frame */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 via-primary/10 to-primary/30" />
          
          <div className="relative bg-card p-10 sm:p-14">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />

            <div className="mb-10">
              <span className="font-body text-muted-foreground line-through text-xl">997€</span>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="font-display text-7xl sm:text-8xl text-signal number-glow leading-none">97</span>
                <span className="font-display text-3xl text-signal">€</span>
              </div>
              <p className="font-body text-muted-foreground text-xs mt-4 uppercase tracking-[0.2em]">
                Accesso completo al percorso
              </p>
              
              {/* Savings badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 mt-4">
                <span className="font-body text-xs text-primary font-semibold uppercase tracking-wider">
                  Risparmi 900€
                </span>
              </div>
            </div>

            <div className="space-y-4 text-left font-body text-sm text-muted-foreground mb-10 max-w-xs mx-auto">
              {[
                "Ore di formazione video approfondita",
                "32 applicazioni educative interattive",
                "Progetti pratici nel mondo reale",
                "Metodologie AI per lo sviluppo software",
                "Analisi guidata di applicazioni reali",
                "Accesso a tutti gli aggiornamenti futuri",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-signal font-bold text-lg leading-none mt-[-2px]">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="group relative inline-flex w-full items-center justify-center bg-primary text-primary-foreground font-body font-bold text-lg px-10 py-5 uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_hsl(51_100%_50%/0.3)]"
            >
              <span className="relative z-10">Accedi ora — 97€</span>
              <div className="absolute inset-0 bg-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>

            <p className="font-body text-[11px] text-muted-foreground mt-4">
              Pagamento sicuro. Accesso immediato.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
