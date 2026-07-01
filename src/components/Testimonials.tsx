import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  // Autoplay testimonial transitions every 8 seconds for luxury living feel
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-offwhite relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.25em] text-brand-blue font-semibold uppercase">
            Paroles d'Exception
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-slate-deep mt-2 font-light uppercase tracking-wider">
            Témoignages
          </h2>
          <div className="w-16 h-[1px] bg-brand-blue mx-auto mt-6" />
        </div>

        {/* Testimonial Slider Wrapper - Frosted panel styling */}
        <div className="bg-brand-blue/5 border border-brand-blue/10 rounded-3xl p-8 md:p-16 shadow-xs relative min-h-[320px] md:min-h-[260px] flex flex-col justify-center items-center" id="testimonial-slider">
          <Quote className="w-10 h-10 text-brand-blue/15 absolute top-8 left-8" />
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center px-4 md:px-6 space-y-6"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-blue text-brand-blue" />
                ))}
              </div>

              {/* Quote - Serif font as per guidelines */}
              <p className="font-serif italic font-light text-base md:text-xl lg:text-2xl text-slate-deep/90 leading-relaxed">
                "{currentTestimonial.quote}"
              </p>

              {/* Author & Info */}
              <div className="pt-4">
                <h4 className="font-display text-sm tracking-widest text-brand-blue uppercase font-bold">
                  {currentTestimonial.author}
                </h4>
                <div className="flex items-center justify-center gap-2 mt-1.5 text-[11px] font-sans text-slate-deep/50 tracking-wide uppercase">
                  <span>{currentTestimonial.role}</span>
                  <span className="text-brand-blue/30">•</span>
                  <span className="text-slate-deep/70 italic">{currentTestimonial.destination}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Controls */}
        <div className="flex items-center justify-between mt-12 max-w-[200px] mx-auto">
          {/* Prev Arrow */}
          <button
            id="testimonial-prev-arrow"
            onClick={prevSlide}
            className="p-3 border border-slate-deep/10 hover:border-brand-blue/50 text-slate-deep/70 hover:text-brand-blue transition-all rounded-full group cursor-pointer bg-white shadow-xs"
            style={{ minWidth: "44px", minHeight: "44px" }}
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((test, index) => (
              <button
                key={test.id}
                id={`testimonial-dot-${index}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "w-6 bg-brand-blue"
                    : "bg-slate-deep/20 hover:bg-slate-deep/40"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            id="testimonial-next-arrow"
            onClick={nextSlide}
            className="p-3 border border-slate-deep/10 hover:border-brand-blue/50 text-slate-deep/70 hover:text-brand-blue transition-all rounded-full group cursor-pointer bg-white shadow-xs"
            style={{ minWidth: "44px", minHeight: "44px" }}
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
