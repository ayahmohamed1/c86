export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "Get engaged.",
  "Sit on the beach in winter and hug each other so tightly.",
  "Travel together to all the places we dream of visiting.",
  "Watch your favorite movies, the ones you recommend and love together at the cinema.",
  "Look into your eyes and tell you how much I love them.",
  "Get married and build a beautiful life together.",
  "Listen to music together and enjoy every little moment.",
  "Try new things together and take lots of pictures to keep our memories forever.",
  "Kiss you in public without being shy about showing you how much I love you.",
  "Be with you forever and grow old together.",
  "Have a little girl who looks just like me.",
  "Walk together in the streets, holding your hand during winter and while it's raining.",
  "And most importantly I wanna do all these little things with you Ameeri, Not just once, but over and over again for the rest of our lives.",
];

const giftData: Record<string, GiftData> = {
  amir: {
    senderName: "your favorite lady (rofida)",
    receiverName: "Amir",
    envelopeImage: "/images/envelope-placeholder.png",
    cardMessage: "Check out these awesome surprises for YOU!",
    birthdayImage: "/images/kid-placeholder.jpg",
    birthdayTitle: "To my favorite person,",
    birthdayText:
      "The first movie we watched together, actually I made a point of us watching it together because I was truly in love with you When I first talked to u I had no idea I was going to fall in love with the most handsome man I've ever seen in my life",
    balloonImage: "/images/ballon.png",
    birthdayWishesTitle: "Happy 20th Birthday, Amir! 🎂✨",
    birthdayWishesMessage:
      "Happy birthday to my favorite person and one of the most important people in my life You’re officially 20 now, ya Ameeri Actually I always think about you and I always imagine the first time we’re gonna meet and how tightly I’m gonna hug you Just imagining that I’ll be in your arms one day makes me so happy, To my favorite the smartest the most talented and the best future Dr ever I’m always so proud of you loviee, I love everything about you love your eyes, your soft voice, and the way your voice sounds when you laugh It makes me so happy, I’m so lucky to have you every time I see your pictures the first thing that comes to my mind is Mashallah I’m so lucky to have someone this handsome in my life Happy birthday ya habebi I wish you a life full of happiness, comfort, and love You deserve all the beautiful things in this world I hope I get to be by your side through all of them I love you so much Ameeri, Happy birthday my love😔💝💝💝💝",
    thingsWeWannaDo: defaultThings,
    musicCoverImage: "/images/song-cover.jpg",
    musicUrl: "/music/our-song.mp3",
    songTitle: "Our Special Song",
  },
  aya: {
    senderName: "Aya",
    receiverName: "Amir",
    envelopeImage: "/images/envelope-placeholder.png",
    cardMessage: "Check out these awesome surprises for YOU!",
    birthdayImage: "/images/kid-placeholder.jpg",
    birthdayTitle: "To my favorite person,",
    birthdayText:
      "Being with you is truly one of the best things that has ever happened to me. From the moment you came into my life, everything started to feel brighter and more meaningful. Thank you for always bringing so much warmth, comfort, and genuine happiness into my days...",
    balloonImage: "/images/ballon.png",
    birthdayWishesTitle: "Happy 20th Birthday, Amir! 🎂✨",
    birthdayWishesMessage:
      "Wishing you a year as bright, ambitious, and wonderful as your soul. May your 20s be the beginning of your greatest adventures, full of success, peace, and all the love you deserve. Happy Birthday! 🎈🥂",
    thingsWeWannaDo: defaultThings,
    musicCoverImage: "/images/song-cover.jpg",
    musicUrl: "/music/our-song.mp3",
    songTitle: "Our Special Song",
  },
};

export default giftData;