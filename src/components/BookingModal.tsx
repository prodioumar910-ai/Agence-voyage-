import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Users, MapPin, Compass, Check } from "lucide-react";
import { DESTINATIONS } from "../data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDestinationId?: string;
  onSuccess: (message: string) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedDestinationId = "",
  onSuccess,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: selectedDestinationId,
    guests: "2",
    date: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync selected destination when modal is opened with preselected destination
  React.useEffect(() => {
    if (selectedDestinationId) {
      setFormData((prev) => ({ ...prev, destination: selectedDestinationId }));
    }
  }, [selectedDestinationId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API response
    setTimeout(() => {
      setIsSubmitting(false);
      const destName = DESTINATIONS.find((d) => d.id === formData.destination)?.title || "votre projet";
      onSuccess(
        `Merci ${formData.name}. Votre conseiller privé étudie votre projet pour ${destName}. Un premier appel de courtoisie vous sera proposé sous 24h.`
      );
      // Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        guests: "2",
        date: "",
        notes: "",
      });
      onClose();
    }, 1500);
  };

  const selectedDestObj = DESTINATIONS.find((d) => d.id === formData.destination);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="bg-white/85 backdrop-blur-md max-w-2xl w-full rounded-2xl border border-slate-deep/5 shadow-2xl overflow-hidden relative"
              id="booking-modal-card"
            >
              {/* Top Luxury Accent Line */}
              <div className="h-1 bg-gradient-to-r from-brand-blue via-slate-deep to-brand-blue w-full" />

              {/* Close Button */}
              <button
                id="close-booking-modal"
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-slate-deep/50 hover:text-slate-deep transition-colors bg-white/45 hover:bg-white rounded-full"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8 text-center">
                  <span className="font-display text-xs tracking-[0.25em] text-brand-blue font-semibold uppercase">
                    Demande de séjour sur-mesure
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-slate-deep mt-2 font-light uppercase tracking-wider">
                    Initier l'Exceptionnel
                  </h3>
                  <div className="w-12 h-[1px] bg-brand-blue mx-auto mt-4" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" id="booking-form">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-display text-[11px] tracking-widest text-slate-deep/70 uppercase mb-2">
                        Nom complet *
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        placeholder="M. ou Mme. Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-xs border border-slate-deep/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue font-sans transition-colors rounded-lg placeholder-slate-deep/30"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-[11px] tracking-widest text-slate-deep/70 uppercase mb-2">
                        Adresse Email *
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        placeholder="jean.dupont@signature.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-xs border border-slate-deep/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue font-sans transition-colors rounded-lg placeholder-slate-deep/30"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Destination Select */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-display text-[11px] tracking-widest text-slate-deep/70 uppercase mb-2">
                        Ligne de contact directe *
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        placeholder="+33 6 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-xs border border-slate-deep/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue font-sans transition-colors rounded-lg placeholder-slate-deep/30"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-[11px] tracking-widest text-slate-deep/70 uppercase mb-2">
                        Destination de rêve
                      </label>
                      <select
                        id="booking-destination"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-xs border border-slate-deep/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue font-sans transition-colors rounded-lg text-slate-deep appearance-none"
                        style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%233B5970\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")', backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat', paddingRight: '40px' }}
                      >
                        <option value="">-- Autre itinéraire confidentiel --</option>
                        {DESTINATIONS.map((dest) => (
                          <option key={dest.id} value={dest.id}>
                            {dest.title} ({dest.region})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Guests & Start Date */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-display text-[11px] tracking-widest text-slate-deep/70 uppercase mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-brand-blue" /> Nombre de voyageurs
                      </label>
                      <select
                        id="booking-guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-xs border border-slate-deep/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue font-sans transition-colors rounded-lg text-slate-deep"
                      >
                        <option value="1">1 Voyageur (Solo)</option>
                        <option value="2">2 Voyageurs (Couple)</option>
                        <option value="3-5">En famille (3 à 5 personnes)</option>
                        <option value="6+">Groupe privé / Délégation (6+)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-display text-[11px] tracking-widest text-slate-deep/70 uppercase mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-blue" /> Période souhaitée
                      </label>
                      <input
                        id="booking-date"
                        type="text"
                        placeholder="Ex: Printemps 2027 / Juillet"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-xs border border-slate-deep/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue font-sans transition-colors rounded-lg placeholder-slate-deep/30"
                      />
                    </div>
                  </div>

                  {/* Notes / Desires */}
                  <div>
                    <label className="block font-display text-[11px] tracking-widest text-slate-deep/70 uppercase mb-2 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-brand-blue" /> Vos aspirations, exigences & notes spéciales
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      placeholder="Ex: Intolérances alimentaires, affrètement d'un jet privé, accès VIP en coulisse, célébration d'anniversaire..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white/70 backdrop-blur-xs border border-slate-deep/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue font-sans transition-colors rounded-lg placeholder-slate-deep/30 resize-none"
                    />
                  </div>

                  {/* Destination-specific premium quote snippet */}
                  {selectedDestObj && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="p-4 bg-brand-blue/5 border-l-2 border-brand-blue rounded-r-lg flex items-start gap-3"
                    >
                      <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-display font-bold tracking-wider text-slate-deep uppercase">
                          Inclus dans la formule {selectedDestObj.title}
                        </p>
                        <p className="text-xs text-slate-deep/70 mt-1">
                          Hôtellerie 5★ de luxe, transferts de prestige privatifs, guides locaux experts certifiés et conciergerie active dès {selectedDestObj.priceFrom}/pers.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2 text-center">
                    <button
                      id="submit-booking-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-10 py-4 bg-slate-deep hover:bg-brand-blue text-white font-display text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group cursor-pointer rounded-lg shadow-xs hover:shadow-md"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Étude de votre profil...</span>
                        </div>
                      ) : (
                        <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                          Solliciter mon conseiller privé
                        </span>
                      )}
                    </button>
                    <p className="text-[10px] text-slate-deep/40 mt-3 font-light font-sans">
                      En soumettant ce projet, vous consentez à ce que nos experts en évasions analysent vos données confidentielles pour composer votre voyage d'exception.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
