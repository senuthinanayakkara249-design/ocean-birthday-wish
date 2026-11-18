/* =====================================================================
   config.js  —  ✏️  THE ONLY FILE YOU NEED TO EDIT  ✏️
   ---------------------------------------------------------------------
   Everything personal lives here: the password, the letters, the quiz,
   the photos and the song. You do NOT need to touch script.js or
   style.css to personalize the website.

   QUICK RULES FOR EDITING (important for beginners!)
   1. Text goes between quotes:  "like this"
   2. Every line inside a list ends with a comma  ,
   3. If your text contains a double quote ("), write \" instead,
      or just use single quotes around the whole text: 'like this'
   4. After saving, refresh the browser tab (F5) to see changes.

   SPECIAL SHORTCUTS you can type inside any text:
      {nickname}  becomes  Ocean (or whatever you set below)
      {sender}    becomes  your display name (set below)

   PLACEHOLDERS:
   Anything written inside [square brackets] is a reminder for YOU to
   replace with something personal (a memory, an inside joke...).
   While you edit, they glow yellow so you can't miss them.
   When you are finished, set  highlightPlaceholders: false  below.
   ===================================================================== */

const CONFIG = {

  /* ------------------------------------------------------------------
     1. THE BASICS
     ------------------------------------------------------------------ */
  nickname: "Ocean",                 // His nickname, used all over the site
  senderName: "Your Pearl 🤍",        // ✏️ YOUR display name / signature (change me!)

  // true  = [bracketed placeholders] glow yellow so you can find them.
  // false = they look like normal text. Set to false when you're done editing!
  highlightPlaceholders: true,

  /* ------------------------------------------------------------------
     2. PAGE 1 — THE SECRET PASSWORD GATE
     ------------------------------------------------------------------ */
  gate: {
    // ✏️ The secret code. DIGITS ONLY, between 4 and 8 digits long.
    // The number of little pearls on screen matches the length of this code.
    password: "2302",

    // ✏️ A hint shown on the lock screen. Don't give the answer away!
    hint: "Hint: four little numbers that mean something special to us 💙",

    // Message shown when he types the wrong code
    wrongMessage: "EXCUSE ME?! WHO LET YOU TOUCH THE SECRET LOCK? 😾",

    // Message shown when he types the right code
    successMessage: "Unlocked! Welcome to our little ocean, {nickname} 💙",

    // Optional: your own angry-bear GIF. If this file exists it replaces the
    // built-in pink bear drawing. If it does not exist, the drawing is used.
    angryBearGif: "assets/angry-bear.gif"
  },

  /* ------------------------------------------------------------------
     3. MUSIC & SOUND
     ------------------------------------------------------------------ */
  music: {
    file: "assets/ocean-song.mp3",         // ✏️ Put your MP3 in the assets folder
    title: "Our Little Ocean Song 🎵",      // ✏️ Name shown in the music player
    startVolume: 0.6                       // 0 (silent) to 1 (loudest)
  },

  sound: {
    effects: true,        // true = little sound effects (keypad taps, success chime)
    keypadClicks: true    // true = soft "tap" sound when pressing keypad buttons
  },

  /* ------------------------------------------------------------------
     4. PAGE 3 — THE LOVE LETTER
     Each item in "paragraphs" is one paragraph. Add, remove or reorder
     them freely. Keep the commas!
     I did NOT invent any memories — replace the [brackets] with your own.
     ------------------------------------------------------------------ */
  loveLetter: {
    greeting: "Sleepy Head,",

    paragraphs: [
      "I wanted to write this somewhere quiet, somewhere just for you, because some feelings are too big for a quick text. So I built you a little corner of the ocean, and I hope it makes you smile as much as you make me smile.",

      "You are so special to me. Not in a loud, dramatic way, but in the steady kind of way that settles into everyday life until you can't imagine it without them. Somehow, you make ordinary moments feel soft and beautiful. A normal chat, a silly joke, a quiet evening… all of it becomes something I treasure, simply because you are part of it.",

      "[✏️ ADD A REAL MEMORY HERE. Write about a moment with him that made you realise how much he means to you. Two or three sentences in your own words is perfect.]",

      "I appreciate you more than I always manage to say out loud. I appreciate the way you [✏️ SOMETHING YOU LOVE ABOUT HOW HE TREATS YOU], the way you [✏️ ANOTHER QUALITY YOU ADMIRE], and the way you are so completely, wonderfully yourself. Thank you for being someone I can feel safe, silly and honest with.",

      "Of course, I have to admit you can also be a tiny bit annoying sometimes 😼 [✏️ ADD AN INSIDE JOKE OR A PLAYFUL TEASE HERE]. But I would choose you, annoying moments included, every single time.",

      "Your birthday is almost here and I am so excited to celebrate you. You deserve a day that feels warm, loved and full of reasons to smile. I am really glad that out of everyone in the whole wide world, our paths found each other.",

      "[✏️ OPTIONAL: WRITE WHAT THE NICKNAME 'OCEAN' MEANS TO YOU, OR WHY YOU CALL HIM THAT.]",

      "So consider this my little message in a bottle, sent across the waves: I care about you deeply, I am proud of you, and I am so happy to be on this journey with you, one wave at a time."
    ],

    closing: "Yours,",
    ps: "P.S. If you're smiling right now, I expect you to admit it. 👀💙"
  },

  /* ------------------------------------------------------------------
     5. PAGE 4 — THE QUIZ
     ------------------------------------------------------------------
     HOW TO EDIT A QUESTION:
       q        = the question
       options  = EXACTLY 4 answers, in quotes, separated by commas
       correct  = which answer is right, counting from 0:
                    0 = first answer, 1 = second, 2 = third, 3 = fourth
     Questions marked ✏️ PERSONAL are the ones that should match YOUR
     real life. I wrote funny defaults so everything works right away.
     You can add or remove questions (the score adapts automatically).
     ------------------------------------------------------------------ */
  quiz: {
    title: "How Well Do You Know Your Wife? 😼💙",
    subtitle: "Let's see if you're really the expert you claim to be!",

    questions: [
      {
        q: "Who is the cutest person in this relationship?",
        options: [
          "{nickname}… nice try 🌊",
          "Your wife, no debate 😼",
          "The dolphin sticker 🐬",
          "Whoever is holding the phone 📱"
        ],
        correct: 1
      },
      {
        // ✏️ PERSONAL: change the answers to her real favorite ways to annoy him
        q: "What is your wife's favorite way to annoy you?",
        options: [
          "Sending 47 memes in a row",
          "Stealing the last bite of your food 🍟",
          "Poking you until you react 👉",
          "Pretending she did nothing 😇"
        ],
        correct: 2
      },
      {
        // ✏️ PERSONAL: what really happens when she misses him?
        q: "What happens when your wife misses you?",
        options: [
          "She sends a random “hi” for no reason 🥺",
          "She stares at the ocean dramatically 🌊",
          "She sends you 100 stickers",
          "She pretends she's fine (she is not) 😼"
        ],
        correct: 0
      },
      {
        // ✏️ PERSONAL
        q: "Who is more likely to start a silly argument?",
        options: [
          "{nickname}, obviously",
          "Your wife, purely for entertainment 😼",
          "Both of us… then we make up 🥹",
          "The snacks 🍪"
        ],
        correct: 1
      },
      {
        // ✏️ PERSONAL
        q: "What is your wife's most dangerous superpower?",
        options: [
          "Making you smile when you're trying to be serious 💙",
          "Disappearing the moment chores appear",
          "Eating snacks without making a sound",
          "Reading your mind (and judging it) 👀"
        ],
        correct: 0
      },
      {
        q: "What is the official meaning of Ocean in this relationship?",
        options: [
          "A very large puddle with legs",
          "The person who makes her world calmer, deeper and brighter 🌊💙",
          "A snack-stealing sea creature 🦀",
          "Her personal Wi-Fi signal 📶"
        ],
        correct: 1
      },
      {
        q: "What reward does {nickname} deserve for completing this quiz?",
        options: [
          "A tiny golden trophy 🏆",
          "A giant hug 🫂",
          "A cute giggle and a kiss on the cheek 😚",
          "All of the above (obviously)"
        ],
        correct: 3
      },
      {
        q: "What is the most important rule in this little underwater love story?",
        options: [
          "Always reply to your wife's texts 📱",
          "Never go to sleep angry 🌙",
          "If she says “I'm not mad”… you are in trouble 😼",
          "The wife is always right 👑"
        ],
        correct: 3
      }
    ],

    // Result messages. The site picks the FIRST one whose minPercent is
    // reached (they are checked from highest to lowest).
    // minPercent: 100 = perfect score, 0 = anything.
    results: [
      {
        minPercent: 100,
        sticker: "🏆",
        title: "PERFECT SCORE!",
        message: "You really are the expert. Your wife is impressed, a little bit emotional, and falling for you all over again. 💙"
      },
      {
        minPercent: 75,
        sticker: "🐬",
        title: "Sooo close!",
        message: "Almost a perfect score! You clearly know your wife well. Reward: one very proud smile and a high-five. 🐬"
      },
      {
        minPercent: 50,
        sticker: "😼",
        title: "Hmm… suspicious.",
        message: "Not bad, but your wife has questions. Your punishment: a forehead kiss and a surprise pop quiz later. 😼"
      },
      {
        minPercent: 0,
        sticker: "😭",
        title: "WHO ARE YOU?!",
        message: "Wow. Be honest, did you even read the questions? 😭 Punishment: three compliments and one snack, delivered immediately. 🍫"
      }
    ]
  },

  /* ------------------------------------------------------------------
     6. PAGE 5 — PHOTO PUZZLE & SECRET ALBUM
     ------------------------------------------------------------------
     Put your photos in the "assets" folder, then type their file names.
     If a file is missing, a friendly placeholder picture is shown instead.
     Tip: a SQUARE photo (e.g. 1000×1000 pixels) makes the best puzzle.
     ------------------------------------------------------------------ */
  puzzle: {
    image: "assets/puzzle-photo.jpg"      // ✏️ the photo he has to put together
  },

  album: [
    {
      image: "assets/album-photo-1.jpg",  // ✏️ photo 1
      caption: "A little piece of my happiness",
      note: "Some moments feel like home, even when they're tiny. 💙",
      sticker: "🐬"
    },
    {
      image: "assets/album-photo-2.jpg",  // ✏️ photo 2
      caption: "My favorite kind of chaos",
      note: "Loud, silly, perfectly us. I wouldn't change it. 😼",
      sticker: "🦭"
    },
    {
      image: "assets/album-photo-3.jpg",  // ✏️ photo 3
      caption: "You, me, and our little universe",
      note: "A whole world of our own, made of small happy things. ✨",
      sticker: "🐚"
    }
  ],

  /* ------------------------------------------------------------------
     7. PAGE 6 — THE ROYAL BIRTHDAY SURPRISE
     ------------------------------------------------------------------ */
  birthday: {
    heading: "To My Favorite {nickname}, Happy Birthday! 🌊💙",

    paragraphs: [
      "Happy Birthday, my {nickname}! Today the whole sea is celebrating you. The waves are sparkling, the stars are out, and even the dolphins are doing extra flips in your honour.",

      "I hope this new year brings you happiness that stays, peaceful days that let you breathe, and lots of small reasons to smile when you least expect it. May your dreams come a little closer with every sunrise, and may all the effort you put in be rewarded with success you can feel proud of.",

      "I hope you are surrounded by people who care about you, that you rest well, laugh often, and always feel how valued you are.",

      "[✏️ ADD A PERSONAL BIRTHDAY WISH HERE. Something only you would say to him.]",

      "Thank you for being you. I am really happy to be the one celebrating you today."
    ],

    // This line is shown at the very end of the letter (exact wording requested).
    finalLine: "Hope u love this and u better pay me back with a cute giggle! 😼💙",

    signoff: "Made with love, just for you. 💌",

    // Shown when he presses the "reveal" button at the very end
    secret: {
      buttonText: "Reveal my final secret 🎁",
      title: "One more little thing…",
      text: "Out of every wave, every star and every tiny moment, you are one of my favorite things in this whole world. Happy Birthday, {nickname}. 💙"
    }
  }
};
