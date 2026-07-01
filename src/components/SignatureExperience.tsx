import { motion } from "motion/react";
import { CheckCircle, Compass, ArrowRight } from "lucide-react";
import { SIGNATURE_IMAGE, EXPERIENCE_FEATURES } from "../data";

interface SignatureExperienceProps {
  onOpenBooking: () => void;
}

export default function SignatureExperience({ onOpenBooking }: SignatureExperienceProps) {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Editorial Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 relative group"
            id="experience-image-block"
          >
            {/* Elegant outer border framing */}
            <div className="absolute -inset-3 border border-brand-blue/15 -z-10 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 rounded-2xl" />
            
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-slate-deep relative rounded-2xl">
              <img
                src={SIGNATURE_IMAGE}
                alt="Expérience Signature Luxe"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              {/* Soft dark-blue tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/40 to-transparent opacity-65" />
            </div>

            {/* Float badge overlay indicating expertise - Frosted glass */}
            <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8 bg-white/70 backdrop-blur-md p-6 border border-slate-deep/5 shadow-xl rounded-2xl">
              <span className="font-display text-[9px] tracking-[0.25em] text-brand-blue font-bold uppercase block mb-1">
                La Haute Couture du voyage
              </span>
              <p className="font-sans font-light text-xs text-slate-deep/80 leading-relaxed">
                98% de nos itinéraires sont entièrement redessinés selon les moindres exigences de nos hôtes privilégiés.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Editorial Narrative Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
            id="experience-text-block"
          >
            <div>
              <span className="font-display text-xs tracking-[0.25em] text-brand-blue font-semibold uppercase">
                Philosophie de voyage
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-slate-deep mt-2 font-light uppercase tracking-wider leading-tight">
                L'Expérience <span className="font-serif italic font-normal tracking-wide text-brand-blue">Signature</span>
              </h2>
              <div className="w-16 h-[1px] bg-brand-blue mt-6" />
            </div>

            <p className="font-sans font-light text-slate-deep/80 text-sm md:text-base leading-relaxed">
              Nous croyons que le voyage ne se mesure pas en kilomètres parcourus, mais en moments d'émotions pures, impossibles à répliquer. Notre savoir-faire réside dans l'art de rendre le monde intime, privilégié et d'une fluidité absolue.
            </p>

            {/* Core Features list */}
            <div className="space-y-6" id="experience-features-list">
              {EXPERIENCE_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 shrink-0">
                    <Compass className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold tracking-wider text-slate-deep uppercase">
                      {feature.title}
                    </h4>
                    <p className="font-sans font-light text-xs md:text-sm text-slate-deep/70 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start gap-4">
              <button
                id="experience-cta-secondary"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 border border-brand-blue hover:bg-brand-blue hover:text-white text-brand-blue font-display text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer rounded-lg"
              >
                <span>Voir nos services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
