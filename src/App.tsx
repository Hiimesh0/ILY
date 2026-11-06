import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { FloatingHeartsBackground } from './components/FloatingHeartsBackground';
import { ClickHeartSpawner } from './components/ClickHeartSpawner';
import { MusicBox } from './components/MusicBox';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);

  const goToPageTwo = () => {
    setCurrentPage(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPageOne = () => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FFF8F0] text-[#583D4D] overflow-x-hidden selection:bg-[#F8BBD0]">
      {/* Background ambient floating hearts and sparkles */}
      <FloatingHeartsBackground count={16} />

      {/* Floating hearts on click anywhere */}
      <ClickHeartSpawner />

      {/* Music box toggle button in top corner */}
      <MusicBox />

      {/* Main Pages with Smooth Transition */}
      <main className="relative z-10 w-full min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {currentPage === 1 ? (
            <motion.div
              key="page-one"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="flex-1 flex flex-col justify-center"
            >
              <PageOne onOpenLetter={goToPageTwo} />
            </motion.div>
          ) : (
            <motion.div
              key="page-two"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex-1"
            >
              <PageTwo onBackToStart={goToPageOne} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
