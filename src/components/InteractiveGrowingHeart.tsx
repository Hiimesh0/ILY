import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const InteractiveGrowingHeart: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const [scale, setScale] = useState(1);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newCount = clicks + 1;
    setClicks(newCount);
    setScale((prev) => Math.min(prev + 0.08, 1.85));

    // Little heart burst at position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 12,
      spread: 60,
      origin: { x, y },
      colors: ['#FFD6E7', '#F8BBD0', '#E75480', '#FF85A2'],
      shapes: ['circle'],
      scalar: 0.8,
      ticks: 40,
    });

    if (newCount === 10) {
      confetti({
        particleCount: 45,
        spread: 90,
        origin: { x, y },
        colors: ['#E75480', '#FF69B4', '#FFD700', '#FFF8F0'],
      });
    }
  };

  const getStatusMessage = () => {
    if (clicks === 0) return 'Tap me to grow my heart!';
    if (clicks < 3) return 'A spark of love... 💕';
    if (clicks < 6) return 'Growing bigger and warmer! 🌸';
    if (clicks < 10) return 'Completely head over heels! 🥰';
    if (clicks < 15) return 'Full of infinite love for you! 💖';
    return "My heart can't hold anymore love! 🚀❤️";
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-pink-100 shadow-sm max-w-xs mx-auto text-center">
      <p className="text-xs font-medium text-romanticDark/70 mb-2">
        Interactive Love Meter
      </p>

      <motion.button
        onClick={handleClick}
        whileTap={{ scale: scale * 0.9 }}
        className="relative p-2 focus:outline-none transition-transform"
        style={{ transform: `scale(${scale})` }}
        title="Tap to make the heart grow"
      >
        <svg
          viewBox="0 0 24 24"
          fill="#E75480"
          className="w-12 h-12 drop-shadow-md transition-colors hover:fill-[#d63f6b]"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        {clicks > 0 && (
          <span className="absolute -top-1 -right-1 bg-roseRed text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
            {clicks}
          </span>
        )}
      </motion.button>

      <motion.p
        key={clicks}
        initial={{ opacity: 0, y: 3 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-handwriting text-roseRed text-base mt-2 font-semibold"
      >
        {getStatusMessage()}
      </motion.p>
    </div>
  );
};

