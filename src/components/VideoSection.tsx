import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoCover from "@/assets/video-cover.jpg";

const VideoSection = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Scopri il percorso
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] text-center mb-6">
            GUARDA IL VIDEO
            <br />
            <span className="text-signal">DI PRESENTAZIONE</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg text-center max-w-xl mx-auto mb-14">
            Ti spiego chi sono, come funziona il percorso e perché è diverso da qualsiasi altro corso online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Outer glow frame */}
          <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 via-primary/10 to-primary/30" />

          {/* Video container - 16:9 aspect ratio */}
          <div className="relative bg-card aspect-video flex flex-col items-center justify-end overflow-hidden">
            {/* Placeholder - will be replaced with video embed */}
            <img src={videoCover} alt="Super Programmatore" className="absolute inset-0 w-full h-full object-contain bg-black" />

            {/* Grid overlay */}
            <div className="absolute inset-0 grid-overlay opacity-20" />

            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center gap-4 mt-auto mb-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer group">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-signal transition-colors ml-1" />
              </div>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground bg-background/70 backdrop-blur-sm px-3 py-1">
                Video in arrivo
              </span>
            </div>

            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-primary/40" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary/40" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-primary/40" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-primary/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
