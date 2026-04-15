
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

export interface Track {
  id: string;
  title: string;
  audioSrc: string;
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  date: string;
  cover: string;
  type: 'Album' | 'EP' | 'Single' | 'Compilation';
  link: string;
  slug?: string;
  description?: string;
  bandcamp?: {
    type: 'album' | 'track';
    id: string;
  };
  tracks?: Track[];
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  image: string;
  link: string;
  description?: string;
}

export const ARTISTS: Artist[] = [
  // Live Acts
  {
    id: 'live-1',
    slug: 'gray-matter',
    name: 'Gray Matter',
    bio: 'Sound Manipulator - Light Calculator - Time Travel Participator.',
    image: '/images/artists/liveActs/grayMatter.jpg',
    genres: ['Experimental','Psychedelic'],
    featured: true,
    category: 'Live',
    socials: { instagram: 'https://www.instagram.com/graymatter_statealchemy/', spotify: '#' }
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
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'live-3',
    slug: 'skorgen',
    name: 'Skörgen',
    bio: 'Hypnotic soundscapes and deep rhythmic explorations.',
    image: '/images/artists/liveActs/skorgen.png',
    genres: ['Forest'],
    featured: true,
    category: 'Live',
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'live-4',
    slug: 'voidwalker',
    name: 'Voidwalker',
    bio: 'Experimental soundscapes and industrial-tinged atmospheric techno.',
    image: '/images/artists/liveActs/voidwalker.jpg',
    genres: ['Organic Darkpsy'],
    featured: true,
    category: 'Live',
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'live-5',
    slug: 'phylth',
    name: 'Phylth',
    bio: 'Gritty, dark, and uncompromising sound design from the urban abyss.',
    image: '/images/artists/liveActs/phylth.jpg',
    genres: ['Twilight Fullon'],
    featured: true,
    category: 'Live',
    socials: { soundcloud: '#', spotify: '#' }
  },
  {
    id: 'live-6',
    slug: 'jahshua',
    name: 'Jahshua',
    bio: 'Spiritual frequencies and deep bass explorations.',
    image: '/images/artists/liveActs/jahshua.jpg',
    genres: ['Dub Techno', 'Spiritual'],
    featured: false,
    category: 'Live',
    socials: { instagram: '#', soundcloud: '#' }
  },
  // DJ Acts
  {
    id: 'dj-1',
    slug: 'drifter',
    name: 'Drifter',
    bio: 'Atmospheric journeys through space and time, blending ambient with driving beats.',
    image: '/images/artists/dj/drifter.jpg',
    genres: ['Atmospheric Techno', 'Ambient'],
    featured: false,
    category: 'DJ',
    socials: { soundcloud: '#', spotify: '#' }
  },
  {
    id: 'dj-2',
    slug: 'killer-b',
    name: 'Killer B',
    bio: 'High-energy selections and relentless groove.',
    image: '/images/artists/dj/killerB.jpg',
    genres: ['Hard Techno', 'Groove'],
    featured: false,
    category: 'DJ',
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'dj-3',
    slug: 'akuum',
    name: 'Akuum',
    bio: 'Deep hypnotic techno with psychedelic textures and tribal rhythms.',
    image: '/images/artists/dj/akuum.jpg',
    genres: ['Hypnotic Techno', 'Tribal'],
    featured: true,
    category: 'DJ',
    socials: { soundcloud: '#', spotify: '#' }
  },
  {
    id: 'dj-4',
    slug: 'a-geoffrey',
    name: 'A Geoffrey',
    bio: 'Intricate soundscapes and rhythmic complexity from the depths of the underground.',
    image: '/images/artists/dj/aGeoffrey.jpg',
    genres: ['Techno', 'Experimental'],
    featured: false,
    category: 'DJ',
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'dj-5',
    slug: 'profound',
    name: 'Profound',
    bio: 'Deeply resonant basslines and spiritual melodies for the soul.',
    image: '/images/artists/dj/profound.jpg',
    genres: ['Melodic Techno', 'Deep'],
    featured: true,
    category: 'DJ',
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'dj-6',
    slug: 'intropin',
    name: 'Intropin',
    bio: 'Fast-paced rhythmic structures and cerebral textures.',
    image: '/images/artists/dj/intropin.png',
    genres: ['Fast Techno', 'Cerebral'],
    featured: false,
    category: 'DJ',
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'dj-7',
    slug: 'hutch',
    name: 'Hutch',
    bio: 'Classic underground sounds with a modern twist.',
    image: '/images/artists/dj/hutch.jpg',
    genres: ['Techno', 'Classic'],
    featured: false,
    category: 'DJ',
    socials: { instagram: '#', soundcloud: '#' }
  }
];

export const RELEASES: Release[] = [
  // Albums
  {
    id: 'alb-1',
    title: 'Acid Bubble',
    artist: 'Key To Insaniity',
    date: '2025-11-21',
    cover: '/images/music/albums/acidBubble.avif',
    type: 'Album',
    link: '#',
    slug: 'acid-bubble',
    description:
      "Key To Insaniity drops debut full length album 'Acid Bubble' !! This is an 8-track trip built to shatter the ceiling between sub-genres. It's concentrated, high-BPM fuel for the floor—a psychedelic pressure cooker where every sonic layer is designed for maximum punch. This meticulously crafted piece of alien audio is a true reflection of an insight into the mind of one of South Africa's hottest producers! Take the flow and groove of conventional psy, and fuse it with the pounding high speed power of hitech beats and you complete Insaniity!! Featuring a collaboration track with another one of our label artist's ZDLCK, fusing the organic with the mechanical to form something of a true unique nature. Please lose your mind with us and dive right into this masterpiece! Strap in for the ride.",
    bandcamp: {
      type: 'album',
      id: '3220687225'
    },
    tracks: [
      { 
        id: "t1",
        title: 'Code Cannabis' ,
        audioSrc: '/audio/albums/acidBubble/codeCannabis.mp3'
      },
      { 
        id: "t2",
        title: 'Time Twister' ,
        audioSrc: '/audio/albums/acidBubble/timeTwister.mp3'
      },
      {
        id: "t3",
        title: 'Dream Dissolver' ,
        audioSrc: ''
      },
      {
        id: "t4",
        title: 'Chakra Attack' ,
        audioSrc: ''
      },
      {
        id: "t5",
        title: 'Insecto Gadget (with ZDLCK)' ,
        audioSrc: ''
      },
      {
        id: "t6",
        title: 'Acid Bubble' ,
        audioSrc: ''
      },
      {
        id: "t7",
        title: 'Modified Magic' ,
        audioSrc: ''
      },
      {
        id: "t8",
        title: 'Singular State' ,
        audioSrc: ''
      }
    ]
  },
  {
    id: 'alb-2',
    title: 'Potion of Emotion',
    artist: 'Gray Matter',
    date: '2025-02-21',
    cover: '/images/music/albums/potionOfEmotion.avif',
    type: 'Album',
    link: '#',
    slug: 'potion-of-emotion',
    description: "Welcome to Potion of Emotion. We, here at Gray Matter - have been watching you - analyzing every action and magick. Use your passionate emotions as a focusing tool for our inter-dimensional program. You display a strong connection to these dimensional portals. The portal config is a perfect match. Shall we commence with a preliminary astral dive?",
    tracks: [
      { 
        id: "t1",
        title: 'III' ,
        audioSrc: ''
      },
      { 
        id: "t2",
        title: 'Hive Minded' ,
        audioSrc: ''
      },
      {
        id: "t3",
        title: 'Scholar Patrol' ,
        audioSrc: ''
      },
      {
        id: "t4",
        title: 'Gates of Encounters' ,
        audioSrc: ''
      },
      {
        id: "t5",
        title: 'You-Zoo-Maki' ,
        audioSrc: ''
      },
      {
        id: "t6",
        title: 'Agothas Interlude' ,
        audioSrc: ''
      },
      {
        id: "t7",
        title: 'Dark Waters' ,
        audioSrc: ''
      },
      {
        id: "t8",
        title: 'Ndlovu' ,
        audioSrc: ''
      },
      {
        id: "t9",
        title: 'Deja Vu',
        audioSrc: ''
      },
      {
        id: "t10",
        title: 'Character Development',
        audioSrc: ''
      },
      {
        id: "t11",
        title: 'The Tribe has Spoken (Outro)',
        audioSrc: ''
      }
    ]
  },

  // EPs
  {
    id: 'ep-1',
    title: 'A Serenade Amidst Snowfall',
    artist: 'ZDLCK',
    date: '2025-08-01',
    cover: '/images/music/ep/aSerenadeAmidstSnowfall.avif',
    type: 'EP',
    link: '#',
    slug: 'a-serenade-amidst-snowfall'
  },
  {
    id: 'ep-2',
    title: 'Chronoform',
    artist: 'Blether',
    date: '2025-07-04',
    cover: '/images/music/ep/chronoform.avif',
    type: 'EP',
    link: '#',
    slug: 'chronoform'
  },
  {
    id: 'ep-3',
    title: 'Voidrealm',
    artist: 'Voidwalker',
    date: '2025-03-21',
    cover: '/images/music/ep/voidrealm.avif',
    type: 'EP',
    link: '#',
    slug: 'voidrealm'
  },
  {
    id: 'ep-4',
    title: 'Electric Boogie Machine',
    artist: 'Phylth',
    date: '2024-09-20',
    cover: '/images/music/ep/electricBoogieMachine.avif',
    type: 'EP',
    link: '#',
    slug: 'electric-boogie-machine'
  },
  {
    id: 'ep-5',
    title: 'Why Not?',
    artist: 'Key To Insaniity',
    date: '2024-07-12',
    cover: '/images/music/ep/whyNot.avif',
    type: 'EP',
    link: '#',
    slug: 'why-not'
  },
  {
    id: 'ep-6',
    title: 'Moss Monkey',
    artist: 'Killawatt',
    date: '2024-03-14',
    cover: '/images/music/ep/mossMonkey.avif',
    type: 'EP',
    link: '#',
    slug: 'moss-monkey'
  },
  {
    id: 'ep-7',
    title: 'Africhemy',
    artist: 'Compos Mentis',
    date: '2024-01-28',
    cover: '/images/music/ep/africhemy.avif',
    type: 'EP',
    link: '#',
    slug: 'africhemy'
  },
  {
    id: 'ep-8',
    title: 'Trollstigen',
    artist: 'Skörgen',
    date: '2023-12-15',
    cover: '/images/music/ep/trollstigen.avif',
    type: 'EP',
    link: '#',
    slug: 'trollstigen'
  },
  {
    id: 'ep-9',
    title: 'Self Control',
    artist: 'Gray Matter',
    date: '2023-04-14',
    cover: '/images/music/ep/selfControl.avif',
    type: 'EP',
    link: '#',
    slug: 'self-control'
  },

  // Singles
  {
    id: 's-1',
    title: 'Strange Radio',
    artist: 'Killer B, Hegchick',
    date: '2025-06-27',
    cover: '/images/music/singles/strangeRadio.avif',
    type: 'Single',
    link: '#',
    slug: 'strange-radio'
  },
  {
    id: 's-2',
    title: 'You People',
    artist: 'Voidwalker',
    date: '2024-04-19',
    cover: '/images/music/singles/youPeople.avif',
    type: 'Single',
    link: '#',
    slug: 'you-people'
  },
  {
    id: 's-3',
    title: 'Turkish Delight',
    artist: 'Akuum',
    date: '2023-11-02',
    cover: '/images/music/singles/turkishDelight.avif',
    type: 'Single',
    link: '#',
    slug: 'turkish-delight'
  },
  {
    id: 's-4',
    title: 'Woogie Bonderland',
    artist: 'Blether',
    date: '2023-05-01',
    cover: '/images/music/singles/woogieBonderland.avif',
    type: 'Single',
    link: '#',
    slug: 'woogie-bonderland'
  },

  // Compilations
  {
    id: 'comp-1',
    title: 'Best of 2 Years',
    artist: 'Various Artists',
    date: '2025-05-02',
    cover: '/images/music/compilations/bestOf2Years.avif',
    type: 'Compilation',
    link: '#',
    slug: 'best-of-2-years'
  },
  {
    id: 'comp-3',
    title: 'Stroke the Furry Bassline',
    artist: 'Various Artists',
    date: '2025-01-24',
    cover: '/images/music/compilations/strokeTheFurryBassline.avif',
    type: 'Compilation',
    link: '#',
    slug: 'stroke-the-furry-bassline'
  },
  {
    id: 'comp-4',
    title: 'Local is Lekker',
    artist: 'Various Artists',
    date: '2024-05-16',
    cover: '/images/music/compilations/localIsLekker.avif',
    type: 'Compilation',
    link: '#',
    slug: 'local-is-lekker'
  },
  {
    id: 'comp-5',
    title: 'Equilibrium',
    artist: 'Various Artists',
    date: '2023-08-18',
    cover: '/images/music/compilations/equilibrium.avif',
    type: 'Compilation',
    link: '#',
    slug: 'equilibrium'
  },
  {
    id: 'comp-6',
    title: 'Forgotten Fynbos',
    artist: 'Various Artists',
    date: '2025-04-04',
    cover: '/images/music/compilations/forgottenFynbos.avif',
    type: 'Compilation',
    link: '#',
    slug: 'forgotten-fynbos'
  },
  {
    id: 'comp-7',
    title: 'It Came To Pass',
    artist: 'Various Artists',
    date: '2026-04-24',
    cover: '/images/music/compilations/itCameToPass.avif',
    type: 'Compilation',
    link: '#',
    slug: 'it-came-to-pass'
  }
];  

export const EVENTS: Event[] = [
  {
    id: 'e1',
    slug: 'state-alchemy-festival',
    title: 'State Alchemy Festival',
    date: '2025-10-25',
    location: 'Western Cape',
    venue: 'Rawsonville',
    image: '/images/events/stateAlchemyFestival/cover.JPG',
    link: '#'
  },
  {
    id: 'e2',
    slug: 'state-alchemists-record-label-evening',
    title: 'The State Alchemists Record Label Evening',
    date: '2025-08-2',
    location: 'Cape Town',
    venue: 'Colorbox Studios',
    image: 'https://picsum.photos/seed/london/1200/600',
    link: '#'
  },
  {
    id: 'e3',
    slug: 'binary-botany-karev',
    title: 'Binary Botany Feat. Karev & Alchemy Circle',
    date: '2024-09-07',
    location: 'Cape Town',
    venue: 'colorbox Studios',
    image: 'https://picsum.photos/seed/amsterdam/1200/600',
    link: '#'
  },
  {
    id: 'e4',
    slug: 'binary-botany',
    title: 'Binary Botany',
    date: '2024-06-08',
    location: 'Cape Town',
    venue: 'colorbox Studios',
    image: 'https://picsum.photos/seed/amsterdam/1200/600',
    link: '#'
  },
  {
    id: 'e5',
    slug: 'binary-botany-creepy-deep',
    title: 'Binary Botany Feat. Creepy Deep',
    date: '2024-03-30',
    location: 'Cape Town',
    venue: 'colorbox Studios',
    image: 'https://picsum.photos/seed/amsterdam/1200/600',
    link: '#'
  },
  {
    id: 'e6',
    slug: 'alchemical-stories',
    title: 'Alchemical Stories',
    date: '2024-01-27',
    location: 'Cape Town',
    venue: 'The Spice Yard',
    image: 'https://picsum.photos/seed/amsterdam/1200/600',
    link: '#'
  }
];
