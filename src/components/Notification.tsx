import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, Bell } from "lucide-react";

interface NotificationProps {
  message: string | null;
  onClose: () => void;
}

export default function Notification({ message, onClose }: NotificationProps) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(onClose, 6000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 max-w-md bg-white/90 backdrop-blur-md text-slate-deep p-5 shadow-2xl border border-brand-blue/10 flex gap-4 items-start rounded-2xl"
          id="toast-notification"
        >
          {/* Logo badge in toast */}
          <div className="w-8 h-8 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
            <Check className="w-4 h-4" />
          </div>

          <div className="flex-1 space-y-1">
            <h4 className="font-display text-[10px] tracking-widest text-brand-blue font-bold uppercase">
              Notification d'Exception
            </h4>
            <p className="font-sans font-light text-xs text-slate-deep/90 leading-relaxed">
              {message}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="text-slate-deep/40 hover:text-slate-deep p-1 transition-colors cursor-pointer bg-slate-deep/[0.03] hover:bg-slate-deep/[0.08] rounded-full"
            aria-label="Fermer la notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
