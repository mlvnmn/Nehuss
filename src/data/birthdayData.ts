// ============================================================================
// EVERYTHING YOU WANT TO CUSTOMIZE LIVES IN THIS FILE.
// Swap text, dates, and image paths here — no need to touch components.
// Drop your own photos in `src/assets/photos/` and update the paths below.
// ============================================================================

import campusWalk from "../assets/photos/campus-walk.jpg";
import schoolHearts1 from "../assets/photos/school-hearts-1.jpg";
import schoolHearts2 from "../assets/photos/school-hearts-2.jpg";
import bikeTrip from "../assets/photos/bike-trip.jpg";
import beachFeet from "../assets/photos/beach-feet.jpg";
import trainRide from "../assets/photos/train-ride.jpg";
import mirrorToday from "../assets/photos/mirror-today.jpg";
import couchSelfie from "../assets/photos/couch-selfie.jpg";
import lakesideYellow from "../assets/photos/lakeside-yellow.jpg";
import funnyFace from "../assets/photos/funny-face.jpg";
import mirrorBrown from "../assets/photos/mirror-brown.jpg";
import lakesideHearts from "../assets/photos/lakeside-hearts.jpg";
import elevatorPov from "../assets/photos/elevator-pov.jpg";
import holdingHands from "../assets/photos/holding-hands.jpg";

import sunsetFlowers from "../assets/photos/portraits/sunset-flowers.jpg";
import purpleDressWall from "../assets/photos/portraits/purple-dress-wall.jpg";
import eventCandid from "../assets/photos/portraits/event-candid.jpg";
import mountainField from "../assets/photos/portraits/mountain-field.jpg";
import pinkPalms from "../assets/photos/portraits/pink-palms.jpg";
import homeStepsRed from "../assets/photos/portraits/home-steps-red.jpg";
import redDressSide from "../assets/photos/portraits/red-dress-side.jpg";
import yellowTop from "../assets/photos/portraits/yellow-top.jpg";
import terraceSmile from "../assets/photos/portraits/terrace-smile.jpg";
import beachJumpSunset from "../assets/photos/portraits/beach-jump-sunset.jpg";
import beachBlueDress from "../assets/photos/portraits/beach-blue-dress.jpg";
import beachSunsetPortrait from "../assets/photos/portraits/beach-sunset-portrait.jpg";
import beachSunsetHorizon from "../assets/photos/portraits/beach-sunset-horizon.jpg";
import forestYellowShirt from "../assets/photos/portraits/forest-yellow-shirt.jpg";
import gardenBenchPink from "../assets/photos/portraits/garden-bench-pink.jpg";
import paddyfieldPink from "../assets/photos/portraits/paddyfield-pink.jpg";
import beachNavyFloral from "../assets/photos/portraits/beach-navy-floral.jpg";
import balconyPinkSaree from "../assets/photos/portraits/balcony-pink-saree.jpg";
import gardenRedLehenga from "../assets/photos/portraits/garden-red-lehenga.jpg";
import balconyPink2 from "../assets/photos/portraits/balcony-pink-2.jpg";
import lakesideBrown from "../assets/photos/portraits/lakeside-brown.jpg";
import redroadRedDress from "../assets/photos/portraits/redroad-red-dress.jpg";

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
  image: string;
}

export interface GalleryPhoto {
  id: number;
  src: string;
  caption: string;
}

export interface SurpriseNote {
  id: number;
  emoji: string;
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
      title: "School Days",
      date: "2022",
      description:
        "Backpacks, lanyards, and that same laugh I still fall for every single time. We were kids figuring it out together.",
      imagePlaceholder: schoolHearts1,
    },
    {
      title: "Where It All Began",
      date: "Aug 2022",
      description:
        "Just two people walking, not saying much, not needing to. I didn't know it then, but that was the start of my favorite story.",
      imagePlaceholder: campusWalk,
    },
    {
      title: "Our Little Trip",
      date: "2023",
      description:
        "Helmets on, wind in our faces, green hills all around — one of my favorite rides was the one spent right behind you.",
      imagePlaceholder: bikeTrip,
    },
    {
      title: "Toes In The Sand",
      date: "2023",
      description:
        "Just the sound of the waves and your hand near mine. Some moments don't need a caption to be unforgettable.",
      imagePlaceholder: beachFeet,
    },
    {
      title: "That Train Ride",
      date: "2024",
      description:
        "Your head on my shoulder, the world blurring past the window — I remember thinking I never wanted that ride to end.",
      imagePlaceholder: trainRide,
    },
    {
      title: "Today",
      date: "Now",
      description:
        "Still choosing you, still falling for you, still so grateful the universe put you in my life. Happy Birthday, my love.",
      imagePlaceholder: mirrorToday,
    },
  ] as Memory[],

  // ---- Gallery wall ----
  galleryPhotos: [
    { id: 1, src: schoolHearts2, caption: "Under the trees, always giggling" },
    { id: 2, src: couchSelfie, caption: "Lazy evenings, matching plum" },
    { id: 3, src: lakesideYellow, caption: "Yellow uniforms, golden days" },
    { id: 4, src: mirrorBrown, caption: "Mirror selfies, matching brown" },
    { id: 5, src: lakesideHearts, caption: "Lakeside, hearts all around" },
    { id: 6, src: elevatorPov, caption: "Melvin's POV — always you" },
    { id: 7, src: holdingHands, caption: "Wherever we go, hand in hand" },
    { id: 8, src: funnyFace, caption: "The face you make that I adore" },
  ] as GalleryPhoto[],

  // ---- Portrait Story (tap-through story viewer) ----
  portraits: [
    { id: 1, src: sunsetFlowers, caption: "Golden hour, right on time" },
    { id: 2, src: purpleDressWall, caption: "That smile could stop traffic" },
    { id: 3, src: eventCandid, caption: "Caught mid-laugh, my favorite kind" },
    { id: 4, src: mountainField, caption: "Small in the mountains, big in my heart" },
    { id: 5, src: pinkPalms, caption: "Pink suits you. So does everything else" },
    { id: 6, src: homeStepsRed, caption: "Home looks better with you in it" },
    { id: 7, src: redDressSide, caption: "Red on you should be illegal" },
    { id: 8, src: yellowTop, caption: "Sunshine has competition" },
    { id: 9, src: terraceSmile, caption: "Just existing, effortlessly beautiful" },
    { id: 10, src: beachJumpSunset, caption: "Jumping into the sunset, literally" },
    { id: 11, src: beachBlueDress, caption: "Sea breeze, salt air, and you" },
    { id: 12, src: beachSunsetPortrait, caption: "The sky was showing off that day" },
    { id: 13, src: beachSunsetHorizon, caption: "Chasing sunsets, finding you in every one" },
    { id: 14, src: forestYellowShirt, caption: "A little sunshine in the shade" },
    { id: 15, src: gardenBenchPink, caption: "Lost in thought, found in my heart" },
    { id: 16, src: paddyfieldPink, caption: "Fields of green, one favorite view" },
    { id: 17, src: beachNavyFloral, caption: "Barefoot on the sand, exactly where you belong" },
    { id: 18, src: balconyPinkSaree, caption: "Elegance is your default setting" },
    { id: 19, src: gardenRedLehenga, caption: "Dressed up and absolutely glowing" },
    { id: 20, src: balconyPink2, caption: "Every angle, a new favorite" },
    { id: 21, src: lakesideBrown, caption: "Calm water, calmer soul" },
    { id: 22, src: redroadRedDress, caption: "Walking into my heart, one photo at a time" },
  ] as GalleryPhoto[],

  // ---- Surprise button ----
  surpriseNotes: [
    { id: 1, emoji: "💌", note: "You are the best thing that's ever happened to me." },
    { id: 2, emoji: "🌙", note: "Even on my worst days, thinking of you fixes something in me." },
    { id: 3, emoji: "✨", note: "I fall for you a little more every single day, somehow." },
    { id: 4, emoji: "🫶", note: "You make ordinary moments feel like they matter." },
    { id: 5, emoji: "🍰", note: "I can't wait to celebrate every birthday with you, forever." },
    { id: 6, emoji: "🌷", note: "Thank you for choosing me, again and again." },
    { id: 7, emoji: "💫", note: "You're my favorite notification, my favorite person, my favorite everything." },
    { id: 8, emoji: "🕊️", note: "With you, even silence feels like home." },
  ] as SurpriseNote[],

  // ---- Reasons Why grid ----
  loveNotes: [
    {
      id: 1,
      title: "Your Smile",
      note: "It's the first thing I look for in every photo, every memory, every room you walk into.",
      image: purpleDressWall,
    },
    {
      id: 2,
      title: "Your Kindness",
      note: "You make everyone around you feel a little safer, a little softer, a little more seen.",
      image: gardenBenchPink,
    },
    {
      id: 3,
      title: "Your Laugh",
      note: "Loud, unfiltered, completely you — it's my favorite sound in the entire world.",
      image: eventCandid,
    },
    {
      id: 4,
      title: "Your Strength",
      note: "I've watched you carry so much and still choose softness. That's the quiet kind of brave.",
      image: mountainField,
    },
    {
      id: 5,
      title: "Your Weirdness",
      note: "The random voices, the silly dances, the 2am thoughts — I wouldn't trade any of it.",
      image: funnyFace,
    },
    {
      id: 6,
      title: "The Way You Love",
      note: "Fully, loudly, without holding back. I've never felt luckier to be on the receiving end of it.",
      image: holdingHands,
    },
  ] as LoveNote[],

  // ---- The Birthday Letter ----
  letterContent: `My Nehusee,


Hai haii my bobo becomessss 20 heheheeeheheheh
Many many happy returns of the day chakkaree 🥹🫀may God fulfill all your dreamss andd let your hardwork pay off🥹😘🫀.


HAPPY BIRTHDAY DAY ENTEEE KUTUUU 🥹🎀.
Nehusee as a boyfriend sadrnaa nthelum ninnk njnn medichh tharuneyaa🥺Atleast orr muttaiii ellum andd on every bdayy wee meeet but this time 🥺😭enik nehunse nehunstee bdaykk neritt kanannopatulla🥺🥺enik nalla veshmondd chakkaraeee and  alsoo uk my situation athukond matravade entell paisss onulathond matravee ktoo njn ninnk onum vangichh tharanjey🥺🫀analum Sorry kto manaporvam allato🥹🫀actually nintee bdayk ollaa wishess ahnelum entee veshmamm parichill arikum msgil🥹😂

Nehuss ipoo chrichu🥹🫳🏻❤️weww.... Njn kanunuu
Your laugh 🥹💎

Nehusee ninnnne kannan nth resavann ariyuvoodee

Actually ni pryullee muthee ninnk arullaa. Ni epplum otakka ninnnkk evdem aremm proud akkan pattitilaa enokee 🥹nehusee seriously adee enikk ingnorr penineee allele ingnorr bharyaayee enikk kittumm enn njn orikallumm vicharichitilladee... 🥹🥹God givess mee moree than i deserve 🥹🥹I'm fukn proud of you chakkaree 😘❤️ipoo ni pryuvrikim on what im proud of... Pryann ahnell koree ondd

Ninntee sound ninte caring nintee perumattam ninteee patttu😩❤️nehusee actually ni payankara adipoli ahdee😩😩nehus mentally korchh soft aa Athukondd nehus cheriyorr issue varumbo thanne completely lost akney... Nehuss just ipoo njnum niuumm ente family ninnte family atrremm matram aloichaa kathiyadee just do care on these peppllss🥹🎀wee will be so happyy 🥹🥹nehusee ith ente kodey ollaa 4th bday ahn🥹🥹wewww we have comee soo farr ass thiss muchh🥹🥹andd seriously ninne polee ore peninne kittann bhagymm cheynm nehusee 🥹actually seriously u aree aa gemm🥹💎gemm that only know to lovee mee infinitylyy🥹🥹nehusee u showd mee actually what iss lovee andd love enn prnja sadnm nth matram deeeo ahnnenn😭😭🫠❤️seriously I melted on u muthee.

Njn ee msg type akumboo polum I'm litterallyyy crying 🥹🥹apoo thanee ni nintee value onn aloichh nokikkkk kuttuu🥹🥹u areeee aa ntha pryaa beyondd words aa chakkaraeee 🥹🥹nehusee ni entee jeeevanddii muthee ente matramm entee swanthamm nehuss 🥹🫳🏻nehusee i trust u a lott chakkaraeee 😭❤️stym aytumm but edakk random traumass varumbolaa njn ninnodd oroo potta qnss choikney 🥹ni enne vitt pokallee oroo mandtarm oke pryney ktoo allathey ninnee vishvasmm illanillattalla🥹💯❤️ktoo muthee🥹❤️😘😘ni illanndd njn lladee🥹nehuss illengill melvusumm illaa ee lokathill soo howw fukn hard the situation camee just think ninnk vendi orr pavam cherkkan nokii iripondenn🥹mnsilayo

Nehusee ni ketiilee like deivam orkilum veelya krymgall atraa easyy aytt namdey kayillott tharullaa... Angney thanne we may not know thee value wht he havee given to uss soo itremm ortha mathii.... Everything hass itss right timee, right time varumm vanirikum🥹💯just trust on god and don't give up! Inemm nintee aim 24-28 nn examinn nallaa mark vangiknmm

Ath ni vangichitee pattuu vangichhedukum enn vechh thane lettt yourr full effortss take onnn andd studyy well ktoo kuttuse 🥹❤️😘ninnee kond partumade🥹🥹😘enik nine nanayitt arinjudey🥹❤️😘ninnk deivam orr nalla  bhavii knditindd sooo hee just taking time too let u know the value well!

Nehusee nthokee patylum don't give up?! Mnsilayo

Everything has aa solution! " Everything "

Nehusee andd venndum pryuvaa happy bday chakkaraeee 🥹😘❤️😭bee happy kto🥹🥹ninnee njn happy akikollam ath vere krym🥹😘❤️heheh

Nehusee pinneee korch krym pryan ond enik ninod🥹😂njn video okee cheyth kazhinjr kto orr 5 ayoo 🥹❤️ninee surprise akkan vendiyaa njn ingneoke msg itee ktoo ee msg vayichh kazhijj insta nokneyy kto🥹❤️😘u will be happy 🥹💯njn prnjthpolee basic video ahto🥹but i hope that video has life🫀.


Ipo ninnnk thonunndoodee ninnte bday spl alla enn🥹❤️🫀pinnee njn prnjile njn ninee happy akkum enn🥹🥹❤️🫀😘I hope i am making you happy not ath thee peak but at the most ig🥹🫀😘

Nehusee enik ninnee othirii istavadde 🥹🥹udk actually how much I love you chakkaraa 🥹😘❤️ummmhaaaaaa🥹🥹😘😘msg vayichhitt pryney enikk video call akkan oltha🥹😂😘vegamm vaychitt enik callill reply akney ktoo msg alla callill i need thee reaction andd the replies ktoo🥹🥹🥹🥹🫀I love you sundrii🥹😘🫀🥹🫀u are maa queen 🥹😘I won't leave you nehusee 🥹🎀never! Orikalum njn ninnee itiiittr pkkuoo ninne Cheat akuoo onumm cheyulla🥹🥹I'm dedicating myy lifee forr u bebbyu🥹🫀for us, for our good future. Only for us 🥹🥹and u will bee my 1st priority forever! I promise 🥹💎🫀😘.`,

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
