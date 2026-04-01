
export interface Artist {
  id: string;
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

export interface Release {
  id: string;
  title: string;
  artist: string;
  date: string;
  cover: string;
  type: 'Album' | 'EP' | 'Single' | 'Compilation';
  link: string;
  bandcampUrl?: string; // <-- optional Bandcamp URL
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  venue: string;
  image: string;
  link: string;
}

export const ARTISTS: Artist[] = [
  // Live Acts
  {
    id: 'live-1',
    name: 'Gray Matter',
    bio: 'Sound Manipulator - Light Calculator - Time Travel Participator.',
    image: 'images/artists/liveActs/grayMatter.jpg',
    genres: ['Experimental','Psychedelic'],
    featured: true,
    category: 'Live',
    socials: { instagram: '#', spotify: '#' }
  },
  {
    id: 'live-2',
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
    name: 'Voidwalker',
    bio: 'Experimental soundscapes and industrial-tinged atmospheric techno.',
    image: '/images/artists/liveActs/voidwalker.jpg',
    genres: ['Organic Darkpsy'],
    featured: false,
    category: 'Live',
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'live-5',
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
    name: 'Drifter',
    bio: 'Atmospheric journeys through space and time, blending ambient with driving beats.',
    image: 'https://picsum.photos/seed/drifter/800/800',
    genres: ['Atmospheric Techno', 'Ambient'],
    featured: false,
    category: 'DJ',
    socials: { soundcloud: '#', spotify: '#' }
  },
  {
    id: 'dj-2',
    name: 'Killer B',
    bio: 'High-energy selections and relentless groove.',
    image: '/images/artists/dj/killerB.jpg',
    genres: ['Hard Techno', 'Groove'],
    featured: true,
    category: 'DJ',
    socials: { instagram: '#', soundcloud: '#' }
  },
  {
    id: 'dj-3',
    name: 'Akuum',
    bio: 'Deep hypnotic techno with psychedelic textures and tribal rhythms.',
    image: '/images/artists/dj/akuum.jpg',
    genres: ['Hypnotic Techno', 'Tribal'],
    featured: false,
    category: 'DJ',
    socials: { soundcloud: '#', spotify: '#' }
  },
  {
    id: 'dj-4',
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
    name: 'Hutch',
    bio: 'Classic underground sounds with a modern twist.',
    image: 'https://picsum.photos/seed/hutch/800/800',
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
    date: '2024-03-15',
    cover: '/images/music/albums/acidBubble.avif',
    type: 'Album',
    link: '#',
    bandcampUrl: 'https://statealchemymusic.bandcamp.com/album/album-acid-bubble'
  },
  {
    id: 'alb-2',
    title: 'Potion of Emotion',
    artist: 'Gray Matter',
    date: '2024-02-10',
    cover: '/images/music/albums/potionOfEmotion.avif',
    type: 'Album',
    link: '#'
  },
  // EPs
  {
    id: 'ep-1',
    title: 'A Serenade Amidst Snowfall',
    artist: 'ZDLCK',
    date: '2024-01-20',
    cover: '/images/music/ep/aSerenadeAmidstSnowfall.avif',
    type: 'EP',
    link: '#'
  },
  {
    id: 'ep-2',
    title: 'Chronoform',
    artist: 'Blether',
    date: '2023-12-05',
    cover: '/images/music/ep/chronoform.avif',
    type: 'EP',
    link: '#'
  },
  {
    id: 'ep-3',
    title: 'Voidrealm',
    artist: 'Voidwalker',
    date: '2023-11-15',
    cover: '/images/music/ep/voidrealm.avif',
    type: 'EP',
    link: '#'
  },
  {
    id: 'ep-4',
    title: 'Electric Boogie Machine',
    artist: 'Phylth',
    date: '2023-10-20',
    cover: '/images/music/ep/electricBoogieMachine.avif',
    type: 'EP',
    link: '#'
  },
  {
    id: 'ep-5',
    title: 'Why Not?',
    artist: 'Key To Insaniity',
    date: '2023-09-10',
    cover: '/images/music/ep/whyNot.avif',
    type: 'EP',
    link: '#'
  },
  {
    id: 'ep-6',
    title: 'Moss Monkey',
    artist: 'Killawatt',
    date: '2023-08-05',
    cover: '/images/music/ep/mossMonkey.avif',
    type: 'EP',
    link: '#'
  },
  {
    id: 'ep-7',
    title: 'Africhemy',
    artist: 'Compos Mentis',
    date: '2023-07-15',
    cover: '/images/music/ep/africhemy.avif',
    type: 'EP',
    link: '#'
  },
  {
    id: 'ep-8',
    title: 'Trollstigen',
    artist: 'Skörgen',
    date: '2023-06-20',
    cover: '/images/music/ep/trollstigen.avif',
    type: 'EP',
    link: '#'
  },
  {
    id: 'ep-9',
    title: 'Self Control',
    artist: 'Gray Matter',
    date: '2023-04-14',
    cover: '/images/music/ep/selfControl.avif',
    type: 'EP',
    link: '#'
  },
  // Singles
  {
    id: 's-1',
    title: 'Strange Radio',
    artist: 'Killer B, Hegchick',
    date: '2023-05-10',
    cover: '/images/music/singles/strangeRadio.avif',
    type: 'Single',
    link: '#'
  },
  {
    id: 's-2',
    title: 'You People',
    artist: 'Voidwalker',
    date: '2023-04-15',
    cover: '/images/music/singles/youPeople.avif',
    type: 'Single',
    link: '#'
  },
  {
    id: 's-3',
    title: 'Turkish Delight',
    artist: 'Akuum',
    date: '2023-11-02',
    cover: '/images/music/singles/turkishDelight.avif',
    type: 'Single',
    link: '#'
  },
  {
    id: 's-4',
    title: 'Woogie Bonderland',
    artist: 'Blether',
    date: '2023-05-01',
    cover: '/images/music/singles/woogieBonderland.avif',
    type: 'Single',
    link: '#'
  },
  // Compilations
  {
    id: 'comp-1',
    title: 'Best of 2 Years',
    artist: 'Various Artists',
    date: '2023-03-20',
    cover: '/images/music/compilations/bestOf2Years.avif',
    type: 'Compilation',
    link: '#'
  },
  {
    id: 'comp-3',
    title: 'Stroke the Furry Bassline',
    artist: 'Various Artists',
    date: '2023-01-05',
    cover: '/images/music/compilations/strokeTheFurryBassline.avif',
    type: 'Compilation',
    link: '#'
  },
  {
    id: 'comp-4',
    title: 'Local is Lekker',
    artist: 'Various Artists',
    date: '2022-12-15',
    cover: '/images/music/compilations/localIsLekker.avif',
    type: 'Compilation',
    link: '#'
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'State Alchemy: Equinox',
    date: '2024-04-20',
    location: 'Berlin, DE',
    venue: 'Tresor (Vault)',
    image: 'https://picsum.photos/seed/berlin/1200/600',
    link: '#'
  },
  {
    id: 'e2',
    title: 'Deep Frequency Ritual',
    date: '2024-05-12',
    location: 'London, UK',
    venue: 'Village Underground',
    image: 'https://picsum.photos/seed/london/1200/600',
    link: '#'
  },
  {
    id: 'e3',
    title: 'Techno Shamanism',
    date: '2024-06-08',
    location: 'Amsterdam, NL',
    venue: 'Radion',
    image: 'https://picsum.photos/seed/amsterdam/1200/600',
    link: '#'
  }
];
