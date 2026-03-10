import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Super Programmatore" className="h-12 w-auto" />
        </div>
        <a
          href="#offerta"
          className="hidden sm:inline-flex items-center gap-2 border border-primary/30 text-primary font-body text-xs font-semibold uppercase tracking-widest px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          Offerta lancio
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
