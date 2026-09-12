// ============================================================================
// EVERYTHING YOU WANT TO CUSTOMIZE LIVES IN THIS FILE.
// Swap text, dates, and image paths here — no need to touch components.
// Drop your own photos in `src/assets/photos/` and update the paths below.
// ============================================================================

export interface Memory {
  title: string;
  date: string;
  description: string;
  imagePlaceholder: string;
}

export interface LoveNote {
  id: number;
  title: string;
  note: string;
}

export const birthdayData = {
  // ---- Core details ----
  recipientName: "Nehussss",
  recipientNickname: "My Love",
  // Cycles rapidly under the hero title — add/remove/reorder as you like.
  recipientNicknames: [
    "Nehu",
    "Nehutaaa",
    "Chakkreee",
    "Nehuseeee",
    "Vaveeee",
    "Mutheeeeee",
    "Neheeeeee",
    "Ammmmuuuuuuu",
  ],
  birthDate: "September 14",
  relationshipStartDate: "2022-08-20", // used for the "time together" counter — set to your anniversary date

  // ---- Hero section ----
  heroTitle: "Happy Birthday",
  heroSubtitle:
    "To the girl who turned my ordinary days into a story worth telling — today, ",
  // Rendered with a soft highlight right after heroSubtitle.
  heroSubtitleHighlight:
    "Ente Nehusintee Jenmadinamm ahneyyyy ayoooooooo I love youuuuuuuuuuuuuuuuuuuuu",
  heroButtonText: "Njekkii Potttikkkkkkk",

  // ---- Memory Lane timeline ----
  memories: [
    {
      title: "The Day We Met",
      date: "Aug 2022",
      description:
        "A random hello that turned into hours of talking. I didn't know it then, but that was the start of my favorite story.",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Our First Date",
      date: "Sep 2022",
      description:
        "Nervous laughs, spilled drinks, and a conversation that just wouldn't end. I already knew I wanted a second one.",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "That Golden Sunset",
      date: "Mar 2023",
      description:
        "We didn't say much, just watched the sky turn gold together. Some moments don't need words.",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1495467033336-2effa1e46f99?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Our Little Trip",
      date: "Jan 2024",
      description:
        "New places, old jokes, and a thousand photos we'll never delete. Home just feels like wherever you are.",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Today",
      date: "Now",
      description:
        "Still choosing you, still falling for you, still so grateful the universe put you in my life. Happy Birthday.",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
    },
  ] as Memory[],

  // ---- Reasons Why grid ----
  loveNotes: [
    {
      id: 1,
      title: "Your Smile",
      note: "It's the first thing I look for in every photo, every memory, every room you walk into.",
    },
    {
      id: 2,
      title: "Your Kindness",
      note: "You make everyone around you feel a little safer, a little softer, a little more seen.",
    },
    {
      id: 3,
      title: "Your Laugh",
      note: "Loud, unfiltered, completely you — it's my favorite sound in the entire world.",
    },
    {
      id: 4,
      title: "Your Strength",
      note: "I've watched you carry so much and still choose softness. That's the quiet kind of brave.",
    },
    {
      id: 5,
      title: "Your Weirdness",
      note: "The random voices, the silly dances, the 2am thoughts — I wouldn't trade any of it.",
    },
    {
      id: 6,
      title: "The Way You Love",
      note: "Fully, loudly, without holding back. I've never felt luckier to be on the receiving end of it.",
    },
  ] as LoveNote[],

  // ---- The Birthday Letter ----
  letterContent: `My Love,

I don't think words will ever fully capture what you mean to me, but today I want to try anyway.

Another year of you existing in this world is something worth celebrating loudly. You've filled my life with a kind of warmth I didn't know I was missing — in the way you laugh at your own jokes before you finish telling them, the way you care for everyone around you without expecting anything back, and the way you make even the most ordinary Tuesday feel like something worth remembering.

I hope this year gives you everything you've been quietly hoping for. I hope it's softer where you needed softness, and braver where you needed courage. And whatever it brings, I hope you know I'll be right here — cheering the loudest, holding your hand the tightest.

Happy Birthday, my love. Here's to you, to us, and to every birthday I get to spend loving you.

Forever yours,
Melvin 💛`,

  letterSignature: "Melvin",

  // ---- Music ----
  // Drop an mp3 in `public/` and reference it as "/your-song.mp3", or paste a direct audio URL.
  playlist: {
    src: "/song.mp3",
    title: "Our Song",
  },

  // ---- Cake wish ----
  wishMessage:
    "Whatever you wished for — I hope it comes true. And if it doesn't, I hope I get to be the one who makes it happen anyway.",
};
