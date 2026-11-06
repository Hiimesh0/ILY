import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Heart } from 'lucide-react';

interface HiddenMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export const HiddenMessageModal: React.FC<HiddenMessageModalProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -3, opacity: 0, y: 20 }}
            animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, rotate: 2, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="relative bg-[#FFFDF9] p-8 sm:p-10 rounded-2xl max-w-md w-full border border-pink-200 letter-shadow overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Washi tape decoration at top */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-pink-200/70 rotate-[-1.5deg] shadow-sm rounded-sm border-dashed border-t border-b border-pink-300" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-romanticDark/50 hover:text-roseRed transition-colors p-1"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex items-center justify-center gap-2 text-roseRed mb-4 pt-2">
              <Sparkles size={18} className="animate-spin-slow text-pink-400" />
              <span className="text-xs uppercase tracking-widest font-semibold font-poppins">
                Secret Note For You
              </span>
              <Sparkles size={18} className="animate-spin-slow text-pink-400" />
            </div>

            <div className="py-4 px-2 text-center">
              <p className="text-xl sm:text-2xl font-handwriting font-bold text-romanticDark leading-relaxed">
                "{message}"
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <Heart size={16} className="text-roseRed fill-roseRed animate-pulse" />
              <span className="text-xs text-romanticDark/70 font-poppins italic">
                Always & forever
              </span>
              <Heart size={16} className="text-roseRed fill-roseRed animate-pulse" />
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={onClose}
                className="text-xs font-medium text-roseRed hover:underline decoration-pink-300 underline-offset-4"
              >
                Keep in my heart 💕
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

