# For My Favourite Person ❤️ — Romantic Digital Love Letter Website

A romantic, cute, interactive 2-page website crafted with love to express your deepest feelings.

## ✨ Highlights & Features

- **Page 1 (A Little Surprise 💗):**
  - Pastel romantic scrapbook aesthetic with animated ambient floating hearts and sparkles.
  - Custom illustrated 3D origami envelope with gold/pink wax seal stamped with a heart.
  - When she clicks **"Open My Heart 💌"**: the envelope flap folds open in 3D, wax seal pops with gentle confetti, the letter card emerges, and smoothly transitions into Page 2.

- **Page 2 (A Letter From My Heart 💌):**
  - Elegant handwritten letter card on lined paper with scrapbook washi tape and vintage postage stamp.
  - Realistic typewriter animation with smooth natural cadence (can also be tapped to reveal full letter immediately).
  - **Cute Interactive Elements:**
    - ✨ **Click/Tap Hearts:** Tap anywhere on the screen on mobile or desktop to spawn floating hearts that drift upwards.
    - 🧸 **Animated Teddy Bear:** Handcrafted SVG teddy holding a pulsing heart; tap him to tickle and hear him giggle!
    - 📈 **Interactive Growing Heart:** Tap to grow the heart from "A spark of love" to "Infinite love" with confetti bursts.
    - 🤗 **"Send You a Hug":** Triggers a full-screen hugging heart animation with cozy arms wrapping around and heartfelt words.
    - 🎁 **"One More Thing...":** Secret note popup revealing: *"Even on my busiest days, you're still my favourite thought. ❤️"*
  - **Final Love Moment:**
    - Huge glowing animated pulsing heart.
    - *"You're my favourite notification, my favourite conversation, and my favourite person."*
    - *"I LOVE YOU SO MUCH ❤️"*
    - Personal signature and a button to replay from the start.

- 🎵 **Romantic Music Box:**
  - Built-in Web Audio API lullaby music box in the top corner that plays a gentle chime tune without any external audio file dependencies.

---

## 🛠️ How to Personalise in 1 Step

Open [`src/config.ts`](file:///c:/Users/kanth/Desktop/ILY/src/config.ts) and simply edit:

```typescript
export const romanticConfig = {
  herName: "Her Real Name",            // e.g. "Sophia" (or keep placeholder)
  myName: "Your Name",                 // e.g. "Alex"
  specialDate: "October 14, 2023",     // e.g. your anniversary date
  personalNickname: "My Sunshine",     // sweet nickname
  personalMessage: `Hey Love, ...`,    // your love letter
  hiddenMessage: "...",                // secret modal message
};
```

---

## 🚀 How to Run Locally

1. Install dependencies (already installed):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at the displayed local URL (typically `http://localhost:5173`).

---

## 🌐 How to Deploy (Share with Her!)

### Option 1: Vercel (Recommended — Free & 1-Click)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and click **"Deploy"**.
4. Send her the generated link!

### Option 2: Netlify
1. Run `npm run build` to generate the production bundle in the `dist` folder.
2. Drag and drop the `dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
3. Get an instant live URL to send her.
