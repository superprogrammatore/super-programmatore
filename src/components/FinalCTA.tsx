import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const FinalCTA = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 scale-x-[-1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>
      
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tight leading-[1.1] mb-8">
            IL MERCATO NON ASPETTA.
            <br />
            <span className="text-signal">TU?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed mb-12">
            Le aziende stanno già cercando chi sa costruire software con l'AI. 
            Questa competenza non sarà opzionale ancora a lungo.
          </p>
          <a
            href="#offerta"
            className="group relative inline-flex items-center justify-center bg-primary text-primary-foreground font-body font-bold text-base sm:text-lg px-8 sm:px-14 py-4 sm:py-5 uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_hsl(51_100%_50%/0.3)] w-full sm:w-auto max-w-md"
          >
            <span className="relative z-10">Inizia il percorso — 97€</span>
            <div className="absolute inset-0 bg-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
