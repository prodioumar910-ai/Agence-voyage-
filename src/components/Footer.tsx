import React, { useState } from "react";
import { Compass, Mail, ArrowRight, Instagram, Linkedin, Facebook, MapPin, Phone } from "lucide-react";
import { AGENCY_NAME, AGENCY_SLOGAN } from "../data";

interface FooterProps {
  onOpenBooking: () => void;
  onSubscribeSuccess: (message: string) => void;
}

export default function Footer({ onOpenBooking, onSubscribeSuccess }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate high-end subscription registry
    setTimeout(() => {
      setIsSubmitting(false);
      onSubscribeSuccess(
        `Votre courriel (${email}) a été enregistré avec succès. Vous recevrez nos lettres d'inspiration confidentielles et invitations privées.`
      );
      setEmail("");
    }, 1200);
  };

  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Facebook className="w-4 h-4" />, href: "https://facebook.com", label: "Facebook" },
  ];

  const travelOffices = [
    { city: "Bamako (Siège)", address: "ACI 2000, Avenue du Mali, Immeuble Horizon" },
    { city: "Dakar", address: "Les Almadies, Immeuble Phare, Route du Méridien" },
    { city: "Paris", address: "24 Avenue Montaigne, 75008" },
    { city: "Genève", address: "12 Rue de la Corraterie, 1204" },
  ];

  return (
    <footer id="contact" className="bg-offwhite text-slate-deep border-t border-slate-deep/5 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top: Letter & Final Invitation Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 border-b border-slate-deep/10">
          
          {/* Final Call To Action Label */}
          <div className="lg:col-span-7 space-y-4">
            <span className="font-display text-xs tracking-[0.25em] text-brand-blue font-semibold uppercase">
              La promesse d'un horizon infini
            </span>
            <h3 className="font-display text-3xl md:text-5xl font-light uppercase tracking-wider text-slate-deep leading-tight">
              Prêt à composer <br />votre chef-d'œuvre ?
            </h3>
            <p className="font-sans font-light text-slate-deep/70 text-sm md:text-base max-w-xl">
              N'attendez plus pour matérialiser vos désirs d'ailleurs insolites. Laissez nos concepteurs d'exception orchestrer votre prochaine évasion.
            </p>
            <div className="pt-4">
              <button
                id="footer-cta-final"
                onClick={onOpenBooking}
                className="px-10 py-4 bg-slate-deep hover:bg-brand-blue text-white font-display text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 group cursor-pointer rounded-lg"
              >
                <span>Commencer l'aventure</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-white/80" />
              </button>
            </div>
          </div>

          {/* Minimalist Newsletter Form - Frosted panel */}
          <div className="lg:col-span-5 bg-white/60 backdrop-blur-md border border-brand-blue/10 p-8 md:p-10 shadow-sm rounded-2xl relative">
            <span className="font-display text-[10px] tracking-widest text-brand-blue font-bold uppercase block mb-2">
              Lettre d'inspiration confidentielle
            </span>
            <h4 className="font-display text-lg font-light uppercase tracking-wide text-slate-deep mb-4">
              S'abonner aux carnets
            </h4>
            <p className="font-sans font-light text-xs text-slate-deep/75 mb-6 leading-relaxed">
              Inscrivez-vous pour recevoir périodiquement nos invitations privilégiées, récits secrets de voyages et exclusivités hôtelières.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4" id="newsletter-form">
              <div className="relative">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="votre.email@luxe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/50 backdrop-blur-xs border border-slate-deep/10 px-4 py-3.5 pr-12 text-xs focus:outline-none focus:border-brand-blue transition-colors font-sans rounded-lg placeholder-slate-deep/30"
                />
                <button
                  id="submit-newsletter"
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-blue hover:text-slate-deep transition-colors cursor-pointer"
                  style={{ minWidth: "44px", minHeight: "44px" }}
                  aria-label="S'abonner"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-brand-blue/30 border-t-brand-blue rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-[9px] text-slate-deep/40 font-light">
                Nous respectons scrupuleusement la confidentialité de nos correspondants. Désabonnement instantané en un clic.
              </p>
            </form>
          </div>

        </div>

        {/* Middle: Brand Info, Offices, Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-16 pb-12">
          
          {/* Brand Presentation column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#hero" className="flex items-center gap-2 group">
              <Compass className="w-6 h-6 text-brand-blue transition-transform duration-700 group-hover:rotate-45" />
              <span className="font-display font-light text-base md:text-lg tracking-[0.3em] text-slate-deep uppercase">
                {AGENCY_NAME}
              </span>
            </a>
            <p className="font-sans font-light text-xs text-slate-deep/70 leading-relaxed max-w-sm">
              Agence de voyage privée agréée IATA. Conception de séjours sur-mesure d'exception, affrètement de jets privés, location de yachts et conciergerie VIP permanente.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-slate-deep/10 hover:border-brand-blue hover:bg-brand-blue/10 text-slate-deep hover:text-brand-blue flex items-center justify-center transition-all rounded-full"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Confidentials Offices column */}
          <div className="lg:col-span-5 space-y-4">
            <h5 className="font-display text-[11px] tracking-widest text-slate-deep uppercase font-bold">
              Nos Bureaux Privés
            </h5>
            <div className="grid grid-cols-2 gap-6" id="footer-offices">
              {travelOffices.map((office) => (
                <div key={office.city} className="space-y-1">
                  <span className="font-display text-xs font-bold text-brand-blue uppercase tracking-wide block">
                    {office.city}
                  </span>
                  <span className="font-sans font-light text-[11px] text-slate-deep/70 block leading-tight">
                    {office.address}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links & Contact direct column */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-display text-[11px] tracking-widest text-slate-deep uppercase font-bold">
              Lignes directes
            </h5>
            <div className="space-y-3 font-sans text-xs text-slate-deep/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="tel:+22320224040" className="hover:text-brand-blue transition-colors font-medium">
                  +223 20 22 40 40 / +223 76 01 02 03
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a href="mailto:bamako@aura-evasions.com" className="hover:text-brand-blue transition-colors font-medium">
                  bamako@aura-evasions.com
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-deep/60">
                Ligne Élite réservée aux membres actifs accessible 24/7/365.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: Copyrights & Mention Légales */}
        <div className="pt-8 mt-4 border-t border-slate-deep/5 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-deep/50 gap-4">
          <div>
            © {new Date().getFullYear()} {AGENCY_NAME}. Tous droits réservés. L'art du voyage sur-mesure d'exception.
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-slate-deep transition-colors">Mentions Légales</a>
            <a href="#hero" className="hover:text-slate-deep transition-colors">Politique de Confidentialité</a>
            <a href="#hero" className="hover:text-slate-deep transition-colors">CGV Élite</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
