import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedTeddy: React.FC = () => {
  const [isBouncing, setIsBouncing] = useState(false);
  const [showLove, setShowLove] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    setShowLove(true);
    setTimeout(() => setIsBouncing(false), 800);
    setTimeout(() => setShowLove(false), 2000);
  };

  return (
    <div className="relative inline-flex flex-col items-center select-none">
      {/* Pop up bubble when teddy is clicked */}
      {showLove && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: -16, scale: 1 }}
          exit={{ opacity: 0 }}
          className="absolute -top-12 z-20 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-pink-200 text-xs font-handwriting text-roseRed font-bold whitespace-nowrap"
        >
          *giggles* Love you loads! 🐾
        </motion.div>
      )}

      <motion.div
        className="cursor-pointer group relative"
        onClick={handleClick}
        animate={
          isBouncing
            ? { y: [-6, 0, -8, 0], scale: [1, 1.08, 0.96, 1], rotate: [0, -4, 4, 0] }
            : { y: [0, -4, 0] }
        }
        transition={
          isBouncing
            ? { duration: 0.6 }
            : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <svg
          width="130"
          height="140"
          viewBox="0 0 130 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-md"
        >
          {/* Bear Ears */}
          {/* Left Ear */}
          <circle cx="36" cy="38" r="16" fill="#D4A373" stroke="#B08968" strokeWidth="2" />
          <circle cx="36" cy="38" r="9" fill="#FFD6E7" />

          {/* Right Ear */}
          <circle cx="94" cy="38" r="16" fill="#D4A373" stroke="#B08968" strokeWidth="2" />
          <circle cx="94" cy="38" r="9" fill="#FFD6E7" />

          {/* Bear Body */}
          <ellipse cx="65" cy="98" rx="36" ry="34" fill="#D4A373" stroke="#B08968" strokeWidth="2" />
          {/* Soft tummy patch */}
          <ellipse cx="65" cy="100" rx="22" ry="20" fill="#EED7A1" opacity="0.6" />

          {/* Feet */}
          <ellipse cx="40" cy="128" rx="14" ry="10" fill="#D4A373" stroke="#B08968" strokeWidth="1.5" />
          <ellipse cx="40" cy="128" rx="8" ry="6" fill="#FFD6E7" />

          <ellipse cx="90" cy="128" rx="14" ry="10" fill="#D4A373" stroke="#B08968" strokeWidth="1.5" />
          <ellipse cx="90" cy="128" rx="8" ry="6" fill="#FFD6E7" />

          {/* Bear Head */}
          <ellipse cx="65" cy="56" rx="34" ry="30" fill="#D4A373" stroke="#B08968" strokeWidth="2" />

          {/* Cute Blushing Cheeks */}
          <circle cx="44" cy="64" r="6" fill="#FFB7B2" opacity="0.75" />
          <circle cx="86" cy="64" r="6" fill="#FFB7B2" opacity="0.75" />

          {/* Snout */}
          <ellipse cx="65" cy="64" rx="14" ry="10" fill="#FAEDCD" />
          {/* Nose */}
          <ellipse cx="65" cy="60" rx="4.5" ry="3.5" fill="#583D4D" />
          {/* Mouth */}
          <path
            d="M62 65 Q65 68 65 71"
            stroke="#583D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M65 71 Q68 68 71 65"
            stroke="#583D4D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Eyes */}
          <circle cx="50" cy="54" r="3.5" fill="#3D261D" />
          <circle cx="51.2" cy="52.8" r="1.2" fill="#FFFFFF" />

          <circle cx="80" cy="54" r="3.5" fill="#3D261D" />
          <circle cx="81.2" cy="52.8" r="1.2" fill="#FFFFFF" />

          {/* Arms holding the Heart */}
          <ellipse cx="36" cy="92" rx="12" ry="9" fill="#D4A373" stroke="#B08968" strokeWidth="1.5" transform="rotate(25 36 92)" />
          <ellipse cx="94" cy="92" rx="12" ry="9" fill="#D4A373" stroke="#B08968" strokeWidth="1.5" transform="rotate(-25 94 92)" />

          {/* Heart being held */}
          <g transform="translate(65, 92) scale(0.95) translate(-12, -12)">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#E75480"
              filter="drop-shadow(0 2px 4px rgba(231, 84, 128, 0.4))"
            />
            {/* Heart shine */}
            <path
              d="M7 6 C 8 4, 10 4, 10.5 5"
              stroke="#FFF"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>

          {/* Paws overlapping front of the heart */}
          <circle cx="53" cy="94" r="6" fill="#D4A373" stroke="#B08968" strokeWidth="1" />
          <circle cx="77" cy="94" r="6" fill="#D4A373" stroke="#B08968" strokeWidth="1" />
        </svg>
      </motion.div>
      <span className="text-[11px] font-medium text-roseRed/80 mt-1 italic tracking-wide">
        tap to tickle bear!
      </span>
    </div>
  );
};

