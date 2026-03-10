import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 30, suffix: "+", label: "App educative interattive" },
  { value: 20, suffix: "+", label: "Ore di formazione" },
  { value: 10, suffix: "x", label: "Più richiesti sul mercato" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-5xl sm:text-6xl md:text-7xl text-signal number-glow">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center"
          >
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            <p className="font-body text-sm text-muted-foreground uppercase tracking-widest mt-3">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="section-divider mt-24" />
    </section>
  );
};

export default StatsSection;
