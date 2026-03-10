import { motion } from "framer-motion";
import gridPattern from "@/assets/grid-pattern.jpg";

interface AppItem {
  name: string;
  description: string;
  topics: string[];
}

const roadmapArchitetturale: AppItem[] = [
  { name: "ArchBase", description: "Introduzione all'architettura software", topics: ["architettura", "design vs architettura", "trade-off", "sistemi complessi"] },
  { name: "Full Stack Map", description: "La mappa completa di un sistema software", topics: ["frontend", "backend", "database", "API"] },
  { name: "FullStack Visualizer", description: "Visualizzare sistemi complessi", topics: ["diagrammi", "dipendenze", "flussi di dati", "comunicazione"] },
  { name: "Assist Playbook", description: "Come lavorare con l'AI nello sviluppo", topics: ["AI assisted dev", "prompt engineering", "verifica output", "workflow AI"] },
  { name: "AI Playbook", description: "Uso avanzato dell'AI nello sviluppo", topics: ["prompt avanzati", "multi-step", "iterazione AI", "refinement"] },
  { name: "Spec-Driven", description: "Sviluppo guidato dalle specifiche", topics: ["specifiche", "design API", "requisiti", "documentazione"] },
  { name: "CodeFlow", description: "Comprendere algoritmi e strutture dati", topics: ["algoritmi", "strutture dati", "complessità", "intuizione"] },
  { name: "DevChat", description: "Chat AI per ragionare sul codice", topics: ["debug conversazionale", "reasoning AI", "esplorazione", "supporto"] },
  { name: "Architetto AI", description: "Mentore AI per architettura software", topics: ["analisi", "pattern", "trade-off", "progettazione"] },
  { name: "Fullstack Lab", description: "Sandbox completa di sviluppo", topics: ["frontend", "backend", "database", "API"] },
];

const roadmapOperativa: AppItem[] = [
  { name: "Landing Builder", description: "Costruzione di una landing page", topics: ["interfacce", "form", "input utente", "flusso base"] },
  { name: "Content Manager", description: "Gestione dati e CRUD", topics: ["backend", "database", "CRUD", "validazione"] },
  { name: "File Manager", description: "Gestione upload file", topics: ["upload", "storage", "gestione file", "dashboard"] },
  { name: "State Sync Engine", description: "Gestione stato applicativo", topics: ["stato frontend", "stato backend", "sync", "rollback"] },
  { name: "ErrorFlow", description: "Gestione errori", topics: ["tipi di errore", "error UX", "failure", "debug"] },
  { name: "IdentityGate", description: "Sistema di autenticazione", topics: ["login", "password", "sessioni", "token"] },
  { name: "ProgressVault", description: "Persistenza dati per utente", topics: ["dati utente", "salvataggio", "recupero", "associazione"] },
  { name: "API Bridge", description: "Integrazione con API esterne", topics: ["API", "API key", "env variables", "normalizzazione"] },
  { name: "AI Text Companion", description: "Integrazione AI", topics: ["LLM", "conversazioni", "architettura AI", "memoria"] },
  { name: "Access Control", description: "Sistema ruoli e autorizzazioni", topics: ["autorizzazione", "ruoli", "protezione", "visibilità"] },
  { name: "PrivacyGuard", description: "Gestione privacy", topics: ["minimizzazione", "consenso", "retention", "cancellazione"] },
  { name: "SecureShield", description: "Sicurezza applicativa", topics: ["rate limiting", "CSRF", "sanitizzazione", "headers"] },
  { name: "Payment Unlocker", description: "Sistema pagamenti", topics: ["pagamenti", "piani premium", "webhook", "verifica"] },
  { name: "Notification Center", description: "Sistema notifiche", topics: ["eventi", "notifiche", "background", "gestione"] },
  { name: "Real-Time Hub", description: "Comunicazione real time", topics: ["WebSocket", "live update", "push", "connessioni"] },
  { name: "SpeedSense", description: "Performance percepita", topics: ["lazy loading", "debounce", "caching", "skeleton UI"] },
  { name: "TestLab", description: "Testing applicativo", topics: ["unit test", "isolamento", "mocking", "strategie"] },
  { name: "App Monitor", description: "Logging applicativo", topics: ["log strutturati", "livelli log", "errori produzione"] },
  { name: "ObserveIt", description: "Osservabilità", topics: ["metriche", "tracing", "debugging produzione"] },
  { name: "Environment Manager", description: "Gestione ambienti", topics: ["env variables", "configurazioni", "dev/test/prod"] },
  { name: "DevFlow", description: "Workflow sviluppo", topics: ["linting", "formatting", "automazioni", "hot reload"] },
  { name: "ScaleMind", description: "Mentalità scalabilità", topics: ["progettare per crescere", "limiti stato", "architetture scalabili"] },
];

const saasSteps = [
  "UI", "Backend", "Database", "Auth", "API", "AI",
  "Pagamenti", "Realtime", "Monitoring", "Scalabilità"
];

const AppCard = ({ app, index }: { app: AppItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    className="group relative bg-card border border-border p-5 hover:border-primary/40 transition-all duration-300 overflow-hidden"
    whileHover={{ y: -3 }}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    {/* Top accent on hover */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
        <span className="font-display text-sm uppercase tracking-tight text-foreground group-hover:text-signal transition-colors">
          {app.name}
        </span>
      </div>
      <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3">
        {app.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {app.topics.slice(0, 3).map((t) => (
          <span key={t} className="font-body text-[9px] uppercase tracking-wider text-muted-foreground/60 bg-secondary px-2 py-0.5">
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Corner accents */}
    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

const AppsGridSection = () => {
  return (
    <section className="py-32 px-6 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={gridPattern} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Elemento distintivo
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-6">
            <span className="text-signal">32</span> WEB APP
            <br />
            EDUCATIVE INTERATTIVE
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Non slides. Non PDF. Applicazioni web reali progettate per farti 
            comprendere ogni concetto in modo pratico e visuale.
          </p>
        </motion.div>

        {/* ROADMAP ARCHITETTURALE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl text-signal">01</span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight">
                  Roadmap Architetturale
                </h3>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  10 app — Forma la mentalità dello sviluppatore
                </p>
              </div>
            </div>
          </div>

          <div className="border-l border-primary/20 pl-6 sm:pl-8 mb-4">
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xl mb-8">
              Prima di scrivere codice, impari come <span className="text-foreground font-medium">pensare i sistemi</span>. 
              Architettura, AI workflow, specifiche, algoritmi — le fondamenta su cui costruire tutto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {roadmapArchitetturale.map((app, i) => (
                <AppCard key={app.name} app={app} index={i} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ROADMAP OPERATIVA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl text-signal">02</span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight">
                  Roadmap Operativa
                </h3>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  22 app — Qui costruisci davvero le applicazioni
                </p>
              </div>
            </div>
          </div>

          <div className="border-l border-primary/20 pl-6 sm:pl-8 mb-4">
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xl mb-8">
              Ogni app introduce un concetto fondamentale dello sviluppo software moderno. 
              Alla fine avrai costruito <span className="text-foreground font-medium">tutti i pezzi di un SaaS reale</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {roadmapOperativa.map((app, i) => (
                <AppCard key={app.name} app={app} index={i} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* SaaS Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-primary/20 bg-primary/[0.03] p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
          
          <div className="text-center mb-8">
            <h3 className="font-display text-lg sm:text-xl uppercase tracking-tight mb-2">
              L'evoluzione completa di un <span className="text-signal">SaaS reale</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Chi completa le 32 app ha costruito tutti i pezzi fondamentali
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-0">
            {saasSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="bg-secondary border border-border px-4 py-2 hover:border-primary/40 hover:bg-primary/[0.05] transition-all"
                >
                  <span className="font-body text-xs sm:text-sm text-foreground font-medium">{step}</span>
                </motion.div>
                {i < saasSteps.length - 1 && (
                  <span className="text-primary/40 mx-1 hidden sm:inline font-body text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppsGridSection;
