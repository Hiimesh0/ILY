import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface EnvelopeIllustrationProps {
  isOpening: boolean;
  onOpen: () => void;
  disabled?: boolean;
}

export const EnvelopeIllustration: React.FC<EnvelopeIllustrationProps> = ({
  isOpening,
  onOpen,
  disabled,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center my-6 select-none">
      {/* Floating stars, sparkles and tiny hearts around the envelope */}
      <div className="absolute -inset-10 pointer-events-none">
        {/* Top-left sparkles */}
        <motion.div
          className="absolute top-2 left-6 text-pink-400"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 0.9, 0.4], rotate: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles size={22} />
        </motion.div>

        {/* Top-right heart */}
        <motion.div
          className="absolute -top-4 right-10 text-roseRed"
          animate={{ y: [-4, 6, -4], scale: [1, 1.15, 1], rotate: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Heart size={20} className="fill-roseRed/70 text-roseRed" />
        </motion.div>

        {/* Bottom-left heart */}
        <motion.div
          className="absolute bottom-4 left-4 text-pink-300"
          animate={{ y: [4, -6, 4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Heart size={16} className="fill-pink-300 text-pink-300" />
        </motion.div>

        {/* Bottom-right sparkle */}
        <motion.div
          className="absolute bottom-2 right-8 text-roseRed/70"
          animate={{ scale: [0.7, 1.1, 0.7], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <Sparkles size={18} />
        </motion.div>
      </div>

      {/* The 3D Envelope Container */}
      <div
        className="relative w-72 h-48 sm:w-80 sm:h-52 cursor-pointer group"
        onClick={!disabled && !isOpening ? onOpen : undefined}
      >
        {/* Hidden / Emerging Letter Inside */}
        <motion.div
          className="absolute left-6 right-6 top-4 bg-[#FFFDF9] rounded-lg p-4 border border-pink-100 shadow-md flex flex-col items-center justify-center text-center z-10"
          initial={{ y: 0, opacity: 0 }}
          animate={
            isOpening
              ? {
                  y: -110,
                  opacity: 1,
                  scale: 1.05,
                  transition: { delay: 0.4, duration: 0.8, ease: 'easeOut' },
                }
              : { y: 0, opacity: 0 }
          }
        >
          <div className="w-10 h-1 bg-pink-200 rounded-full mb-2" />
          <p className="font-handwriting text-roseRed text-lg sm:text-xl font-bold">
            For My Special Girl ❤️
          </p>
          <p className="text-[10px] text-romanticDark/60 font-poppins">
            Unfolding something sweet...
          </p>
        </motion.div>

        {/* Envelope Base Shadow & Body */}
        <div className="absolute inset-0 bg-[#FFD6E7] rounded-xl envelope-shadow overflow-hidden border border-[#F8BBD0]">
          {/* Envelope Bottom and Side Flaps Pattern (CSS origami fold illusion) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 208"
            preserveAspectRatio="none"
          >
            {/* Background liner */}
            <rect width="320" height="208" fill="#FFF2F7" />

            {/* Left side triangle flap */}
            <polygon points="0,0 160,110 0,208" fill="#F8BBD0" opacity="0.65" />

            {/* Right side triangle flap */}
            <polygon points="320,0 160,110 320,208" fill="#F8BBD0" opacity="0.65" />

            {/* Bottom triangle flap */}
            <polygon points="0,208 160,98 320,208" fill="#FFD6E7" />
          </svg>
        </div>

        {/* Envelope Top Flap (Animated opening fold) */}
        <div className="absolute top-0 left-0 right-0 h-28 origin-top perspective-1000 z-20">
          <motion.div
            className="w-full h-full origin-top"
            initial={{ rotateX: 0 }}
            animate={isOpening ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front side of top flap (folded down) */}
            <svg
              className="w-full h-full drop-shadow-sm"
              viewBox="0 0 320 112"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,0 160,108 320,0"
                fill="#FFC9DF"
                stroke="#F8BBD0"
                strokeWidth="1"
              />
            </svg>

            {/* Wax Seal with Heart centered on the flap tip */}
            <motion.div
              className="absolute left-1/2 top-[80px] -translate-x-1/2 -translate-y-1/2 z-30"
              animate={
                isOpening
                  ? { scale: [1, 1.3, 0], opacity: [1, 0.8, 0] }
                  : { scale: [1, 1.05, 1] }
              }
              transition={
                isOpening
                  ? { duration: 0.4 }
                  : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E75480] to-[#C93B67] shadow-lg flex items-center justify-center border-2 border-[#FFAAA6] glow-romantic">
                <Heart size={20} className="fill-white text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

