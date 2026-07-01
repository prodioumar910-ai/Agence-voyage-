import { motion } from "motion/react";
import { ArrowRight, Compass } from "lucide-react";
import { HERO_IMAGE, AGENCY_SLOGAN } from "../data";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="bg-offwhite px-4 md:px-12 pt-24 pb-8 flex flex-col justify-center min-h-[95vh]"
    >
      <div className="relative w-full min-h-[75vh] md:min-h-[80vh] bg-slate-deep rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center shadow-lg border border-slate-deep/5 group">
        {/* Background Image with slight scale in effect */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />

        {/* Dark luxury overlay for readability and tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-deep/80 via-slate-deep/50 to-transparent z-1" />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mr-auto ml-0 text-left px-8 md:px-20 text-white py-12">
          {/* Subtle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 mb-6 rounded-full"
          >
            <Compass className="w-3.5 h-3.5 text-white animate-pulse" />
            <span className="font-display text-[9px] tracking-[0.25em] uppercase text-white font-semibold">
              {AGENCY_SLOGAN}
            </span>
          </motion.div>

          {/* Dynamic Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-light text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider leading-[1.15] text-white"
          >
            L'art du voyage <br />
            <span className="font-serif italic font-light tracking-normal text-white/95 block mt-2 normal-case">
              réinventé.
            </span>
          </motion.h1>

          {/* Dynamic Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-xl font-sans font-light text-sm md:text-base text-white/80 mt-6 leading-relaxed"
          >
            Créateurs de voyages hautement confidentiels, de retraites insolites et d'expériences absolues cousues main à travers le monde.
          </motion.p>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row justify-start items-center gap-4"
          >
            <button
              id="hero-cta-primary"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-offwhite text-slate-deep font-display text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer rounded-none"
            >
              <span>Réserver votre évasion</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
            </button>

            <a
              href="#destinations"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white font-display text-[11px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center rounded-none"
            >
              Explorer nos lointains
            </a>
          </motion.div>
        </div>

        {/* Decorative vertical line at bottom */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "50px" }}
          transition={{ duration: 1.2, delay: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-white/40 to-transparent z-10"
        />
      </div>
    </section>
  );
}
