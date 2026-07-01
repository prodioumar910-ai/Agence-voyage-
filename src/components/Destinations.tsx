import { motion } from "motion/react";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { DESTINATIONS } from "../data";

interface DestinationsProps {
  onDiscover: (destinationId: string) => void;
}

export default function Destinations({ onDiscover }: DestinationsProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="destinations" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="font-display text-xs tracking-[0.25em] text-gold-dark font-medium uppercase">
            Collection Éphémère
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-slate-deep mt-2 font-light uppercase tracking-wider">
            Destinations Sélectionnées
          </h2>
          <div className="w-16 h-[1px] bg-gold-pale mx-auto mt-6 mb-4" />
          <p className="font-sans font-light text-slate-deep/70 text-sm md:text-base leading-relaxed">
            Trois havres de paix confidentiels rigoureusement sélectionnés pour leur caractère d'exception, leur intimité absolue et leur prestige intemporel.
          </p>
        </div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          id="destinations-grid"
        >
          {DESTINATIONS.map((dest) => (
            <motion.div
              key={dest.id}
              variants={cardVariants}
              className="bg-white/70 backdrop-blur-xs group border border-slate-deep/5 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-500"
              id={`destination-card-${dest.id}`}
            >
              {/* Image & Tag Wrap */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-deep">
                {/* Image with subtile zoom */}
                <img
                  src={dest.image}
                  alt={dest.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9]"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70" />

                {/* Region Tag */}
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 font-display text-[9px] tracking-[0.2em] uppercase text-slate-deep font-semibold rounded-full border border-white/20">
                  {dest.region}
                </span>

                {/* Price Indicator */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                  <div>
                    <span className="text-[10px] font-display uppercase tracking-widest text-white/70 block">
                      Dès
                    </span>
                    <span className="text-lg font-display font-medium tracking-wide text-white">
                      {dest.priceFrom}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/90 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-white/80" />
                    <span className="font-medium">{dest.duration}</span>
                  </div>
                </div>
              </div>

              {/* Destination Details */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl text-slate-deep uppercase tracking-wider font-semibold">
                    {dest.title}
                  </h3>
                  <span className="text-xs text-brand-blue font-sans tracking-wide font-medium italic block mt-1">
                    {dest.subtitle}
                  </span>
                  <p className="text-sm font-sans font-light text-slate-deep/75 mt-4 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {dest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-sans text-slate-deep/70 bg-slate-deep/[0.03] px-3 py-1 rounded-full border border-slate-deep/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Discover Button */}
                <div className="mt-8 pt-6 border-t border-slate-deep/5">
                  <button
                    id={`discover-btn-${dest.id}`}
                    onClick={() => onDiscover(dest.id)}
                    className="w-full py-3.5 bg-slate-deep hover:bg-brand-blue text-white text-center font-display text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 group cursor-pointer rounded-lg shadow-xs hover:shadow-md"
                  >
                    <span>Découvrir</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white/80" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
