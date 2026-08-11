import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "AGENCE", n: "01" },
  { to: "/services", label: "SERVICES", n: "02" },
  { to: "/work", label: "PROJETS", n: "03" },
  { to: "/about", label: "À PROPOS", n: "04" },
  { to: "/contact", label: "CONTACT", n: "05" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [window.location.pathname]);

  return (
    <>
      <header className="fixed top-0 right-0 z-50 p-6 md:p-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex flex-col items-center gap-1 transition-transform active:scale-95"
          aria-label="Toggle Menu"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground transition-colors group-hover:bg-brand/90">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-foreground">
            {isOpen ? "CLOSE" : "MENU"}
          </span>
        </button>
      </header>

      {/* Main Logo (Top Left) - Always visible but follows design style */}
      <div className="fixed top-0 left-0 z-50 p-6 md:p-10 pointer-events-none">
        <Link to="/" className="pointer-events-auto flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand font-black text-brand">
            M
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-black tracking-tighter">MARIO</span>
            <span className="text-xs font-black tracking-tighter">STUDIO</span>
          </div>
        </Link>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col bg-background p-10 md:p-20"
          >
            <div className="mt-20 flex flex-col gap-8">
              {links.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className="group flex items-center justify-between border-b border-border py-4 transition-colors hover:text-brand"
                  >
                    <span className="text-4xl font-black md:text-6xl lg:text-7xl">
                      {link.label}
                    </span>
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-brand">
                      {link.n}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-6 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  PARLONS DE VOTRE PROJET
                </p>
                <a
                  href="mailto:contact@mariostudio.com"
                  className="mt-2 block text-lg font-bold hover:text-brand md:text-xl"
                >
                  contact@mariostudio.com
                </a>
              </div>
              <Link
                to="/contact"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-border transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
              >
                <ArrowUpRight className="h-8 w-8" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
