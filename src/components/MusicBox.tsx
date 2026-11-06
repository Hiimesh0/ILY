import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicBox: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const noteIndexRef = useRef(0);

  // A romantic music box lullaby tune (frequencies in Hz: Canon in D / Romance inspired notes)
  // C5, G4, A4, E4, F4, C4, F4, G4 ...
  const melody = [
    { freq: 523.25, dur: 0.6 }, // C5
    { freq: 392.00, dur: 0.6 }, // G4
    { freq: 440.00, dur: 0.6 }, // A4
    { freq: 329.63, dur: 0.6 }, // E4
    { freq: 349.23, dur: 0.6 }, // F4
    { freq: 261.63, dur: 0.6 }, // C4
    { freq: 349.23, dur: 0.6 }, // F4
    { freq: 392.00, dur: 0.6 }, // G4
    { freq: 523.25, dur: 0.6 }, // C5
    { freq: 587.33, dur: 0.6 }, // D5
    { freq: 659.25, dur: 0.6 }, // E5
    { freq: 523.25, dur: 0.6 }, // C5
    { freq: 587.33, dur: 0.6 }, // D5
    { freq: 659.25, dur: 0.6 }, // E5
    { freq: 698.46, dur: 0.6 }, // F5
    { freq: 659.25, dur: 0.6 }, // E5
    { freq: 587.33, dur: 0.6 }, // D5
    { freq: 523.25, dur: 1.0 }, // C5
  ];

  const playNote = (freq: number) => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Celesta / Music Box timbre (sine with gentle overtone)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Envelope: quick attack, sparkling gentle decay
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.09, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  };

  const scheduleNextNote = () => {
    if (!isPlaying) return;
    const current = melody[noteIndexRef.current];
    playNote(current.freq);
    noteIndexRef.current = (noteIndexRef.current + 1) % melody.length;
    timerRef.current = window.setTimeout(scheduleNextNote, current.dur * 850);
  };

  useEffect(() => {
    if (isPlaying) {
      scheduleNextNote();
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={toggleMusic}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-pink-200/80 shadow-sm text-romanticDark hover:text-roseRed transition-all hover:scale-105 active:scale-95 text-xs font-medium"
        title={isPlaying ? 'Mute romantic tune' : 'Play romantic music box'}
      >
        {isPlaying ? (
          <>
            <Volume2 size={15} className="text-roseRed animate-pulse" />
            <Music size={13} className="text-pink-400" />
            <span className="hidden sm:inline text-roseRed">Melody Playing</span>
          </>
        ) : (
          <>
            <VolumeX size={15} className="text-romanticDark/60" />
            <span className="hidden sm:inline text-romanticDark/70">Play Sweet Tune</span>
          </>
        )}
      </button>
    </div>
  );
};

