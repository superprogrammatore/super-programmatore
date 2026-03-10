import { motion } from "framer-motion";
import { TrendingUp, Briefcase, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "+450%", label: "Crescita richiesta AI developer dal 2023" },
  { value: "87%", label: "Aziende che prevedono di adottare AI entro il 2027" },
  { value: "€65K+", label: "Stipendio medio AI Application Builder in Italia" },
];

const CareerSection = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-signal/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-signal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-signal font-medium">
              La tua opportunità
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05] mb-8">
            QUESTA È LA TUA
            <br />
            <span className="text-signal">OCCASIONE PER CAMBIARE TUTTO.</span>
          </h2>

          <p className="font-body text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl">
            Non importa da dove parti. Non importa che lavoro fai oggi.
            Il mercato sta cercando <span className="text-foreground font-medium">disperatamente</span> persone 
            che sappiano costruire software con l'intelligenza artificiale — e la domanda 
            cresce ogni giorno.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="border border-signal/20 bg-signal/[0.03] p-6 sm:p-8 text-center group hover:border-signal/40 transition-colors"
            >
              <span className="font-display text-3xl sm:text-4xl text-signal block mb-2">
                {stat.value}
              </span>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Two columns: pain vs opportunity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border bg-card p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-muted-foreground/30" />
            <Briefcase className="w-8 h-8 text-muted-foreground mb-6" />
            <h3 className="font-display text-xl uppercase tracking-tight mb-4 text-muted-foreground">
              Dove sei oggi
            </h3>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              {[
                "Un lavoro che non ti soddisfa",
                "Uno stipendio che non cresce",
                "Competenze che il mercato non cerca più",
                "La sensazione di essere rimasto indietro",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-muted-foreground/50 mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-signal/30 bg-signal/[0.03] p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-signal" />
            <TrendingUp className="w-8 h-8 text-signal mb-6" />
            <h3 className="font-display text-xl uppercase tracking-tight mb-4 text-signal">
              Dove puoi arrivare
            </h3>
            <ul className="space-y-3 font-body text-sm text-foreground">
              {[
                "Una carriera nel settore più richiesto al mondo",
                "Competenze che le aziende pagano premium",
                "La capacità di costruire qualsiasi idea",
                "Indipendenza professionale e creativa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-signal mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 border border-signal/20 bg-card p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-signal/40 to-transparent" />
          <p className="font-body text-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Nei prossimi anni, chi sa costruire applicazioni con l'AI avrà un vantaggio 
            competitivo <span className="text-signal font-semibold">impossibile da ignorare</span>. 
            Le aziende non cercano solo programmatori — cercano chi sa{" "}
            <span className="text-signal font-semibold">trasformare idee in prodotti</span> usando 
            l'intelligenza artificiale. Questa è la competenza del futuro.{" "}
            <span className="text-foreground font-medium">E il futuro è già iniziato.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
