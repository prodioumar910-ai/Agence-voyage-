import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Compass } from "lucide-react";
import { AGENCY_NAME } from "../data";

interface HeaderProps {
  onOpenBooking: (destinationId?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event handler for premium glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Accueil" },
    { href: "#destinations", label: "Destinations" },
    { href: "#experience", label: "Signature" },
    { href: "#testimonials", label: "Témoignages" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/60 backdrop-blur-md shadow-xs border-b border-slate-deep/5 py-4"
            : "bg-transparent py-6"
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            id="header-logo-link"
          >
            <Compass className="w-6 h-6 text-gold-dark transition-transform duration-700 group-hover:rotate-45" />
            <span className="font-display font-light text-base md:text-lg tracking-[0.3em] text-slate-deep">
              {AGENCY_NAME}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-[11px] tracking-[0.18em] text-slate-deep/75 hover:text-gold-dark font-medium uppercase transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-dark transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:block">
            <button
              id="header-cta"
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 border border-gold-pale hover:bg-slate-deep hover:border-slate-deep hover:text-white text-slate-deep font-display text-[10px] tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
            >
              Réserver
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-deep cursor-pointer"
              aria-label="Menu principal"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 md:hidden"
            />

            {/* Sidebar element */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.05, duration: 0.45 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white/85 backdrop-blur-md shadow-2xl z-30 md:hidden p-8 pt-24 border-l border-slate-deep/5"
              id="mobile-sidebar"
            >
              <div className="flex flex-col h-full justify-between">
                {/* Links */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-sm tracking-[0.2em] text-slate-deep hover:text-gold-dark font-medium uppercase py-2 transition-colors border-b border-slate-deep/5 block"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Bottom CTA for mobile panel */}
                <div className="space-y-6">
                  <button
                    id="mobile-sidebar-cta"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full text-center py-4 bg-slate-deep hover:bg-gold-dark text-white font-display text-xs tracking-[0.2em] uppercase transition-all duration-300"
                    style={{ minHeight: "44px" }}
                  >
                    Réserver votre évasion
                  </button>

                  <div className="text-center">
                    <p className="font-display text-[9px] tracking-widest text-slate-deep/40 uppercase">
                      Excellence & Intimité
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
