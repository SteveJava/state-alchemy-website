export interface Artist {
  id: string;
  slug: string;
  name: string;
  bio: string;
  image: string;
  genres: string[];
  featured: boolean;
  category: 'Live' | 'DJ';
  socials: {
    instagram?: string;
    soundcloud?: string;
    spotify?: string;
  };
}

export const ARTISTS: Artist[] = [
  // Live Acts
  {
    id: 'live-1',
    slug: 'gray-matter',
    name: 'Gray Matter',
    bio: `Audible Alchemist from Zeta Reticuli Solar System - currently on an Earthly experience intended to connect other Earthly beings to different, ancient versions of themselves. I am here to show you your place in times and space - through dance rituals that go back thousands of years, with music created by the manipulation of (alien coded) frequencies of sound. Clear your mind and connect - to what ever you deem the universe to be. You are inside of it. It is inside of you! "You are a piece of the universe, experiencing itself - subjectively."`,
    image: '/images/artists/liveActs/grayMatter.jpg',
    genres: ['Experimental','Psychedelic'],
    featured: true,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/graymatter_statealchemy/', soundcloud: 'https://soundcloud.com/graymatterpsy' }
  },
  {
    id: 'live-2',
    slug: 'blether',
    name: 'Blether',
    bio: 'Raw, unfiltered energy and distorted frequencies for the peak time.',
    image: '/images/artists/liveActs/blether.jpg',
    genres: ['Twilight Nightpsy'],
    featured: false,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/blether_statealchemymusic/', soundcloud: 'https://soundcloud.com/bletherpsy' }
  },
  {
    id: 'live-3',
    slug: 'skorgen',
    name: 'Skörgen',
    bio: `Introducing Skörgen, Created by Aaron Elphick from the vibrant city of Cape Town, South Africa, weaving mystical tales through captivating soundscapes. Skörgen's musical journey began as a young soul mesmerized by the enchanting allure of nature's melodies. \n \n Embrace in the rhythm of the forest, let go, and immerse yourself in the sonic universe of Skörgen.`,
    image: '/images/artists/liveActs/skorgen.png',
    genres: ['Forest'],
    featured: true,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/aaron_elphick/', soundcloud: 'https://soundcloud.com/skorgen' }
  },
  {
    id: 'live-4',
    slug: 'voidwalker',
    name: 'Voidwalker',
    bio: `The solo darkpsy project of Tristen Henning. \n \n This alias is a creative outlet for me to explore the darker realms of Psytrance both as a DJ and as a Producer, finding the sweet spot between 155 and 165. \n \n Currently a member of State Alchemy Music. \n \n Also known as one half of Ebb and Flow (Woo-Dog Recordings) for the slightly slower stuff from 134 - 154bpm.`,
    image: '/images/artists/liveActs/voidwalker.jpg',
    genres: ['Organic Darkpsy'],
    featured: true,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/voidwalker.statealchemymusic/', soundcloud: 'https://soundcloud.com/user-426169025' }
  },
  {
    id: 'live-5',
    slug: 'phylth',
    name: 'Phylth',
    bio: `21 Year old twilight psytrance producer and DJ from Cape Town, South Africa.`,
    image: '/images/artists/liveActs/phylth.jpg',
    genres: ['Twilight Nightpsy'],
    featured: true,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/phylth_statealchemymusic/', soundcloud: 'https://soundcloud.com/user-659066679' }
  },
  {
    id: 'live-6',
    slug: 'jahshua',
    name: 'Jahshua',
    bio: `Jahshua, born in the mystical Midlands of KwaZulu-Natal, South Africa, is a talented and dynamic DJ/producer with a passion for psytrance music. With a deep-rooted love for beats that make souls dance and leave the listener mesmerized by its unique sound. \n \n From a young age, Jahshua was drawn to music and spent countless hours exploring different genres and experimenting with various instruments. It was during his early teens that he discovered the psychedelic sounds of psytrance and was captivated by its otherworldly melodies, pulsating rhythms, and mind-expanding effects. Without hesitation, he dived deep into this world and began to hone and develop his skills in sound manipulation and design. So that he too could start to create electric symphonies, to take the listener on a journey.`,
    image: '/images/artists/liveActs/jahshua.jpg',
    genres: ['Darkpsy'],
    featured: false,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/jahshua_lithgow/', soundcloud: 'https://soundcloud.com/user-60556490-748021268' }
  },
  {
    id: 'live-7',
    slug: 'key-to-insaniity',
    name: 'Key To Insaniity',
    bio: `"I lost my mind on the dance floor" \n \n Yeah, you've said that before, but did you really lose your mind? \n \n Have you ever considered the true implications of insanity, and the potential power that it holds? \n \n "By going out of your mind, you will come to your senses." \n \n - Alan Watts \n \n Key to Insaniity by Alex Vosser is a project born out of the best kind of crazy idea: take the flow and groove of conventional psy, and fuse it with the pounding high speed power of hitech beats. With on point production and precise DJ mixes, Key to Insaniity has been driving the South African psychedelic scene into a state of blissful madness. \n \n DJing and producing in the styles of twilight, darkpsy and hitech, his music ranges in tempo from 148 to 180 bpm. His beats and selections favour organic flavours, while at the same time creating densely mechanical atmospheres. By fusing sounds that would be at home in the forest with beats from the cityscapes of psychedelic Johannesburg, Key to Insaniity delivers tunes and performances that speak to the heart of the new wave of techno-hippies.`,
    image: '/images/artists/liveActs/keyToInsaniity.jpg',
    genres: ['Hitech Psytrance'],
    featured: false,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/keytoinsaniity/', soundcloud: 'https://soundcloud.com/key-to-insanity' }
  },
  {
    id: 'live-8',
    slug: 'akuum',
    name: 'Akuum',
    bio: `Step into the dynamic soundscape crafted by Akuum (otherwise known as elipsiiis), a psytrance luminary rooted in the rich tapestry of African origins. Akuum, a name echoing with depth and meaning - translating to "your powers are mine," embodying strength, a declaration that all is well, and a nod to honour. \n \n In the sonic wilderness sculpted by Akuum, sounds transcend mere rhythm; they become conduits of shared strength and resilience. The amalgamation of African roots and psychedelic trance forms a unique auditory journey - a narrative where melodies speak of empowerment and the rhythm is an unspoken agreement that, indeed, all is well. \n \n Akuum's sonic arsenal isn't just a composition; it's a declaration. In the rhythmic embrace, find a space where the ancestral meets the avant-garde. Here, beats are not just heard; they are felt, coursing through veins as a reminder that strength is a collective dance and honour is woven into every sonic strand.`,
    image: '/images/artists/dj/akuum.jpg',
    genres: ['Psytrance'],
    featured: true,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/akuum_statealchemymusic/', soundcloud: 'https://soundcloud.com/akuumpsy' }
  },
  {
    id: 'live-9',
    slug: 'compos-mentis',
    name: 'Compos Mentis',
    bio: `My name is Alexandros and I am a passionate Psytrance producer from South Africa. For the past 6 years I have been an active DJ across the South African psychedelic circuit, performing at some of the leading festivals such as Origin Festival (Nano), Alien Safari, and Vortex Parallel Universe. Through multiple diverse experiences at these gatherings, I indulged more and more into the culture and soon became obsessed. I later began a brand and company, State Alchemy, which hosted events and promoted psychedelic music and culture. \n \n Compos Mentis is the shift from Dj to Live act where I am dedicating myself to creating quality psychedelic music to share with the world. The project will thrive off higher bpms, organic soundscapes, and intelligent diverse journies through multiple cultures of psychedelic music.`,
    image: '/images/artists/liveActs/composMentis.jpg',
    genres: ['Darkpsy'],
    featured: true,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/composmentis/', soundcloud: 'https://soundcloud.com/composmentismusic' }
  },
  // DJ Acts
  {
    id: 'dj-1',
    slug: 'drifter',
    name: 'Drifter',
    bio: `My music oozes that psychedelic goodness from the speakers. I play nothing but high energy pumping basslines to keep your body and mind moving.`,
    image: '/images/artists/dj/drifter.jpg',
    genres: ['Darkpsy'],
    featured: false,
    category: 'DJ',
    socials: { instagram: 'https://www.instagram.com/brad.briscoe/', soundcloud: 'https://soundcloud.com/djdrifter_sa' }
  },
  {
    id: 'dj-2',
    slug: 'killer-b',
    name: 'Killer B',
    bio: `Killer B is the psy trance project of Bennie Koorts from South Africa started in 2000. Killer B is known for his versatility behind the decks and the unique infectious sound he brings to the dance floor. His mission is to bring you a truly intelligent underground sound with good music and good vibes. \n \n His style is focused on tight beats, groovy rhythms, and twisted psychedelic sounds with profound bass for maximum dance floor vibrations. With the experience of over 2 decades in producing and DJ'ing, his quality of mixing and enthusiasm creates an energetic impression on the dance floor that is unforgettable, and uncompromising. \n \nKiller B has played an integral part in the South African underground music scene since 2000, not only in showcasing the latest music during his DJ sets and live sets, but also by being a pioneering event organiser to help promote and expose upcoming artists and create a platform for them to share their music production \n \n Killer B has been part of the Looney Moon crew since their first release 15 years ago with his track "Off My Nut" and followed by 2 E.Ps. titled "Psychological Experiment" and "BioCycles" \n \n ...with one foot in the studio and one foot on stage as a DJ and one eye on the mixer and the other eye on the dance floor, you are sure to enjoy the interesting journey.`,
    image: '/images/artists/dj/killerB.jpg',
    genres: ['Psytrance'],
    featured: false,
    category: 'DJ',
    socials: { instagram: 'https://www.instagram.com/killerben/', soundcloud: 'https://soundcloud.com/killerben' }
  },
  {
    id: 'dj-4',
    slug: 'a-geoffrey',
    name: 'A Geoffrey',
    bio: `A Geoffrey is the psychedelic trance project of Geoffrey Smith from Durban, South Africahas been active in the scene since 2000 and DJ-ing as A GEOFFREY for almost a decade. He is currently representing ONE LOVE Productions in KZN. A GEOFFREY has played at all the major gatherings around South Africa like Vortex, Altered States,Connexion,Smoking dragon,Ubuntu Universe,Elysium and Echo. He has also featured at Mozamboogy multiple times. \n \n He describes his style of music as Funky, Driving,twisted Psychedelic Trance and his sets have been booked for day and night slots at festivals everywhere for this reason!`,
    image: '/images/artists/dj/aGeoffrey.jpg',
    genres: ['Psytrance', 'Driving'],
    featured: false,
    category: 'DJ',
    socials: { instagram: 'https://www.instagram.com/a_geoffrey_state_alchemy_music/', soundcloud: 'https://on.soundcloud.com/Nrcm8C1smF84HPoSRC' }
  },
  {
    id: 'dj-5',
    slug: 'profound',
    name: 'Profound',
    bio: `Passionate psychedelic trance Producer and DJ hailing out of Cape Town, South Africa. A lover for all things weird, freaky and psychedelic. \n \n My two projects focus on my two different tastes for psychedelic music. Profound focuses on the groovier side of the spectrum with a full-on twist. The DJ project was created in 2016 where I started performing across the psy-circuit in Cape Town. In 2018 I received my first big festival booking at the well renown Alien Safari, shortly after I started receiving bookings for multiple different festivals across different cities in South Africa. In 2020 the project was booked for the largest Psychedelic festival in Africa - Origin Festival by Nano Records. The Profound project ranges anywhere from 144-148 and is versatile to cover various time slots at a festival. \n \n Lysandros is my Live Project where I focus on a dark, organic sound that aspires to take the listener out of their mental and provides space for them to get lost in the music. This project draws major inspiration from the record label Sangoma Records as they capture that organic, tribal sound throughout their label. I first fell deep into psychedelic music when I discovered the label and I often found myself on a dancefloor just craving the intense atmosphere the Sangoma sound creates. This project will range anywhere from 150-156 and will focus on a dark atmospheric approach with eerie atmospheres waving through the forest coupled by interesting conversation between the leads.`,
    image: '/images/artists/dj/profound.jpg',
    genres: ['Nightpsy', 'Darkpsy'],
    featured: true,
    category: 'DJ',
    socials: { instagram: 'https://www.instagram.com/profound_statealchemymusic/', soundcloud: 'https://on.soundcloud.com/cn5wGGnkyhmZW74a3Q' }
  },
  {
    id: 'dj-6',
    slug: 'intropin',
    name: 'Intropin',
    bio: `Intropin is the self-taught psychedelic trance project by Jay-Cee Hechter, born and raised in South Africa. Signed to Soundblasting Records & State Alchemy Music, labels dedicated to psychedelic music, with the aim of highlighting artists from around the world. Intropin is no stranger to the underground psychedelic scene of South Africa. He recently released his first V/A album on Soundblasting Records, called "Indigenous Forest" .He discovered Psytrance Music in 2006 "Naked Tourist" who is signed to Parvati records, which made him fall in love with the soundscape and Basslines of the music and is now his full-time passion. His goal is to inject the dance floor with hypnotizing rhythms and mind bending psychedelic sounds, with bass that you can feel all the way into your soul. His also well-known for the high quality of track selections, with the ability to weave sounds together and being able to read the crowd. Intropin's main role is to effortlessly take the crowd on a psychedelic roller-coaster filled with happiness and unexpected tale Twister's`,
    image: '/images/artists/dj/intropin.jpg',
    genres: ['Darkpsy'],
    featured: false,
    category: 'DJ',
    socials: { instagram: 'https://www.instagram.com/intropin_soundblasting_rec/', soundcloud: 'https://soundcloud.com/jc-hechter' }
  },
  {
    id: 'dj-7',
    slug: 'hutch',
    name: 'Hutch',
    bio: `Psychedelic DJ From Kzn, Durban. \n Based in Capetown, Western Cape. \n Label DJ - State Alchemy Music.`,
    image: '/images/artists/dj/hutch.jpg',
    genres: ['Techno', 'Classic'],
    featured: false,
    category: 'DJ',
    socials: { instagram: 'https://www.instagram.com/hutch_state_alchemy_music/', soundcloud: 'https://on.soundcloud.com/vQSfnBBkRmdIF0cTil' }
  }
];
