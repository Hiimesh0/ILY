import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Send, Gift, ArrowLeft } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { AnimatedTeddy } from './AnimatedTeddy';
import { InteractiveGrowingHeart } from './InteractiveGrowingHeart';
import { HugOverlay } from './HugOverlay';
import { HiddenMessageModal } from './HiddenMessageModal';
import { romanticConfig } from '../config';

interface PageTwoProps {
  onBackToStart: () => void;
}

export const PageTwo: React.FC<PageTwoProps> = ({ onBackToStart }) => {
  const [isHugOpen, setIsHugOpen] = useState(false);
  const [isHiddenMessageOpen, setIsHiddenMessageOpen] = useState(false);

  const recipientGreeting =
    romanticConfig.herName && romanticConfig.herName !== '[HER NAME]'
      ? `To ${romanticConfig.herName} ❤️`
      : 'To My Favourite Human ❤️';

  const signatureText =
    romanticConfig.myName && romanticConfig.myName !== '[YOUR NAME]'
      ? `Forever yours, with love, ${romanticConfig.myName}`
      : 'Forever yours, with love.';

  const formattedDate =
    romanticConfig.specialDate && romanticConfig.specialDate !== '[SPECIAL DATE]'
      ? romanticConfig.specialDate
      : null;

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto z-10">
      {/* Return button at top left */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBackToStart}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-romanticDark/60 hover:text-roseRed transition-colors bg-white/60 hover:bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-pink-100 shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Back to Envelope</span>
        </button>

        {formattedDate && (
          <span className="text-xs font-handwriting text-roseRed/80 font-bold bg-pink-100/50 px-3 py-1 rounded-full border border-pink-200">
            {formattedDate} ✨
          </span>
        )}
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center space-y-3 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-handwriting text-2xl sm:text-3xl text-roseRed font-bold tracking-wide">
          {recipientGreeting}
        </p>
        <h1 className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl text-romanticDark leading-snug">
          "If I could choose again, I'd still choose you."
        </h1>
        <div className="flex items-center justify-center gap-2 text-pink-300">
          <div className="h-[1px] w-12 bg-pink-300" />
          <Heart size={14} className="fill-pink-300 text-pink-300" />
          <div className="h-[1px] w-12 bg-pink-300" />
        </div>
      </motion.div>

      {/* Romantic Scrapbook Letter Card */}
      <motion.div
        className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-12 letter-shadow border border-[#F8BBD0]/60 mb-12"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        {/* Scrapbook washi tape on top corners */}
        <div className="absolute -top-3 left-8 w-24 h-6 bg-pink-200/80 -rotate-3 rounded-sm shadow-xs border-y border-dashed border-pink-300/70" />
        <div className="absolute -top-3 right-8 w-24 h-6 bg-rose-200/80 rotate-2 rounded-sm shadow-xs border-y border-dashed border-rose-300/70" />

        {/* Vintage postage stamp accent on top-right */}
        <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center w-14 h-16 border-2 border-dashed border-roseRed/30 rounded p-1 bg-pink-50/50 rotate-3">
          <Heart size={18} className="fill-roseRed text-roseRed" />
          <span className="text-[9px] font-mono text-romanticDark/60 mt-1 uppercase">1st Class</span>
          <span className="text-[8px] font-mono text-roseRed">Love Mail</span>
        </div>

        {/* Letter Typewriter Content */}
        <div className="mt-2 pr-0 sm:pr-8">
          <TypewriterText text={romanticConfig.personalMessage} speed={18} />
        </div>

        {/* Decorative corner botanical flourish */}
        <div className="mt-8 pt-4 border-t border-pink-100 flex items-center justify-between text-xs text-romanticDark/50 font-poppins">
          <span className="italic flex items-center gap-1">
            <Sparkles size={12} className="text-pink-400" />
            Written straight from the heart
          </span>
          <span className="font-handwriting text-roseRed text-base">Always & Forever</span>
        </div>
      </motion.div>

      {/* Optional Polaroid Photo Gallery (if provided in config) */}
      {romanticConfig.polaroidPhotos && romanticConfig.polaroidPhotos.length > 0 && (
        <motion.div
          className="my-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-8 py-4">
            {romanticConfig.polaroidPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: 0 }}
                style={{ transform: `rotate(${photo.rotation || (idx % 2 === 0 ? -3 : 3)}deg)` }}
                className="bg-white p-3.5 pb-6 rounded-lg polaroid-shadow border border-pink-100 max-w-[240px] text-center relative group"
              >
                {/* Washi tape on photo */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-pink-200/80 -rotate-2 border-y border-dashed border-pink-300" />
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-44 object-cover rounded bg-pink-50"
                  loading="lazy"
                />
                <p className="mt-3 font-handwriting text-base text-romanticDark font-bold">
                  {photo.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Cute Interactive Playground Elements */}
      <motion.div
        className="my-10 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-center">
          <h2 className="font-playfair font-bold text-xl text-romanticDark mb-1">
            Little Surprises Just For You
          </h2>
          <p className="text-xs text-romanticDark/70 font-poppins">
            Tap the buttons and play with the cute things below
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Send You A Hug Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsHugOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-roseRed to-pink-500 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all glow-romantic"
          >
            <Send size={16} />
            <span>Send You a Hug 🤗</span>
          </motion.button>

          {/* One More Thing... Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsHiddenMessageOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-roseRed border-2 border-roseRed/40 font-medium text-sm sm:text-base shadow-sm hover:shadow-md hover:bg-pink-50/50 transition-all"
          >
            <Gift size={16} />
            <span>One More Thing... ✨</span>
          </motion.button>
        </div>

        {/* Grid for Teddy Bear and Growing Heart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-4">
          {/* Animated Bear Component */}
          <div className="flex flex-col items-center justify-center p-6 bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-100 shadow-sm">
            <AnimatedTeddy />
          </div>

          {/* Growing Interactive Heart */}
          <div className="h-full flex items-center justify-center">
            <InteractiveGrowingHeart />
          </div>
        </div>
      </motion.div>

      {/* FINAL LOVE MOMENT SECTION */}
      <motion.section
        className="mt-16 pt-10 pb-16 text-center border-t border-pink-200/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-handwriting text-2xl sm:text-3xl text-roseRed font-bold mb-3">
          Just One Last Thing...
        </p>

        {/* Huge Animated Heart */}
        <div className="my-8 flex justify-center items-center">
          <motion.div
            className="relative cursor-pointer"
            animate={{
              scale: [1, 1.12, 1, 1.08, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-28 h-28 sm:w-36 sm:h-36 fill-roseRed filter drop-shadow-[0_10px_20px_rgba(231,84,128,0.5)] glow-romantic-lg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <Sparkles
              size={24}
              className="absolute -top-2 -right-2 text-yellow-300 animate-sparkle"
            />
          </motion.div>
        </div>

        {/* Text inside or below it */}
        <div className="max-w-md mx-auto space-y-4 px-2">
          <p className="font-poppins text-base sm:text-lg text-romanticDark font-medium leading-relaxed">
            "You're my favourite notification, my favourite conversation, and my favourite person."
          </p>

          <h3 className="font-playfair font-extrabold text-2xl sm:text-3xl md:text-4xl text-roseRed tracking-wide py-2">
            I LOVE YOU SO MUCH ❤️
          </h3>

          <p className="font-handwriting text-xl sm:text-2xl text-romanticDark/90 font-bold italic pt-2">
            {signatureText}
          </p>
        </div>

        {/* Read Again button */}
        <div className="mt-12">
          <button
            onClick={onBackToStart}
            className="text-xs sm:text-sm font-medium text-roseRed hover:text-[#d63f6b] hover:underline underline-offset-4 transition-all"
          >
            Read Again From The Start 💌
          </button>
        </div>
      </motion.section>

      {/* Hug Overlay Modal */}
      <HugOverlay
        isOpen={isHugOpen}
        onClose={() => setIsHugOpen(false)}
        nickname={
          romanticConfig.personalNickname !== '[NICKNAME]'
            ? romanticConfig.personalNickname
            : undefined
        }
      />

      {/* Hidden Message Reveal Modal */}
      <HiddenMessageModal
        isOpen={isHiddenMessageOpen}
        onClose={() => setIsHiddenMessageOpen(false)}
        message={romanticConfig.hiddenMessage}
      />
    </div>
  );
};

