import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import Particles from "./Particles";

const TITLE = "DIVENTA UN SUPER PROGRAMMATORE CON IL SUPER POTERE DELL'AI";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (blinkCount < 4) {
      const timer = setTimeout(() => setBlinkCount((c) => c + 1), 400);
      return () => clearTimeout(timer);
    } else {
      setStartTyping(true);
    }
  }, [blinkCount]);

  useEffect(() => {
    if (!startTyping) return;
    if (displayedText.length < TITLE.length) {
      const timer = setTimeout(() => {
        setDisplayedText(TITLE.slice(0, displayedText.length + 1));
      }, 40);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setTypingDone(true), 300);
    }
  }, [displayedText, startTyping]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      
      {/* Particles */}
      <Particles count={25} />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Decorative side lines */}
      <div className="absolute left-[10%] top-[20%] bottom-[20%] w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />
      <div className="absolute right-[10%] top-[20%] bottom-[20%] w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />

      <div className="relative max-w-5xl text-center z-10">
        {/* Small badge above title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={typingDone ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 border border-primary/20 text-primary font-body text-xs font-medium uppercase tracking-[0.25em] px-4 py-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            Nuovo percorso formativo 2026
          </span>
        </motion.div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight leading-[1.05] min-h-[3em] sm:min-h-[2em]">
          <span className="text-foreground">{displayedText}</span>
          <span className="inline-block w-[3px] h-[0.8em] bg-primary align-middle ml-1 cursor-blink" />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={typingDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8"
        >
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Il futuro dello sviluppo software non appartiene a chi scrive codice.
            <br className="hidden sm:block" />
            Appartiene a chi sa{" "}
            <span className="text-signal font-semibold">
              comandare l'intelligenza artificiale
            </span>{" "}
            per costruirlo.
          </p>

          {/* No coding badge */}
          <div className="mt-6 inline-flex items-center gap-3 border border-primary/20 bg-primary/[0.05] px-5 py-2.5">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="font-body text-sm text-foreground font-medium tracking-wide">
              Non serve saper programmare
            </span>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://studenti.accademiadelcloud.it/p/diventa-un-super-programmatore"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-primary text-primary-foreground font-body font-bold text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_40px_hsl(51_100%_50%/0.3)] w-full sm:w-auto"
            >
              <span className="relative z-10">Inizia ora — 97€</span>
              <div className="absolute inset-0 bg-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            <a
              href="https://lezione.superprogrammatore.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-muted text-foreground font-body font-medium text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 hover:border-primary/30 hover:text-primary transition-all duration-300 w-full sm:w-auto"
            >
              Accedi alla lezione gratuita →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={typingDone ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
