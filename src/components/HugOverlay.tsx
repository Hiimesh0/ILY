import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X } from 'lucide-react';

interface HugOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  nickname?: string;
}

export const HugOverlay: React.FC<HugOverlayProps> = ({ isOpen, onClose, nickname }) => {
  useEffect(() => {
    if (isOpen) {
      // Gentle burst of pastel confetti
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FFD6E7', '#F8BBD0', '#E75480', '#FFF8F0', '#E9D5FF'],
      });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FFF5F8] p-8 sm:p-10 rounded-3xl max-w-md w-full text-center border-2 border-pink-200 letter-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-romanticDark/50 hover:text-roseRed transition-colors p-1 rounded-full hover:bg-pink-100/50"
              aria-label="Close hug"
            >
              <X size={20} />
            </button>

            {/* Hugging Heart Illustration with animated arms */}
            <div className="relative w-44 h-44 mx-auto my-3 flex items-center justify-center">
              {/* Pulsing warmth glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-pink-200/50 filter blur-xl"
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Main Hug Heart */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  rotate: [0, -2, 2, 0],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-36 h-36"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  <path
                    d="M50 88 C20 62 4 44 4 27 C4 12 15 4 29 4 C38 4 46 9 50 16 C54 9 62 4 71 4 C85 4 96 12 96 27 C96 44 80 62 50 88 Z"
                    fill="#E75480"
                  />
                  {/* Blushing cheeks */}
                  <ellipse cx="32" cy="42" rx="5" ry="3" fill="#FFAAA6" opacity="0.9" />
                  <ellipse cx="68" cy="42" rx="5" ry="3" fill="#FFAAA6" opacity="0.9" />

                  {/* Happy sleeping / cozy eyes */}
                  <path
                    d="M26 36 Q32 30 38 36"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M62 36 Q68 30 74 36"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Little sweet smile */}
                  <path
                    d="M45 44 Q50 49 55 44"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Hugging left arm wrapped around */}
                  <motion.path
                    d="M14 42 C6 48 10 65 30 60 C38 58 42 52 42 48"
                    stroke="#D63F6B"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ rotate: [-4, 6, -4] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Hugging right arm wrapped around */}
                  <motion.path
                    d="M86 42 C94 48 90 65 70 60 C62 58 58 52 58 48"
                    stroke="#D63F6B"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    animate={{ rotate: [4, -6, 4] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </svg>
              </motion.div>
            </div>

            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-2xl font-playfair font-bold text-romanticDark"
            >
              A Warm, Tight Hug! 🤗
            </motion.h3>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-2 text-sm text-romanticDark/80 font-poppins leading-relaxed"
            >
              Sending this right to your arms{nickname ? `, ${nickname}` : ''}.
              Close your eyes, take a deep breath, and feel just how tightly I'm holding you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6"
            >
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-roseRed to-pink-500 text-white font-medium text-sm shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                Hug Received ❤️
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

