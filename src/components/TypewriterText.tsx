import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per char
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 22,
  onComplete,
}) => {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setDisplayedLength(0);
    setIsCompleted(false);

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setDisplayedLength(index);

      if (index >= text.length) {
        clearInterval(interval);
        setIsCompleted(true);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  const handleSkip = () => {
    setDisplayedLength(text.length);
    setIsCompleted(true);
    if (onComplete) onComplete();
  };

  const visibleText = text.slice(0, displayedLength);
  const paragraphs = visibleText.split('\n');

  return (
    <div
      onClick={!isCompleted ? handleSkip : undefined}
      className={`relative cursor-pointer transition-opacity ${!isCompleted ? 'group' : ''}`}
      title={!isCompleted ? 'Click anywhere on letter to read instantly' : undefined}
    >
      <div className="space-y-4 font-handwriting text-romanticDark text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wide">
        {paragraphs.map((para, i) => (
          <p key={i} className="min-h-[1.5em]">
            {para}
            {!isCompleted && i === paragraphs.length - 1 && (
              <span className="inline-block w-1.5 h-5 ml-1 bg-roseRed animate-pulse align-middle" />
            )}
          </p>
        ))}
      </div>

      {!isCompleted && (
        <p className="mt-4 text-[11px] font-poppins text-roseRed/60 italic text-right">
          (tap letter to read all instantly ✨)
        </p>
      )}
    </div>
  );
};

