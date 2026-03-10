import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Il cambiamento
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-12">
            IL CODICE NON SI SCRIVE PIÙ.
            <br />
            <span className="text-signal">SI PROGETTA.</span>
          </h2>

          <div className="space-y-6 font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Lo sviluppo software sta attraversando la trasformazione più radicale dalla sua nascita. 
              L'intelligenza artificiale non è più un supporto:{" "}
              <span className="text-foreground font-medium">è diventata lo strumento principale</span>{" "}
              con cui si costruiscono applicazioni, servizi e prodotti digitali.
            </p>
            <p>
              Le aziende cercano una nuova figura professionale: qualcuno che sappia 
              <span className="text-foreground font-medium"> pensare come un architetto del software</span> e 
              usare l'AI per trasformare idee in sistemi funzionanti.
            </p>
            
            {/* Pull quote */}
            <div className="border-l-2 border-primary pl-6 py-4 my-10">
              <p className="text-foreground text-xl sm:text-2xl font-body font-light italic leading-relaxed">
                "Non servono anni di studio su sintassi e framework. 
                Serve una <span className="text-signal font-medium not-italic">mentalità nuova</span>."
              </p>
            </div>
            
            <p>
              Questo percorso ti insegna esattamente questo. Non è un corso tradizionale. 
              È un sistema per acquisire la competenza più richiesta nel mercato tecnologico moderno.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
