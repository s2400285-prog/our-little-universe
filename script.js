/* Our Little Universe — vanilla JavaScript, no dependencies.
 * CUSTOMIZE: edit the 100 objects below, DEFAULT_LETTER, DEFAULT_INTRO,
 * DEFAULT_STORY and SECRET_MESSAGES. Saved browser edits take precedence.
 * Images: images/memory-01.jpg ... images/memory-99.jpg, images/memory-100.jpg.
 * Optional music: music/our-song.mp3. Nothing plays automatically.
 */
"use strict";
const memories = [
  {
    "id": 1,
    "title": "Our First Picture",
    "caption": "One of my favorite moments with you.",
    "date": "",
    "image": "images/memory-01.jpg"
  },
  {
    "id": 2,
    "title": "My Favorite Person",
    "caption": "Every little moment with you matters.",
    "date": "",
    "image": "images/memory-02.jpg"
  },
  {
    "id": 3,
    "title": "Little Adventures",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-03.jpg"
  },
  {
    "id": 4,
    "title": "Random Candid Moments",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-04.jpg"
  },
  {
    "id": 5,
    "title": "Our Happy Place",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-05.jpg"
  },
  {
    "id": 6,
    "title": "Ordinary Days, Special Memories",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-06.jpg"
  },
  {
    "id": 7,
    "title": "The Day We Couldn’t Stop Laughing",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-07.jpg"
  },
  {
    "id": 8,
    "title": "My Favorite Smile",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-08.jpg"
  },
  {
    "id": 9,
    "title": "Us Being Us",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-09.jpg"
  },
  {
    "id": 10,
    "title": "Forever in My Favorite Memories",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-10.jpg"
  },
  {
    "id": 11,
    "title": "A Walk With You",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-11.jpg"
  },
  {
    "id": 12,
    "title": "Coffee and Conversations",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-12.jpg"
  },
  {
    "id": 13,
    "title": "Just One More Picture",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-13.jpg"
  },
  {
    "id": 14,
    "title": "A Sky Worth Sharing",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-14.jpg"
  },
  {
    "id": 15,
    "title": "Our Kind of Weekend",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-15.jpg"
  },
  {
    "id": 16,
    "title": "A Little Bit of Sunshine",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-16.jpg"
  },
  {
    "id": 17,
    "title": "The Sweetest Hello",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-17.jpg"
  },
  {
    "id": 18,
    "title": "You Make It Better",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-18.jpg"
  },
  {
    "id": 19,
    "title": "Caught in the Moment",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-19.jpg"
  },
  {
    "id": 20,
    "title": "A Day to Remember",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-20.jpg"
  },
  {
    "id": 21,
    "title": "Side by Side",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-21.jpg"
  },
  {
    "id": 22,
    "title": "Our Favorite Corner",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-22.jpg"
  },
  {
    "id": 23,
    "title": "The Scenic Route",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-23.jpg"
  },
  {
    "id": 24,
    "title": "A Very Happy Us",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-24.jpg"
  },
  {
    "id": 25,
    "title": "Small Things, Big Feelings",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-25.jpg"
  },
  {
    "id": 26,
    "title": "Golden Hour Together",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-26.jpg"
  },
  {
    "id": 27,
    "title": "Rainy Day Magic",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-27.jpg"
  },
  {
    "id": 28,
    "title": "A Little Celebration",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-28.jpg"
  },
  {
    "id": 29,
    "title": "Somewhere With You",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-29.jpg"
  },
  {
    "id": 30,
    "title": "One for the Scrapbook",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-30.jpg"
  },
  {
    "id": 31,
    "title": "Our Little Moment 31",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-31.jpg"
  },
  {
    "id": 32,
    "title": "Our Little Moment 32",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-32.jpg"
  },
  {
    "id": 33,
    "title": "Our Little Moment 33",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-33.jpg"
  },
  {
    "id": 34,
    "title": "Our Little Moment 34",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-34.jpg"
  },
  {
    "id": 35,
    "title": "Our Little Moment 35",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-35.jpg"
  },
  {
    "id": 36,
    "title": "Our Little Moment 36",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-36.jpg"
  },
  {
    "id": 37,
    "title": "Our Little Moment 37",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-37.jpg"
  },
  {
    "id": 38,
    "title": "Our Little Moment 38",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-38.jpg"
  },
  {
    "id": 39,
    "title": "Our Little Moment 39",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-39.jpg"
  },
  {
    "id": 40,
    "title": "Our Little Moment 40",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-40.jpg"
  },
  {
    "id": 41,
    "title": "Our Little Moment 41",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-41.jpg"
  },
  {
    "id": 42,
    "title": "Our Little Moment 42",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-42.jpg"
  },
  {
    "id": 43,
    "title": "Our Little Moment 43",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-43.jpg"
  },
  {
    "id": 44,
    "title": "Our Little Moment 44",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-44.jpg"
  },
  {
    "id": 45,
    "title": "Our Little Moment 45",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-45.jpg"
  },
  {
    "id": 46,
    "title": "Our Little Moment 46",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-46.jpg"
  },
  {
    "id": 47,
    "title": "Our Little Moment 47",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-47.jpg"
  },
  {
    "id": 48,
    "title": "Our Little Moment 48",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-48.jpg"
  },
  {
    "id": 49,
    "title": "Our Little Moment 49",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-49.jpg"
  },
  {
    "id": 50,
    "title": "Our Little Moment 50",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-50.jpg"
  },
  {
    "id": 51,
    "title": "Our Little Moment 51",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-51.jpg"
  },
  {
    "id": 52,
    "title": "Our Little Moment 52",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-52.jpg"
  },
  {
    "id": 53,
    "title": "Our Little Moment 53",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-53.jpg"
  },
  {
    "id": 54,
    "title": "Our Little Moment 54",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-54.jpg"
  },
  {
    "id": 55,
    "title": "Our Little Moment 55",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-55.jpg"
  },
  {
    "id": 56,
    "title": "Our Little Moment 56",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-56.jpg"
  },
  {
    "id": 57,
    "title": "Our Little Moment 57",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-57.jpg"
  },
  {
    "id": 58,
    "title": "Our Little Moment 58",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-58.jpg"
  },
  {
    "id": 59,
    "title": "Our Little Moment 59",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-59.jpg"
  },
  {
    "id": 60,
    "title": "Our Little Moment 60",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-60.jpg"
  },
  {
    "id": 61,
    "title": "Our Little Moment 61",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-61.jpg"
  },
  {
    "id": 62,
    "title": "Our Little Moment 62",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-62.jpg"
  },
  {
    "id": 63,
    "title": "Our Little Moment 63",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-63.jpg"
  },
  {
    "id": 64,
    "title": "Our Little Moment 64",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-64.jpg"
  },
  {
    "id": 65,
    "title": "Our Little Moment 65",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-65.jpg"
  },
  {
    "id": 66,
    "title": "Our Little Moment 66",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-66.jpg"
  },
  {
    "id": 67,
    "title": "Our Little Moment 67",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-67.jpg"
  },
  {
    "id": 68,
    "title": "Our Little Moment 68",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-68.jpg"
  },
  {
    "id": 69,
    "title": "Our Little Moment 69",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-69.jpg"
  },
  {
    "id": 70,
    "title": "Our Little Moment 70",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-70.jpg"
  },
  {
    "id": 71,
    "title": "Our Little Moment 71",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-71.jpg"
  },
  {
    "id": 72,
    "title": "Our Little Moment 72",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-72.jpg"
  },
  {
    "id": 73,
    "title": "Our Little Moment 73",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-73.jpg"
  },
  {
    "id": 74,
    "title": "Our Little Moment 74",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-74.jpg"
  },
  {
    "id": 75,
    "title": "Our Little Moment 75",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-75.jpg"
  },
  {
    "id": 76,
    "title": "Our Little Moment 76",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-76.jpg"
  },
  {
    "id": 77,
    "title": "Our Little Moment 77",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-77.jpg"
  },
  {
    "id": 78,
    "title": "Our Little Moment 78",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-78.jpg"
  },
  {
    "id": 79,
    "title": "Our Little Moment 79",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-79.jpg"
  },
  {
    "id": 80,
    "title": "Our Little Moment 80",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-80.jpg"
  },
  {
    "id": 81,
    "title": "Our Little Moment 81",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-81.jpg"
  },
  {
    "id": 82,
    "title": "Our Little Moment 82",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-82.jpg"
  },
  {
    "id": 83,
    "title": "Our Little Moment 83",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-83.jpg"
  },
  {
    "id": 84,
    "title": "Our Little Moment 84",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-84.jpg"
  },
  {
    "id": 85,
    "title": "Our Little Moment 85",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-85.jpg"
  },
  {
    "id": 86,
    "title": "Our Little Moment 86",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-86.jpg"
  },
  {
    "id": 87,
    "title": "Our Little Moment 87",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-87.jpg"
  },
  {
    "id": 88,
    "title": "Our Little Moment 88",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-88.jpg"
  },
  {
    "id": 89,
    "title": "Our Little Moment 89",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-89.jpg"
  },
  {
    "id": 90,
    "title": "Our Little Moment 90",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-90.jpg"
  },
  {
    "id": 91,
    "title": "Our Little Moment 91",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-91.jpg"
  },
  {
    "id": 92,
    "title": "Our Little Moment 92",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-92.jpg"
  },
  {
    "id": 93,
    "title": "Our Little Moment 93",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-93.jpg"
  },
  {
    "id": 94,
    "title": "Our Little Moment 94",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-94.jpg"
  },
  {
    "id": 95,
    "title": "Our Little Moment 95",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-95.jpg"
  },
  {
    "id": 96,
    "title": "Our Little Moment 96",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-96.jpg"
  },
  {
    "id": 97,
    "title": "Our Little Moment 97",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-97.jpg"
  },
  {
    "id": 98,
    "title": "Our Little Moment 98",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-98.jpg"
  },
  {
    "id": 99,
    "title": "Our Little Moment 99",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-99.jpg"
  },
  {
    "id": 100,
    "title": "Our Little Moment 100",
    "caption": "A little space for a memory we’ll always want to keep.",
    "date": "",
    "image": "images/memory-100.jpg"
  }
];

const DEFAULT_LETTER = "My baby Julie, this little corner of the internet is for us. Every picture holds a moment, every moment holds a memory, and every memory reminds me how special it is to have you in my life. Even the simplest days become meaningful when I get to share them with you. I made this little universe so we can keep our favorite memories in one place and look back at them whenever we want. Always in all ways. 💗";
const DEFAULT_INTRO = "For the big adventures and the beautifully ordinary days. Here’s to keeping every little piece of our story, together.";
const DEFAULT_STORY = [
  {title:"The day we met",date:"",description:"Every beautiful story begins somewhere. Add the moment ours began.",memoryId:1},
  {title:"Our first conversation",date:"",description:"A simple hello, and a whole new chapter. What did we talk about?",memoryId:2},
  {title:"Our first picture together",date:"",description:"The first little piece of us, frozen in time. Add our story here.",memoryId:3},
  {title:"Our favorite dates",date:"",description:"Good food, long walks, and you. Write about a date we loved.",memoryId:4},
  {title:"Special celebrations",date:"",description:"A birthday, an anniversary, or a tiny victory. Save it here.",memoryId:5},
  {title:"Little adventures",date:"",description:"Near or far, it’s always better together. Where did we go?",memoryId:6},
  {title:"You made me smile",date:"",description:"Sometimes the smallest moments mean the most. Tell this one.",memoryId:7}
];
const SECRET_MESSAGES = ["Julie, if I could choose my favorite place in the whole universe, it would still be right next to you. 💗", "A little secret: you’re my favorite part of even the most ordinary day. ♡", "One hundred little spaces will never be enough for all the things I love about you. ✨"];
const STORAGE_KEY = "our-little-universe-v1";
const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const clone = (value) => JSON.parse(JSON.stringify(value));
const defaultMemories = clone(memories);
const defaultSettings = {theme:0,background:0,dark:false,letter:DEFAULT_LETTER,intro:DEFAULT_INTRO,startDate:"",showDays:true};
let settings = {...defaultSettings};
let story = clone(DEFAULT_STORY);
let favorites = new Set();
let allMemories = clone(memories);
let filter = "all", visibleLimit = 12, activeId = 1, navigationIds = [], editingId = null;
let db = null, ready = false, toastTimer, previewURL = null, musicURL = null, selectedFile = null;
let storageAvailable = true;
const photoURLs = new Map();
const photoStatus = new Map();
const themeNames = ["Rose Garden", "Lavender Dreams", "Peach Sunset", "Blue Skies"];
const themeKeys = ["rose", "lavender", "peach", "blue"];
const backgroundNames = ["Dreamy gradients", "Little dotted pages", "Notebook daydream"];

function notify(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 5000);
}
function validDate(value) {
  if (!value) return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value < "1900-01-01") return false;
  const date = new Date(value + "T12:00:00Z");
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0,10) === value;
}
function todayISO() {
  const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function dateLabel(value) {
  if (!value || !validDate(value)) return "";
  return new Date(value + "T12:00:00").toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"});
}
function safeImagePath(value) {
  return typeof value === "string" && /^images\/[a-zA-Z0-9_./ -]+\.(jpg|jpeg|png|webp|gif)$/i.test(value) && !value.includes("..") ? value : "";
}
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return;
    if (saved.settings && typeof saved.settings === "object") {
      const s = saved.settings;
      for (const key of ["letter","intro"]) if(typeof s[key] === "string" && s[key].trim()) settings[key] = s[key].slice(0,key === "letter" ? 12000 : 500);
      settings.theme = Number.isInteger(s.theme) && s.theme >= 0 && s.theme < 4 ? s.theme : 0;
      settings.background = Number.isInteger(s.background) && s.background >= 0 && s.background < 3 ? s.background : 0;
      settings.dark = s.dark === true;
      settings.startDate = typeof s.startDate === "string" && validDate(s.startDate) && s.startDate <= todayISO() ? s.startDate : "";
      settings.showDays = s.showDays !== false;
    }
    if (Array.isArray(saved.memories)) {
      const accepted = new Map();
      saved.memories.forEach(m => {
        if (!m || !Number.isSafeInteger(m.id) || m.id < 1 || typeof m.title !== "string" || !m.title.trim()) return;
        accepted.set(m.id, {id:m.id,title:m.title.slice(0,90),caption:typeof m.caption === "string" ? m.caption.slice(0,1000):"",date:typeof m.date === "string" && validDate(m.date)?m.date:"",image:safeImagePath(m.image),uploaded:m.uploaded===true});
      });
      allMemories = defaultMemories.map(m => accepted.get(m.id) || {...m});
      [...accepted.values()].filter(m=>m.id>100).sort((a,b)=>a.id-b.id).forEach(m=>allMemories.push(m));
    }
    if (Array.isArray(saved.favorites)) favorites = new Set(saved.favorites.filter(id => allMemories.some(m=>m.id===id)));
    if (Array.isArray(saved.story)) story = DEFAULT_STORY.map((item,i)=>{
      const savedItem=saved.story[i];
      if(!savedItem || typeof savedItem.title!=="string" || !savedItem.title.trim()) return {...item};
      return {...item,title:savedItem.title.slice(0,90),description:typeof savedItem.description==="string"?savedItem.description.slice(0,1000):item.description,date:typeof savedItem.date==="string"&&validDate(savedItem.date)?savedItem.date:""};
    });
  } catch { storageAvailable=false; }
}
function persist() {
  try { localStorage.setItem(STORAGE_KEY,JSON.stringify({settings,memories:allMemories,favorites:[...favorites],story}));storageAvailable=true; return true; }
  catch {storageAvailable=false;notify("Browser storage is unavailable or full. These text changes may be lost after refresh.");return false;}
}
function openPhotoDB() {
  return new Promise((resolve,reject)=>{
    if (!window.indexedDB) {reject(new Error("IndexedDB is unavailable"));return;}
    let request; try {request=indexedDB.open("julies-little-universe-photos",1);} catch(e){reject(e);return;}
    const timeout=setTimeout(()=>reject(new Error("Photo storage did not open")),6000);
    request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains("photos"))request.result.createObjectStore("photos");};
    request.onsuccess=()=>{clearTimeout(timeout);resolve(request.result);};
    request.onerror=()=>{clearTimeout(timeout);reject(request.error);};
    request.onblocked=()=>{clearTimeout(timeout);reject(new Error("Photo storage is blocked"));};
  });
}
function photoTransaction(mode, operation) {
  return new Promise((resolve,reject)=>{
    if (!db) {reject(new Error("Photo storage is unavailable"));return;}
    try {
      const tx=db.transaction("photos",mode), store=tx.objectStore("photos");
      const request=operation(store);let result;
      if(request)request.onsuccess=()=>{result=request.result;};
      tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error("Photo save cancelled"));
    } catch(error){reject(error);}
  });
}
async function restorePhotos() {
  try {db=await openPhotoDB();db.onversionchange=()=>{db.close();db=null;};
    await Promise.all(allMemories.filter(m=>m.uploaded).map(async m=>{
      const blob=await photoTransaction("readonly",s=>s.get(m.id));
      if(blob instanceof Blob)photoURLs.set(m.id,URL.createObjectURL(blob));
    }));
    if(allMemories.some(m=>m.uploaded&&!photoURLs.has(m.id)))notify("Some browser photos are missing. Select them again using Edit Memory.");
  } catch {db=null;notify("Photo storage is unavailable. Selected photos will last only until this page closes.");}
}
function sourceFor(m){return photoURLs.get(m.id)||m.image||"";}
function updateCounters(){
  $("#space-count").textContent="100";
  const photoCount=allMemories.filter(m=>photoURLs.has(m.id)||photoStatus.get(m.id)?.ok).length;
  $("#photo-count").textContent=photoCount;
  $("#favorite-count").textContent=favorites.size;
  $("#all-count").textContent=allMemories.length;
}
function makePhoto(m){
  const box=document.createElement("div");box.className=`memory-photo color-${(m.id-1)%6}`;
  const heart=document.createElement("span");heart.className="placeholder-heart";heart.textContent=m.id%5===0?"✿":"♡";heart.setAttribute("aria-hidden","true");
  const label=document.createElement("span");label.className="placeholder-label";label.textContent=`A little memory ${String(m.id).padStart(2,"0")}`;
  const badge=document.createElement("span");badge.className="photo-number";badge.textContent=String(m.id).padStart(3,"0");
  box.append(heart,label,badge);
  const src=sourceFor(m), cached=photoStatus.get(m.id);
  if(src && !(cached?.src===src && cached.ok===false)) {
    const img=new Image();img.alt=m.title;img.decoding="async";
    img.addEventListener("load",()=>{
      if(sourceFor(allMemories.find(x=>x.id===m.id)||{})!==src)return;
      const wasGood=photoStatus.get(m.id)?.ok;photoStatus.set(m.id,{src,ok:true});updateCounters();
      if(!wasGood){if(m.id===1)renderHeroPhoto();if(m.id<=7)renderTimeline();}
    },{once:true});
    img.addEventListener("error",()=>{img.remove();if(sourceFor(allMemories.find(x=>x.id===m.id)||{})===src){photoStatus.set(m.id,{src,ok:false});updateCounters();}},{once:true});
    img.src=src;box.append(img);
  }
  return box;
}
function filteredMemories(){
  const query=$("#search").value.toLocaleLowerCase().trim();
  const result=allMemories.filter(m=>(filter!=="favorites"||favorites.has(m.id))&&(!query||(m.title+" "+m.caption).toLocaleLowerCase().includes(query)));
  const sort=$("#sort").value;
  result.sort((a,b)=>{
    if(sort==="default")return a.id-b.id;
    if(!a.date&&!b.date)return a.id-b.id;
    if(!a.date)return 1;if(!b.date)return -1;
    return (sort==="newest"?b.date.localeCompare(a.date):a.date.localeCompare(b.date)) || a.id-b.id;
  });
  return result;
}
function renderGallery(){
  const list=filteredMemories(), fragment=document.createDocumentFragment();
  list.forEach((m,index)=>{
    const card=document.createElement("article");card.className="memory-card";card.dataset.id=m.id;card.hidden=index>=visibleLimit;
    const open=document.createElement("button");open.className="card-open";open.setAttribute("aria-label",`Open memory ${m.id}: ${m.title}`);
    open.append(makePhoto(m));
    const title=document.createElement("h3");title.className="card-title";title.textContent=m.title;
    const caption=document.createElement("p");caption.className="card-caption";caption.textContent=m.caption||"A new little story is waiting here.";
    const date=document.createElement("time");date.className="card-date";date.textContent=m.date?dateLabel(m.date):"a moment worth keeping";if(m.date)date.dateTime=m.date;
    open.append(title,caption,date);open.addEventListener("click",()=>openMemory(m.id));
    const favorite=document.createElement("button");favorite.className="card-heart";favorite.textContent=favorites.has(m.id)?"♥":"♡";
    favorite.setAttribute("aria-label",`${favorites.has(m.id)?"Unfavorite":"Favorite"} memory ${m.id}: ${m.title}`);favorite.setAttribute("aria-pressed",favorites.has(m.id));
    favorite.addEventListener("click",()=>{toggleFavorite(m.id);const replacement=$(`#gallery .memory-card[data-id="${m.id}"] .card-heart`);(replacement||$("#view-favorites")).focus({preventScroll:true});});
    card.append(open,favorite);
    if(index%4===0){const sticker=document.createElement("span");sticker.className="card-sticker";sticker.textContent=index%8===0?"✦":"✿";sticker.setAttribute("aria-hidden","true");card.append(sticker);}
    fragment.append(card);
  });
  $("#gallery").replaceChildren(fragment);
  $("#empty-state").hidden=list.length>0;
  $("#show-more").hidden=list.length<=visibleLimit;
  $("#show-more").textContent=`Unfold more memories (${Math.min(12,Math.max(0,list.length-visibleLimit))}) ↓`;
  $("#gallery-summary").textContent=`${list.length} ${filter==="favorites"?"favorite ":""}${list.length===1?"memory":"memories"} · showing ${Math.min(visibleLimit,list.length)}${allMemories.length>100?` · ${allMemories.length-100} extra ${allMemories.length===101?"chapter":"chapters"}`:""}`;
  for(const selector of ["#previous-memory","#next-memory","#random-memory"])$(selector).disabled=!list.length;
  $("#view-all").classList.toggle("selected",filter==="all");$("#view-all").setAttribute("aria-pressed",filter==="all");
  $("#view-favorites").classList.toggle("selected",filter==="favorites");$("#view-favorites").setAttribute("aria-pressed",filter==="favorites");
  updateCounters();
}
function setFilter(value){filter=value;visibleLimit=12;renderGallery();}
function toggleFavorite(id){
  if(favorites.has(id)){favorites.delete(id);notify("Removed from your extra-special favorites.");}else{favorites.add(id);notify("A little favorite, saved with love. ♡");}
  persist();renderGallery();if($("#lightbox").open)updateLightboxFavorite();
}
function openDialog(id){
  document.querySelectorAll("dialog[open]").forEach(d=>d.close());
  $("#"+id).showModal();
}
function utility(title,content){
  $("#utility-content").innerHTML=`<p class="eyebrow">OUR LITTLE UNIVERSE</p><h2 id="utility-title">${escapeHTML(title)}</h2>${content}`;
  openDialog("utility-dialog");
}
function openMemory(id,preserveNavigation=false){
  const m=allMemories.find(item=>item.id===id);if(!m)return;
  activeId=id;
  if(!preserveNavigation){navigationIds=filteredMemories().map(x=>x.id);if(!navigationIds.includes(id))navigationIds=allMemories.map(x=>x.id);}
  $("#lightbox-photo").replaceChildren(makePhoto(m));
  $("#lightbox-title").textContent=m.title;$("#lightbox-caption").textContent=m.caption||"A little space for our next favorite memory.";
  $("#lightbox-number").textContent=`OUR LITTLE MEMORY / ${String(id).padStart(3,"0")}`;
  $("#lightbox-date").textContent=dateLabel(m.date);$("#lightbox-date").dateTime=m.date;
  $("#lightbox-position").textContent=`${Math.max(1,navigationIds.indexOf(id)+1)} / ${navigationIds.length}`;
  $("#delete-memory").textContent=id<=100?"Clear this memory":"Delete memory";
  updateLightboxFavorite();
  $("#lightbox-prev").disabled=navigationIds.length<2;$("#lightbox-next").disabled=navigationIds.length<2;
  if(!$("#lightbox").open)openDialog("lightbox");
}
function updateLightboxFavorite(){const yes=favorites.has(activeId);$("#lightbox-favorite").textContent=yes?"♥ Favorited":"♡ Favorite";$("#lightbox-favorite").setAttribute("aria-pressed",yes);}
function navigateMemory(direction){
  if(!$("#lightbox").open)navigationIds=filteredMemories().map(m=>m.id);
  navigationIds=navigationIds.filter(id=>allMemories.some(m=>m.id===id));
  if(!navigationIds.length){notify("No memories match this view yet.");return;}
  const current=navigationIds.indexOf(activeId), next=current===-1?(direction>0?0:navigationIds.length-1):(current+direction+navigationIds.length)%navigationIds.length;
  openMemory(navigationIds[next],true);
}
function randomMemory(){const list=filteredMemories();if(!list.length){notify("There are no memories in this view yet.");return;}openMemory(list[Math.floor(Math.random()*list.length)].id);}
function renderHeroPhoto(){
  const container=$("#hero-photo-area");container.querySelectorAll("img").forEach(img=>img.remove());
  const m=allMemories.find(m=>m.id===1);if(!m)return;
  const src=sourceFor(m);if(!src||(!photoURLs.has(1)&&!photoStatus.get(1)?.ok))return;
  const img=new Image();img.alt=m.title;img.addEventListener("error",()=>img.remove(),{once:true});img.src=src;container.append(img);
}
function renderTimeline(){
  const fragment=document.createDocumentFragment();
  story.forEach((entry,index)=>{
    const item=document.createElement("article");item.className="timeline-entry";
    const thumb=document.createElement("div");thumb.className="timeline-thumb";thumb.textContent=["♡","✉","▧","☼","✦","❀","☺"][index];thumb.setAttribute("aria-hidden","true");
    const memory=allMemories.find(m=>m.id===entry.memoryId);
    if(memory&&(photoURLs.has(memory.id)||photoStatus.get(memory.id)?.ok)){
      const img=new Image();img.alt="";img.addEventListener("error",()=>img.remove(),{once:true});img.src=sourceFor(memory);thumb.replaceChildren(img);
    }
    const text=document.createElement("div");text.className="timeline-text";
    text.innerHTML=`<span class="timeline-date">${escapeHTML(dateLabel(entry.date)||"a date to remember")}</span><h3>${escapeHTML(entry.title)}</h3><p>${escapeHTML(entry.description)}</p>`;
    const edit=document.createElement("button");edit.className="text-button timeline-edit";edit.textContent="Write this chapter ✎";edit.setAttribute("aria-label",`Edit ${entry.title}`);edit.addEventListener("click",()=>editTimeline(index));text.append(edit);item.append(thumb,text);fragment.append(item);
  });
  $("#timeline").replaceChildren(fragment);
}
function editTimeline(index){
  const entry=story[index];
  utility("Write our little story",`<form id="story-form"><label>Milestone title<input name="title" maxlength="90" required value="${escapeHTML(entry.title)}"></label><label>Date (optional)<input name="date" type="date" min="1900-01-01" max="9999-12-31" value="${escapeHTML(entry.date)}"></label><label>Our story<textarea name="description" rows="4" maxlength="1000">${escapeHTML(entry.description)}</textarea></label><p class="form-note">The thumbnail uses memory ${entry.memoryId}. Add its photo in the gallery.</p><div class="form-actions"><button class="button soft" type="button" id="cancel-story">Cancel</button><button class="button primary" type="submit">Save our chapter ♡</button></div></form>`);
  $("#cancel-story").addEventListener("click",()=>$("#utility-dialog").close());
  $("#story-form").addEventListener("submit",event=>{
    event.preventDefault();const form=event.currentTarget,title=form.elements.title.value.trim(),date=form.elements.date.value;
    if(!title||!validDate(date)){notify("Please add a title and a valid date.");return;}
    story[index]={...entry,title,date,description:form.elements.description.value.trim()};const saved=persist();renderTimeline();$("#utility-dialog").close();if(saved)notify("Another little chapter, saved. ♡");
  });
}
function renderSettings(){
  document.body.dataset.theme=themeKeys[settings.theme];document.body.dataset.background=settings.background;document.body.dataset.dark=settings.dark;
  $("#dark-toggle").textContent=settings.dark?"☼":"☾";$("#dark-toggle").setAttribute("aria-pressed",settings.dark);$("#dark-toggle").setAttribute("aria-label",settings.dark?"Switch to light romantic theme":"Switch to darker romantic theme");
  $("#hero-message").textContent=settings.intro;$("#letter-preview").textContent=settings.letter;
  updateDays();
}
function updateDays(){
  if(settings.startDate&&settings.showDays){
    const today=todayISO(),days=Math.floor((Date.parse(today+"T00:00:00Z")-Date.parse(settings.startDate+"T00:00:00Z"))/86400000);
    $("#days-count").textContent=`${Math.max(0,days).toLocaleString()} days`;
    $("#days-label").textContent="together, and counting ♡";
  }else{$("#days-count").textContent="Our beginning";$("#days-label").textContent=settings.startDate?"our date is tucked away ♡":"add the day our story started ↗";}
}
function readLetter(){utility("For My Baby Julie 💌",`<p class="utility-message">${escapeHTML(settings.letter)}</p><p class="handwritten letter-signature">Always in all ways, yours. ♡</p><button class="button soft" id="modal-edit-letter">Edit Letter ✎</button>`);$("#modal-edit-letter").addEventListener("click",editLetter);}
function editLetter(){
  utility("A little love, in your words",`<form id="letter-form"><label>Welcome message<textarea name="intro" rows="3" maxlength="500" required>${escapeHTML(settings.intro)}</textarea></label><label>Your letter for Julie<textarea name="letter" rows="9" maxlength="12000" required>${escapeHTML(settings.letter)}</textarea></label><div class="form-actions"><button type="button" class="button soft" id="cancel-letter">Cancel</button><button type="submit" class="button primary">Save Letter 💌</button></div></form>`);
  $("#cancel-letter").addEventListener("click",()=>$("#utility-dialog").close());
  $("#letter-form").addEventListener("submit",event=>{event.preventDefault();const form=event.currentTarget,intro=form.elements.intro.value.trim(),letter=form.elements.letter.value.trim();if(!intro||!letter){notify("Please add a welcome message and a letter.");return;}settings.intro=intro;settings.letter=letter;const saved=persist();renderSettings();$("#utility-dialog").close();if(saved)notify("Your words are safe in our little universe. 💌");});
}
function editRelationship(){
  utility("The day our story started",`<form id="relationship-form"><label>Relationship start date<input name="date" type="date" min="1900-01-01" max="${todayISO()}" value="${escapeHTML(settings.startDate)}"></label><label class="check-label"><input name="show" type="checkbox" ${settings.showDays?"checked":""}> Show our days together</label><p class="form-note">Leave the date empty to keep it a little mystery. The day you started is day 0.</p><div class="form-actions"><button class="button soft" type="button" id="cancel-relationship">Cancel</button><button class="button primary" type="submit">Save our beginning ♡</button></div></form>`);
  $("#cancel-relationship").addEventListener("click",()=>$("#utility-dialog").close());
  $("#relationship-form").addEventListener("submit",e=>{e.preventDefault();const date=e.currentTarget.elements.date.value;if(!validDate(date)||date>todayISO()){notify("Choose a real date on or before today.");return;}settings.startDate=date;settings.showDays=e.currentTarget.elements.show.checked;const saved=persist();updateDays();$("#utility-dialog").close();if(saved)notify("Our beginning, remembered. ♡");});
}
function showSecret(){utility("Psst… just between us",`<p class="secret-heart">♡</p><p class="utility-message">${escapeHTML(SECRET_MESSAGES[Math.floor(Math.random()*SECRET_MESSAGES.length)])}</p>`);}
function resetPreview(){if(previewURL){URL.revokeObjectURL(previewURL);previewURL=null;}$("#upload-preview").replaceChildren();$("#upload-preview").hidden=true;selectedFile=null;}
function showUploadPreview(src){const img=new Image();img.alt="Selected memory photo preview";img.src=src;$("#upload-preview").replaceChildren(img);$("#upload-preview").hidden=false;}
function editMemory(id=null){
  if(!ready){notify("Our little universe is still opening. Try again in a moment.");return;}
  editingId=id;const m=id===null?null:allMemories.find(m=>m.id===id);if(id!==null&&!m)return;
  $("#memory-form").reset();resetPreview();$("#memory-error").textContent="";$("#editor-title").textContent=m?`Edit Memory ${String(id).padStart(2,"0")}`:"Add a Memory";
  $("#memory-title").value=m?.title||"";$("#memory-caption").value=m?.caption||"";$("#memory-date").value=m?.date||"";
  $("#remove-photo").closest("label").hidden=!m;$("#save-memory").disabled=false;
  if(m&&(photoURLs.has(id)||photoStatus.get(id)?.ok))showUploadPreview(sourceFor(m));
  openDialog("editor-dialog");
}
async function validatePhoto(file){
  if(!file)return null;
  if(!["image/jpeg","image/png","image/webp","image/gif"].includes(file.type))throw new Error("Please choose a JPG, PNG, WebP, or GIF photo.");
  if(file.size>15*1024*1024)throw new Error("Please choose a photo smaller than 15 MB.");
  const url=URL.createObjectURL(file);
  try {await new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>img.naturalWidth>0?resolve():reject(new Error("This image could not be read."));img.onerror=()=>reject(new Error("This image could not be read. Try a different photo."));img.src=url;});}
  finally {URL.revokeObjectURL(url);}
  return file;
}
async function saveMemory(event){
  event.preventDefault();const title=$("#memory-title").value.trim(),caption=$("#memory-caption").value.trim(),date=$("#memory-date").value;
  const error=$("#memory-error");error.textContent="";
  if(!title||title.length>90){error.textContent="Give this memory a title (up to 90 characters).";return;}
  if(!validDate(date)){error.textContent="Please use a valid date or leave it empty.";return;}
  const button=$("#save-memory");button.disabled=true;button.textContent="Saving a little moment…";
  const id=editingId===null?Math.max(100,...allMemories.map(m=>m.id))+1:editingId;
  const existing=allMemories.find(m=>m.id===id);
  const m={...(existing||{id,image:"",uploaded:false}),title,caption,date};
  let photoSaved=true;
  try {
    const file=$("#memory-file").files[0];
    if(file){
      await validatePhoto(file);
      if(db){try{await photoTransaction("readwrite",s=>s.put(file,id));m.uploaded=true;}catch{m.uploaded=false;photoSaved=false;}}
      else{m.uploaded=false;photoSaved=false;}
      if(photoURLs.has(id))URL.revokeObjectURL(photoURLs.get(id));photoURLs.set(id,URL.createObjectURL(file));m.image="";photoStatus.delete(id);
    }else if($("#remove-photo").checked){
      if(db)await photoTransaction("readwrite",s=>s.delete(id));
      if(photoURLs.has(id))URL.revokeObjectURL(photoURLs.get(id));photoURLs.delete(id);photoStatus.delete(id);m.image="";m.uploaded=false;
    }
    const index=allMemories.findIndex(x=>x.id===id);if(index>=0)allMemories[index]=m;else allMemories.push(m);
    const saved=persist();renderGallery();renderTimeline();renderHeroPhoto();resetPreview();$("#editor-dialog").close();openMemory(id);
    if(!photoSaved)notify("Memory updated. This photo is temporary; select it again after refresh (browser photo storage is unavailable or full).");
    else if(saved)notify("A little memory, safely tucked away. ♡");
  } catch(e){error.textContent=e.message||"We couldn’t save this memory. Please try again.";}
  finally{button.disabled=false;button.textContent="Save Memory ♡";}
}
function confirmDelete(){
  const id=activeId,m=allMemories.find(m=>m.id===id);if(!m)return;
  utility(id<=100?"Clear this little memory?":"Delete this memory?",`<p class="utility-message">${escapeHTML(m.title)}</p><p class="form-note">${id<=100?"Its photo, edited text, date, and favorite status will be removed. Original slot "+id+" will stay available for a new memory.":"This added memory and its browser photo will be removed."} This cannot be undone.</p><p id="delete-error" class="form-error" role="alert"></p><div class="form-actions"><button class="button soft" id="cancel-delete">Keep our memory</button><button class="button primary" id="confirm-delete">${id<=100?"Clear memory":"Delete memory"}</button></div>`);
  $("#cancel-delete").addEventListener("click",()=>openMemory(id));
  $("#confirm-delete").addEventListener("click",async event=>{
    event.currentTarget.disabled=true;
    try{
      if(db)await photoTransaction("readwrite",s=>s.delete(id));
      if(photoURLs.has(id))URL.revokeObjectURL(photoURLs.get(id));photoURLs.delete(id);photoStatus.delete(id);favorites.delete(id);
      if(id<=100){const original=defaultMemories.find(m=>m.id===id);allMemories[allMemories.findIndex(m=>m.id===id)]={...original,caption:"",date:"",image:"",uploaded:false};}
      else allMemories=allMemories.filter(m=>m.id!==id);
      const saved=persist();renderGallery();renderTimeline();renderHeroPhoto();$("#utility-dialog").close();if(saved)notify(id<=100?"A fresh little space, ready for another memory.":"Memory removed.");
    }catch{$("#delete-error").textContent="The photo could not be removed. Please try again.";$("#confirm-delete").disabled=false;}
  });
}
function showHelp(){utility("Making this universe ours",`<div class="help-copy"><ol><li><strong>Use the editor:</strong> open any memory, choose <strong>Edit Memory</strong>, then select your photo and save. It stays in this browser using IndexedDB.</li><li><strong>Use your own files:</strong> put your pictures in the <code>images/</code> folder. Name them <code>memory-01.jpg</code> to <code>memory-99.jpg</code>, and <code>memory-100.jpg</code>. Memory 1 is also the cover photo.</li><li><strong>Add new chapters:</strong> Add a Memory creates slot 101 and beyond. Clearing an original memory keeps its numbered slot.</li><li><strong>Our soundtrack:</strong> add <code>music/our-song.mp3</code>, or choose a local audio file using the music button. Music only starts when you click play.</li></ol><p>Text and settings use localStorage; chosen photos use IndexedDB. They belong to this browser and site address and do not sync to Julie’s device. Private browsing, clearing site data, or browser eviction can remove them. Keep your originals.</p><p>To share the same photos and words with Julie, include the image files and edit the defaults in <code>script.js</code> before hosting your own copy. A local music selection must be chosen again after refresh.</p></div>`);}
function musicState(){const playing=!$("#audio").paused;$("#music-button").classList.toggle("playing",playing);$("#music-button").setAttribute("aria-label",playing?"Pause our soundtrack":"Play optional music");$("#music-button span").textContent=playing?"pause our song":"our soundtrack";}
async function playMusic(){
  const audio=$("#audio");if(!audio.src)audio.src="music/our-song.mp3";
  try{await audio.play();musicState();notify("Our soundtrack is playing. ♫");}
  catch{musicState();notify("No song is available yet. Choose a local audio file to play.");}
}
function musicDialog(){
  if(!$("#audio").paused){$("#audio").pause();musicState();notify("Our soundtrack is paused.");return;}
  utility("A soundtrack for us ♫",`<p class="help-copy">Music is optional. Play your bundled <code>music/our-song.mp3</code>, or choose a song from your device. Local song choices last for this visit only.</p><label class="music-picker">Choose a local audio file<input id="music-file" type="file" accept="audio/*"></label><p id="music-feedback" class="form-note" role="status"></p><div class="form-actions"><button id="play-song" class="button primary">Play our song ♫</button></div>`);
  $("#music-file").addEventListener("change",event=>{
    const file=event.target.files[0];if(!file)return;
    if(!file.type.startsWith("audio/")&&!/\.(mp3|wav|ogg|m4a|aac|flac)$/i.test(file.name)){$("#music-feedback").textContent="Please choose an audio file.";return;}
    if(file.size>60*1024*1024){$("#music-feedback").textContent="Please choose a song smaller than 60 MB.";return;}
    if(musicURL)URL.revokeObjectURL(musicURL);musicURL=URL.createObjectURL(file);$("#audio").src=musicURL;$("#music-feedback").textContent=`Ready to play: ${file.name}`;
  });
  $("#play-song").addEventListener("click",async()=>{await playMusic();if(!$("#audio").paused)$("#utility-dialog").close();else $("#music-feedback").textContent="Add music/our-song.mp3 or choose a supported local audio file.";});
}
function bindEvents(){
  $("#view-all").addEventListener("click",()=>setFilter("all"));$("#view-favorites").addEventListener("click",()=>setFilter("favorites"));
  $("#nav-favorites").addEventListener("click",()=>{setFilter("favorites");});
  document.querySelectorAll('a[href="#memories"]:not(#nav-favorites)').forEach(a=>a.addEventListener("click",()=>setFilter("all")));
  $("#search").addEventListener("input",()=>{visibleLimit=12;renderGallery();});$("#sort").addEventListener("change",()=>{visibleLimit=12;renderGallery();});
  $("#clear-filters").addEventListener("click",()=>{$("#search").value="";setFilter("all");});
  $("#show-more").addEventListener("click",()=>{const previous=visibleLimit;visibleLimit+=12;renderGallery();const newlyVisible=$("#gallery").children[previous]?.querySelector(".card-open");newlyVisible?.focus({preventScroll:true});newlyVisible?.scrollIntoView({block:"nearest",behavior:"smooth"});});
  $("#random-memory").addEventListener("click",randomMemory);$("#next-memory").addEventListener("click",()=>navigateMemory(1));$("#previous-memory").addEventListener("click",()=>navigateMemory(-1));
  $("#hero-photo").addEventListener("click",()=>openMemory(1));
  $("#lightbox-prev").addEventListener("click",()=>navigateMemory(-1));$("#lightbox-next").addEventListener("click",()=>navigateMemory(1));
  $("#lightbox-favorite").addEventListener("click",()=>toggleFavorite(activeId));
  $("#edit-memory").addEventListener("click",()=>editMemory(activeId));$("#delete-memory").addEventListener("click",confirmDelete);$("#add-memory").addEventListener("click",()=>editMemory());
  $("#memory-form").addEventListener("submit",saveMemory);
  $("#memory-file").addEventListener("change",async event=>{
    resetPreview();$("#memory-error").textContent="";const file=event.target.files[0];if(!file)return;
    selectedFile=file;
    try{await validatePhoto(file);if(selectedFile!==file)return;previewURL=URL.createObjectURL(file);showUploadPreview(previewURL);$("#remove-photo").checked=false;}
    catch(e){if(selectedFile!==file)return;event.target.value="";$("#memory-error").textContent=e.message;}
  });
  $("#remove-photo").addEventListener("change",e=>{if(e.target.checked){$("#memory-file").value="";resetPreview();}});
  $("#editor-dialog").addEventListener("close",resetPreview);
  for(const selector of ["#hero-letter","#read-letter"])$(selector).addEventListener("click",readLetter);
  for(const selector of ["#edit-letter","#edit-love-letter"])$(selector).addEventListener("click",editLetter);
  $("#relationship-button").addEventListener("click",editRelationship);
  $("#change-theme").addEventListener("click",()=>{settings.theme=(settings.theme+1)%4;const saved=persist();renderSettings();if(saved)notify(`Theme: ${themeNames[settings.theme]} ♡`);});
  $("#change-background").addEventListener("click",()=>{settings.background=(settings.background+1)%3;const saved=persist();renderSettings();if(saved)notify(`Background: ${backgroundNames[settings.background]} ✧`);});
  $("#dark-toggle").addEventListener("click",()=>{settings.dark=!settings.dark;const saved=persist();renderSettings();if(saved)notify(settings.dark?"A little universe after dark. ☾":"Hello, soft morning light. ☼");});
  $("#reset-theme").addEventListener("click",()=>{settings.theme=0;settings.background=0;settings.dark=false;const saved=persist();renderSettings();if(saved)notify("Back to our original rosy little universe.");});
  $("#secret-message").addEventListener("click",showSecret);$("#surprise").addEventListener("click",()=>Math.random()<.5?randomMemory():showSecret());
  $("#how-to").addEventListener("click",showHelp);$("#music-button").addEventListener("click",musicDialog);
  $("#audio").addEventListener("play",musicState);$("#audio").addEventListener("pause",musicState);$("#audio").addEventListener("error",musicState);
  $("#menu-toggle").addEventListener("click",()=>{const open=$("#menu-toggle").getAttribute("aria-expanded")!=="true";$("#menu-toggle").setAttribute("aria-expanded",open);$("#menu-toggle").setAttribute("aria-label",open?"Close navigation":"Open navigation");$("#main-nav").classList.toggle("is-open",open);});
  $("#main-nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{$("#main-nav").classList.remove("is-open");$("#menu-toggle").setAttribute("aria-expanded","false");$("#menu-toggle").setAttribute("aria-label","Open navigation");$("#main-nav").querySelectorAll("a").forEach(link=>link.classList.toggle("active",a===link));}));
  document.querySelectorAll("[data-close]").forEach(button=>button.addEventListener("click",()=>$("#"+button.dataset.close).close()));
  document.querySelectorAll("dialog").forEach(dialog=>{
    dialog.addEventListener("click",event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
    dialog.addEventListener("close",()=>{if(!document.querySelector("dialog[open]")&&document.activeElement===document.body){$("#add-memory").focus({preventScroll:true});}});
  });
  document.addEventListener("keydown",event=>{
    if(!$("#lightbox").open)return;
    if(event.key==="ArrowLeft"){event.preventDefault();navigateMemory(-1);}
    if(event.key==="ArrowRight"){event.preventDefault();navigateMemory(1);}
  });
  let touchStart=null;
  $("#lightbox-photo").addEventListener("touchstart",e=>{if(e.touches.length===1)touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  $("#lightbox-photo").addEventListener("touchend",e=>{if(!touchStart)return;const t=e.changedTouches[0],dx=t.clientX-touchStart.x,dy=t.clientY-touchStart.y;if(Math.abs(dx)>65&&Math.abs(dy)<65)navigateMemory(dx<0?1:-1);touchStart=null;},{passive:true});
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)updateDays();});
}
async function init(){
  loadState();renderSettings();bindEvents();renderTimeline();
  // Metadata appears immediately; photo-dependent edits wait for IndexedDB.
  await restorePhotos();ready=true;renderGallery();renderHeroPhoto();renderTimeline();
  if(!storageAvailable)notify("Browser text storage is unavailable. Changes will last for this visit only.");
  setInterval(updateDays,60000);
}
init().catch(()=>notify("Something interrupted the scrapbook. Please refresh to try again."));
