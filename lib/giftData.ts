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
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
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

export const defaultLoveLetterParagraphs: string[] = [
  "Ameeri, if someone asked me what I love most about you, I honestly wouldn't know where to start, because there are so many little things about you that make you so different and special to me. I could sit here writing about you until tomorrow and still wouldn't be able to put everything I feel into words",
  "I love how you understand me, how you can listen to me for hours without ever making me feel like I'm talking too much. I love how you somehow find a way to make me feel better when I'm sad, how you make my heavy days feel a little lighter, and how you always try to comfort me even when you're not the reason I'm upset. The fact that you come to make things better even when you have nothing to do with what made me sad means more to me than you probably realize",
  "I love the man you are with me. I love that your words mean something, that when you say you'll do something, you mean it and try to keep your word. I love how you reassure me, how you care about me, and how even on the days when you're tired or dealing with things of your own, you still find little ways to show me that you care. Sometimes, the smallest things you do mean more to me than you could ever imagine",
  "But you know what? One of my favorite things about you is that you're never pretending with me. You get to be yourself, and you don't have to act like someone you're not just to be loved by me. I love knowing that you can feel comfortable around me, that you don't have to wear a mask or pretend to be okay when you're not. I want you to feel safe enough to show me every side of yourself, because I don't just love the way you treat me. I love who you are",
  "And Ameeri, I need you to know something else. You don't always have to be strong. You don't always have to act like you're okay, and you don't have to hide your pain just because you're used to being the strong one. You don't have to carry everything on your own or feel like you always have to be the one who makes everything better.",
  "If there's one thing I want you to feel with me, it's that you can let your guard down. You can be tired, you can be sad, you can have your worst days, and you can show me the parts of yourself that you might find difficult to show anyone else. You never have to pretend with me, my love.",
  "And if one day I notice that you're not okay, I want to hold you in my arms, kiss your forehead, gently place my hand over your heart, and softly caress it while telling you how much I love you. I want to hold you close and remind you that you're precious to me, that you don't have to go through everything alone, and that none of my love for you changes just because you're having a hard time.",
  "I want to be there for you when the world feels too heavy. I want to listen when you need to talk, hold you when you don't have the words, and give you a little extra love on the days when everything feels difficult. You don't always have to explain yourself perfectly for me to care, and you don't have to hide your sadness for me to see you as the man I love.",
  "I don't love you only when you're happy, confident, and strong. I love you when you're tired, when you're hurting, when you're struggling, and even when you're at your lowest. I love you in every mood, through every difficult day, and in every version of yourself. Not because you have to be perfect, but simply because you're you.",
  "You don't have to earn my love by always being okay. You don't have to be strong for me to be proud of you, and you don't have to hide your tears for me to see you as the man I love. I want you to know that there's a place in my arms for you, even on the days when you feel like you have nothing left to give.",
  "And when I think about us, I realize that I've never forgotten a single beautiful moment we've shared. Every laugh, every sweet conversation, every little thing that made me happy with you has a place in my heart. Those moments mean so much to me, and I never want to forget them. And if I could erase some of our painful moments, I would, because I wish we could have more beautiful memories and fewer moments that hurt us. I don't want the difficult parts of our story to overshadow all the good things we've shared or all the reasons I fell in love with you.",
  "No matter what happens, my heart still wants you, Ameeri. I'd rather have a thousand arguments with you than share a single laugh with someone else. Because it's not just about being in a relationship for me. It's about YOU. You're the person I want to share my days with, the person I want to make memories with, and the person I hope we can keep choosing, even when life isn't perfect.",
  "And let's be honest, your favorite lady belongs with her favorite man, doesn't she?🤨 Your favorite lady can't imagine wearing anyone else's ring, building a life with anyone else, or growing old beside anyone else. I want to be the girl who wears your ring, the woman who stands beside you, and the person you come home to after a long day.",
  "I want the little moments, the big moments, the happy days, and even the difficult days, as long as we're both willing to face them together. I want to celebrate your successes, support you through your struggles, laugh with you over the silliest things, and create a thousand little memories that we'll look back on one day with smiles on our faces.",
  "I want to be the person who reminds you of how amazing you are when you forget it yourself. I want to see you achieve everything you've ever dreamed of, and I want to be proud of the man you're becoming. I want you to feel appreciated for all the things you do, but even more than that, I want you to know that you're loved for the person you already are.",
  "And if it isn't you, Ameeri, I don't want someone else just for the sake of having someone. I'm not dreaming of just any love story. I'm dreaming of ours. It's you I'm hoping for, you I'm dreaming of, and you I want beside me.",
  "I know that no relationship is perfect, and I know that love isn't only about beautiful words or happy moments. But if I get to choose the person I want to share this life with, the person I want to grow with, learn with, and build a future with, my heart knows whose name it wants to say.",
  "It's you, my Ameeri. It's you I'm hoping to get engaged to, you I'm dreaming of marrying, and you I imagine growing old with. And if I get to choose, it'll be you every single time.",
  "I hope that, in some way, I make you feel as understood, appreciated, and loved as you make me feel. I hope you always feel safe enough to be completely yourself with me. I hope that when you think of me, you think of someone who wants to understand you, someone who cares about your happiness, and someone who loves you even on the days when you find it difficult to love yourself.",
  "I don't know how to fit all the love I have for you into one letter, and maybe I'll never find enough words to do that. But I hope that, every day, through the little things I do and the way I treat you, you'll get to feel a little more of it.",
  "Because I don't just want to tell you that I love you. I want you to feel it. I want you to feel it when I'm listening to you, when I'm holding you, when I'm reminding you that you matter, and when I'm sitting beside you doing absolutely nothing special.",
  "I want you to feel loved on your best days, on your worst days, and on every ordinary day in between.",
  "Happy birthday, Ameeri🥳",
  "Thank you for being the person you are, for the beautiful moments we've shared, and for all the little things about you that have found their way into my heart.",
  "I hope this new year of your life brings you happiness, peace, success, and everything your heart has been wishing for. And I hope that, if life allows us to keep building this story together, we'll have so many more birthdays to celebrate, so many more memories to make, and so many more beautiful little moments that will belong only to us.",
  "I love you more than this letter could ever explain, my Ameeri.",
  "It's not just your birthday I'm celebrating. It's you",
  "The person you are, the person you're becoming, and the person I feel so lucky to love.🌷",
  "Forever your favorite lady.🪷",

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
    balloonImage: "/images/cat.png",
    birthdayWishesTitle: "Happy 20th Birthday, Amir! 🎂✨",
    birthdayWishesMessage:
      "Happy birthday to my favorite person and one of the most important people in my life You’re officially 20 now, ya Ameeri Actually I always think about you and I always imagine the first time we’re gonna meet and how tightly I’m gonna hug you Just imagining that I’ll be in your arms one day makes me so happy, To my favorite the smartest the most talented and the best future Dr ever I’m always so proud of you loviee, I love everything about you love your eyes, your soft voice, and the way your voice sounds when you laugh It makes me so happy, I’m so lucky to have you every time I see your pictures the first thing that comes to my mind is Mashallah I’m so lucky to have someone this handsome in my life Happy birthday ya habebi I wish you a life full of happiness, comfort, and love You deserve all the beautiful things in this world I hope I get to be by your side through all of them I love you so much Ameeri, Happy birthday my love😔💝💝💝💝",
    thingsWeWannaDo: defaultThings,
    loveLetterTitle: "The little things I love about you",
    loveLetterSubtitle: "To My Ameeri, With All My Love <3",
    loveLetterParagraphs: defaultLoveLetterParagraphs,
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
    balloonImage: "/images/cat.png",
    birthdayWishesTitle: "Happy 20th Birthday, Amir! 🎂✨",
    birthdayWishesMessage:
      "Wishing you a year as bright, ambitious, and wonderful as your soul. May your 20s be the beginning of your greatest adventures, full of success, peace, and all the love you deserve. Happy Birthday! 🎈🥂",
    thingsWeWannaDo: defaultThings,
    loveLetterTitle: "The little things I love about you",
    loveLetterSubtitle: "To My Ameeri, With All My Love <3",
    loveLetterParagraphs: defaultLoveLetterParagraphs,
    musicCoverImage: "/images/song-cover.jpg",
    musicUrl: "/music/our-song.mp3",
    songTitle: "Our Special Song",
  },
};

export default giftData;