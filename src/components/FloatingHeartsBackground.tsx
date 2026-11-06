import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FloatingHeartsBackgroundProps {
  count?: number;
}

export const FloatingHeartsBackground: React.FC<FloatingHeartsBackgroundProps> = ({ count = 18 }) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 18 + 12; // 12px to 30px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 10 + 12; // 12s to 22s
      const delay = Math.random() * 8;
      const opacity = Math.random() * 0.35 + 0.15;
      const rotation = Math.random() * 40 - 20;

      // Color variation in pastel range
      const colors = ['#F8BBD0', '#FFD6E7', '#E9D5FF', '#FCE7F3', '#E75480'];
      const color = colors[i % colors.length];

      return {
        id: i,
        size,
        left,
        duration,
        delay,
        opacity,
        rotation,
        color,
      };
    });
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute bottom-[-40px]"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
          }}
          animate={{
            y: ['0vh', '-115vh'],
            x: [0, Math.sin(h.id) * 45, 0],
            rotate: [h.rotation, h.rotation + 25, h.rotation - 25],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: 'linear',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill={h.color}
            className="w-full h-full drop-shadow-sm"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Tiny soft sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-pink-300 pointer-events-none"
          style={{
            top: `${(i * 9 + 7) % 95}%`,
            left: `${(i * 17 + 5) % 95}%`,
            boxShadow: '0 0 8px #FFD6E7',
          }}
          animate={{
            scale: [0.6, 1.4, 0.6],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

