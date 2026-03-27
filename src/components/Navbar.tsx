import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

const navLinks = ["New Arrivals", "Essentials", "Shop", "About"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground"
          >
            <Menu size={20} />
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] tracking-luxury font-body text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2 text-lg tracking-[0.35em] font-body font-medium text-foreground uppercase"
          >
            FORM
          </a>

          <div className="flex items-center gap-6">
            <Search size={18} className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer" />
            <ShoppingBag size={18} className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer" />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <button onClick={() => setMenuOpen(false)}>
                <X size={20} className="text-foreground" />
              </button>
              <span className="text-lg tracking-[0.35em] font-body font-medium text-foreground uppercase">
                FORM
              </span>
              <ShoppingBag size={18} className="text-foreground" />
            </div>
            <div className="flex flex-col items-center justify-center h-[70vh] gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-3xl text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
