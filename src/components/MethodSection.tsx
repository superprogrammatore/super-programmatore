import { motion } from "framer-motion";

const modules = [
  {
    number: "01",
    title: "FONDAMENTA",
    description:
      "Comprendi come funzionano le web application dal primo principio. Architettura, protocolli, database, frontend e backend — senza scorciatoie.",
    detail: "Video + App interattive",
  },
  {
    number: "02",
    title: "IL METODO AI",
    description:
      "Impara le metodologie e le best practice per programmare con l'intelligenza artificiale. Prompt engineering, progettazione di sistemi, debugging assistito.",
    detail: "Metodologie + Pratica",
  },
  {
    number: "03",
    title: "APPLICAZIONI REALI",
    description:
      "Progetti pratici guidati dove costruisci applicazioni complete nel mondo reale, dalla progettazione al deploy, usando l'AI come strumento primario.",
    detail: "Progetti guidati",
  },
  {
    number: "04",
    title: "ANALISI GUIDATA",
    description:
      "Studi approfonditi di applicazioni reali esistenti. Analizzi l'architettura, le scelte tecniche e impari a ragionare come un professionista.",
    detail: "Case studies",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Il metodo
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1]">
            UN PERCORSO,
            <br />
            <span className="text-signal">NON UN VIDEOCORSO.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border border-border bg-card p-8 sm:p-10 hover:border-primary/30 transition-all duration-500"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl text-primary">{mod.number}</span>
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border px-3 py-1">
                    {mod.detail}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight mb-4">
                  {mod.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {mod.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 border border-primary/20 bg-primary/[0.03] p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
          <p className="font-body text-foreground text-lg leading-relaxed relative z-10">
            Ore di formazione video approfondita. Spiegazioni dettagliate. Progetti reali. 
            Metodologie testate. Un sistema completo che ti porta dalle basi alla capacità 
            di <span className="text-signal font-semibold">progettare e sviluppare applicazioni professionali con l'AI</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
