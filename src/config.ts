/**
 * Romantic Website Personalisation Configuration
 * 
 * You can customize all names, dates, nicknames, and personal messages here!
 * The website will automatically update throughout both pages.
 */

export interface RomanticConfig {
  herName: string;
  myName: string;
  specialDate: string;
  personalNickname: string;
  personalMessage: string;
  hiddenMessage: string;
  musicEnabledByDefault: boolean;
  // Optional polaroid photos (URL or local path, leave empty array [] if none)
  polaroidPhotos?: Array<{
    url: string;
    caption: string;
    rotation?: number; // e.g. -3 or 4 degrees
  }>;
}

export const romanticConfig: RomanticConfig = {
  // Girlfriend's name (e.g. "Sarah", "Emily", or keep as placeholder if unknown)
  herName: "[HER NAME]",

  // Your name (e.g. "Alex", "David", etc.)
  myName: "[YOUR NAME]",

  // Your special anniversary or meeting date (e.g. "October 14, 2023")
  specialDate: "[SPECIAL DATE]",

  // Personal sweet nickname (e.g. "My Sweetheart", "Cutie", "Bubba")
  personalNickname: "[NICKNAME]",

  // Personal message displayed inside the letter on Page 2
  personalMessage: `Hey Love,

I don't know if I say it enough, but I genuinely feel lucky to have you in my life.

You make my ordinary days feel special, your smile makes everything better, and even the smallest conversations with you become my favourite memories.

I may not always have the perfect words to express what I feel, but one thing will never change.

I'm really happy that it's you.

I love your little things, your smile, your way of talking, and everything that makes you who you are.

No matter how far we are from each other, you're always someone very close to my heart.

I don't promise to be perfect, but I promise to keep choosing you, understanding you, supporting you, and making you smile.

And if there's one thing I want you to remember today, it's this...

I LOVE YOU. ❤️`,

  // Hidden message revealed by the "One More Thing..." button
  hiddenMessage: "Even on my busiest days, you're still my favourite thought. ❤️",

  // Audio background toggle
  musicEnabledByDefault: false,

  // Optional polaroids: add image URLs or leave empty []
  polaroidPhotos: [],
};

