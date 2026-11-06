import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import { EnvelopeIllustration } from './EnvelopeIllustration';
import { romanticConfig } from '../config';

interface PageOneProps {
  onOpenLetter: () => void;
}

export const PageOne: React.FC<PageOneProps> = ({ onOpenLetter }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Confetti burst of hearts
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.55 },
      colors: ['#FFD6E7', '#F8BBD0', '#E75480', '#FFF8F0', '#E9D5FF'],
    });

    // Allow the envelope unfold and letter slide animation to play out, then switch page
    setTimeout(() => {
      onOpenLetter();
    }, 1400);
  };

  // Determine friendly greeting with config fallback
  const greetingText =
    romanticConfig.personalNickname && romanticConfig.personalNickname !== '[NICKNAME]'
      ? `Hey, ${romanticConfig.personalNickname}...`
      : romanticConfig.herName && romanticConfig.herName !== '[HER NAME]'
      ? `Hey, ${romanticConfig.herName}...`
      : 'Hey, My Favourite Person...';

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between px-4 py-8 sm:py-12 z-10">
      {/* Top Greeting & Headings */}
      <motion.div
        className="text-center max-w-xl mx-auto space-y-3 pt-4 sm:pt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Handwritten heading */}
        <motion.p
          className="font-handwriting text-2xl sm:text-3xl text-roseRed font-bold tracking-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {greetingText}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-romanticDark leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          I made something for you <span className="text-roseRed inline-block">❤️</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="font-poppins text-sm sm:text-base text-romanticDark/75 max-w-md mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Because sometimes words aren't enough to express what you mean to me.
        </motion.p>
      </motion.div>

      {/* Centerpiece: Animated Envelope */}
      <motion.div
        className="my-auto py-6 sm:py-8 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.8, type: 'spring' }}
      >
        <EnvelopeIllustration
          isOpening={isOpening}
          onOpen={handleOpenClick}
          disabled={isOpening}
        />

        {/* Open Button */}
        <motion.button
          onClick={handleOpenClick}
          disabled={isOpening}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-roseRed via-[#f06292] to-[#ec407a] text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group text-base sm:text-lg glow-romantic disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{isOpening ? 'Opening for you...' : 'Open My Heart 💌'}</span>
          <Heart
            size={18}
            className={`fill-white transition-transform ${
              isOpening ? 'scale-125' : 'group-hover:scale-125'
            }`}
          />
        </motion.button>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="text-center pt-6 pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="text-xs sm:text-sm font-poppins text-romanticDark/60 flex items-center justify-center gap-1.5">
          <span>Made with all my love</span>
          <Heart size={14} className="fill-roseRed text-roseRed inline animate-pulse" />
        </p>
      </motion.footer>
    </div>
  );
};

