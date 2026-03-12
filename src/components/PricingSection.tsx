import { Clock, AlertTriangle } from "lucide-react";
import Particles from "./Particles";

const PricingSection = () => {
  return (
    <section id="offerta" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      <Particles count={15} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Offerta limitata nel tempo
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-6">
            OFFERTA DI LANCIO
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-6 max-w-xl mx-auto">
            Il valore completo del programma è 997€. Per il lancio, accedi all'intero
            percorso a una frazione del prezzo.
          </p>
        </div>

        {/* Urgency banner */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-signal/10 border border-signal/30 px-4 sm:px-6 py-3 mb-16 text-center">
          <AlertTriangle className="w-4 h-4 text-signal flex-shrink-0 hidden sm:block" />
          <span className="font-body text-xs sm:text-sm text-signal font-semibold">
            Il prezzo tornerà a 997€ a brevissimo — questa offerta non durerà
          </span>
          <AlertTriangle className="w-4 h-4 text-signal flex-shrink-0 hidden sm:block" />
        </div>

        <div className="relative max-w-lg mx-auto">
          <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 via-primary/10 to-primary/30" />

          <div className="relative bg-card p-10 sm:p-14">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />

            <div className="mb-10">
              <span className="font-body text-muted-foreground line-through text-2xl">997€</span>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="font-display text-7xl sm:text-8xl text-signal number-glow leading-none">97</span>
                <span className="font-display text-3xl text-signal">€</span>
              </div>
              <p className="font-body text-muted-foreground text-xs mt-4 uppercase tracking-[0.2em]">
                Accesso completo al percorso
              </p>

              <div className="inline-flex items-center gap-2 bg-signal/10 border border-signal/30 px-5 py-2.5 mt-5">
                <span className="font-body text-sm text-signal font-bold uppercase tracking-wider">
                  Risparmi 900€
                </span>
              </div>

              <p className="font-body text-muted-foreground text-xs mt-4">
                Meno di <span className="text-foreground font-medium">0,27€ al giorno</span> — accesso illimitato, per sempre
              </p>
            </div>

            <div className="space-y-4 text-left font-body text-sm text-muted-foreground mb-10 max-w-xs mx-auto">
              {[
                "Oltre 200 video lezioni",
                "20 ore di formazione video approfondita",
                "32 applicazioni educative interattive",
                "20 infografiche ad alta qualità",
                "Slide in formato PDF",
                "Progetti pratici nel mondo reale",
                "Metodologie AI per lo sviluppo software",
                "Analisi guidata di applicazioni reali",
                "Accesso a tutti gli aggiornamenti futuri",
                "Attestato di AI Application Builder",
                "Canale Discord dedicato alla community",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-signal font-bold text-lg leading-none mt-[-2px]">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="group relative inline-flex w-full items-center justify-center bg-primary text-primary-foreground font-body font-bold text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_hsl(51_100%_50%/0.3)]"
            >
              <span className="relative z-10">Accedi ora — 97€</span>
              <div className="absolute inset-0 bg-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>

            <p className="font-body text-[11px] text-muted-foreground mt-4">
              Pagamento sicuro. Accesso immediato.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-signal/80">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-body text-[11px] uppercase tracking-wider font-medium">
                Prezzo di lancio — disponibile ancora per poco
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-lg mx-auto">
          <p className="font-body text-sm text-muted-foreground text-center leading-relaxed">
            Pensa a quanto spenderesti per un bootcamp (da 3.000€ a 10.000€), 
            per un corso universitario, o anche solo per un singolo corso online avanzato. 
            Qui hai <span className="text-foreground font-medium">un intero sistema formativo a 97€</span>.
            <br />
            <span className="text-signal font-medium">Non succederà di nuovo.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
