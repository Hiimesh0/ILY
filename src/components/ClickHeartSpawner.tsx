import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ClickHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
}

export const ClickHeartSpawner: React.FC = () => {
  const [hearts, setHearts] = useState<ClickHeart[]>([]);

  useEffect(() => {
    let heartCounter = 0;

    const handleClick = (e: MouseEvent | TouchEvent) => {
      // Don't intercept clicks if clicking a button with special handlers, but spawn hearts everywhere
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      const colors = ['#E75480', '#F8BBD0', '#FF85A2', '#FF6B8B', '#FFAAA6'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomSize = Math.floor(Math.random() * 14) + 16; // 16px - 30px
      const randomRotation = (Math.random() - 0.5) * 40;

      const newHeart: ClickHeart = {
        id: ++heartCounter,
        x: clientX,
        y: clientY,
        size: randomSize,
        color: randomColor,
        rotation: randomRotation,
      };

      setHearts((prev) => [...prev.slice(-25), newHeart]);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const handleHeartComplete = (id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              x: heart.x - heart.size / 2,
              y: heart.y - heart.size / 2,
              scale: 0.2,
              opacity: 0.9,
              rotate: heart.rotation,
            }}
            animate={{
              y: heart.y - heart.size / 2 - 85,
              x: heart.x - heart.size / 2 + (Math.random() - 0.5) * 40,
              scale: [0.3, 1.2, 0.9],
              opacity: [0.9, 1, 0],
              rotate: heart.rotation + (Math.random() > 0.5 ? 20 : -20),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            onAnimationComplete={() => handleHeartComplete(heart.id)}
            className="absolute pointer-events-none"
            style={{ width: heart.size, height: heart.size }}
          >
            <svg
              viewBox="0 0 24 24"
              fill={heart.color}
              className="w-full h-full drop-shadow-md"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

