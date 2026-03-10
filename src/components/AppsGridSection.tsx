import { motion } from "framer-motion";
import gridPattern from "@/assets/grid-pattern.jpg";

const appLabels = [
  "HTTP Explorer", "DOM Visualizer", "State Machine", "API Tester",
  "CSS Grid Lab", "Auth Flow", "Database Schema", "React Lifecycle",
  "REST Builder", "Component Tree", "Event Loop", "Git Simulator",
  "Deploy Pipeline", "Query Builder", "Routing Lab", "Form Validator",
  "WebSocket Chat", "Cache Strategy", "JWT Decoder", "Responsive Tester",
  "Flexbox Arena", "Type Checker", "Error Handler", "Data Flow",
  "Fetch Inspector", "Promise Chain", "Regex Tester", "JSON Parser",
  "Cookie Manager", "Storage API", "Perf Monitor", "A11y Checker",
];

const AppsGridSection = () => {
  return (
    <section className="py-32 px-6 overflow-hidden relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={gridPattern} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Elemento distintivo
            </span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.1] mb-6">
            <span className="text-signal">30+</span> APPLICAZIONI
            <br />
            EDUCATIVE INTERATTIVE
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Non slides. Non PDF. Applicazioni web reali progettate per farti 
            comprendere ogni concetto in modo pratico e visuale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2"
        >
          {appLabels.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative bg-card/80 backdrop-blur-sm border border-border p-3 aspect-square flex flex-col justify-between hover:border-primary/40 hover:bg-primary/[0.05] transition-all duration-300 cursor-default"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Simulated mini UI */}
              <div className="space-y-1">
                <div className="h-[2px] bg-foreground/10 w-3/4 group-hover:bg-primary/30 transition-colors" />
                <div className="h-[2px] bg-foreground/10 w-1/2 group-hover:bg-primary/20 transition-colors" />
                <div className="h-[2px] bg-foreground/5 w-2/3" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                <span className="font-body text-[9px] sm:text-[10px] text-muted-foreground group-hover:text-foreground transition-colors leading-tight truncate">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppsGridSection;
