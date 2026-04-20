import { AlertTriangle, Flame, TrendingUp } from "lucide-react";

const UrgencyBanner = () => {
  const scrollToOffer = () => {
    document.getElementById("offerta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative px-4 sm:px-6 py-12 sm:py-16 mt-12 sm:mt-20 overflow-hidden">
      {/* Animated red glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-signal/20 via-signal/30 to-signal/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--signal)/0.25),transparent_70%)]" />

      {/* Top + Bottom red bars */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-signal animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-signal animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative border-2 border-signal bg-background/80 backdrop-blur-sm p-5 sm:p-8">
          {/* Corner accents */}
          <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-4 border-l-4 border-signal" />
          <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-4 border-r-4 border-signal" />
          <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-4 border-l-4 border-signal" />
          <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-4 border-r-4 border-signal" />

          <div className="flex flex-col items-center text-center gap-4 sm:gap-5">
            {/* Alert pill */}
            <div className="inline-flex items-center gap-2 bg-signal text-background px-4 py-1.5 sm:px-5 sm:py-2">
              <AlertTriangle className="w-4 h-4 animate-pulse" />
              <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                Attenzione — Offerta in scadenza
              </span>
              <AlertTriangle className="w-4 h-4 animate-pulse" />
            </div>

            {/* Main headline */}
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.05] text-foreground">
              L'offerta lancio a{" "}
              <span className="text-signal number-glow">97€</span>
              <br className="sm:hidden" />
              <span className="block sm:inline"> sta per terminare</span>
            </h2>

            {/* Price comparison */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
              <div className="flex flex-col items-center">
                <span className="font-body text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Oggi
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-display text-3xl sm:text-5xl text-signal number-glow leading-none">97</span>
                  <span className="font-display text-lg sm:text-2xl text-signal">€</span>
                </div>
              </div>

              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-signal" />

              <div className="flex flex-col items-center">
                <span className="font-body text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  A breve
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-display text-3xl sm:text-5xl text-foreground leading-none">997</span>
                  <span className="font-display text-lg sm:text-2xl text-foreground">€</span>
                </div>
              </div>
            </div>

            <p className="font-body text-sm sm:text-base text-foreground/90 max-w-2xl leading-relaxed px-2">
              Tra <span className="text-signal font-bold">pochissimo</span> il prezzo tornerà al valore reale di{" "}
              <span className="text-foreground font-bold">997€</span>. Non perdere{" "}
              <span className="text-signal font-bold">l'unica occasione</span> per accedere all'intero percorso a una frazione del costo.
            </p>

            {/* CTA */}
            <button
              onClick={scrollToOffer}
              className="group relative inline-flex items-center justify-center gap-2 bg-signal text-background font-body font-bold text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-4 uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_hsl(var(--signal)/0.6)] w-full sm:w-auto max-w-md"
            >
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10">Blocca il prezzo a 97€ ora</span>
              <div className="absolute inset-0 bg-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>

            <p className="font-body text-[11px] sm:text-xs text-signal/90 uppercase tracking-[0.2em] font-semibold">
              ⚠ Risparmi 900€ — Solo per il lancio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBanner;
