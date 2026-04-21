export interface Track {
  id: string;
  title: string;
  artist: string;
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

export const RELEASES: Release[] = [
  // Albums
  {
    id: 'alb-1',
    title: 'Acid Bubble',
    artist: 'Key To Insaniity',
    date: '2025-11-21',
    cover: '/images/music/albums/acidBubble.avif',
    type: 'Album',
    link: 'https://statealchemymusic.bandcamp.com/album/album-acid-bubble',
    slug: 'acid-bubble',
    description: "Key To Insaniity drops debut full length album 'Acid Bubble' !! This is an 8-track trip built to shatter the ceiling between sub-genres. It's concentrated, high-BPM fuel for the floor—a psychedelic pressure cooker where every sonic layer is designed for maximum punch. This meticulously crafted piece of alien audio is a true reflection of an insight into the mind of one of South Africa's hottest producers! Take the flow and groove of conventional psy, and fuse it with the pounding high speed power of hitech beats and you complete Insaniity!! Featuring a collaboration track with another one of our label artist's ZDLCK, fusing the organic with the mechanical to form something of a true unique nature. Please lose your mind with us and dive right into this masterpiece! Strap in for the ride.",
    bandcamp: {
      type: 'album',
      id: '3220687225'
    },
    tracks: [
      { id: "t1", title: 'Code Cannabis', artist: 'Key To Insaniity', audioSrc: '/audio/albums/acidBubble/codeCannabis.mp3' },
      { id: "t2", title: 'Time Twister', artist: 'Key To Insaniity', audioSrc: '/audio/albums/acidBubble/timeTwister.mp3' },
      { id: "t3", title: 'Dream Dissolver', artist: 'Key To Insaniity', audioSrc: '' },
      { id: "t4", title: 'Chakra Attack', artist: 'Key To Insaniity', audioSrc: '' },
      { id: "t5", title: 'Insecto Gadget (with ZDLCK)', artist: 'Key To Insaniity & ZDLCK', audioSrc: '' },
      { id: "t6", title: 'Acid Bubble', artist: 'Key To Insaniity', audioSrc: '' },
      { id: "t7", title: 'Modified Magic', artist: 'Key To Insaniity', audioSrc: '' },
      { id: "t8", title: 'Singular State', artist: 'Key To Insaniity', audioSrc: '' }
    ]
  },
  {
    id: 'alb-2',
    title: 'Potion of Emotion',
    artist: 'Gray Matter',
    date: '2025-02-21',
    cover: '/images/music/albums/potionOfEmotion.avif',
    type: 'Album',
    link: 'https://statealchemymusic.bandcamp.com/album/album-potion-of-emotion',
    slug: 'potion-of-emotion',
    description: "Welcome to Potion of Emotion. We, here at Gray Matter - have been watching you - analyzing every action and magick. Use your passionate emotions as a focusing tool for our inter-dimensional program. You display a strong connection to these dimensional portals. The portal config is a perfect match. Shall we commence with a preliminary astral dive?",
    tracks: [
      { id: "t1", title: 'III', artist: 'Gray Matter', audioSrc: '' },
      { id: "t2", title: 'Hive Minded', artist: 'Gray Matter', audioSrc: '' },
      { id: "t3", title: 'Scholar Patrol', artist: 'Gray Matter', audioSrc: '' },
      { id: "t4", title: 'Gates of Encounters', artist: 'Gray Matter', audioSrc: '' },
      { id: "t5", title: 'You-Zoo-Maki', artist: 'Gray Matter', audioSrc: '' },
      { id: "t6", title: 'Agothas Interlude', artist: 'Gray Matter', audioSrc: '' },
      { id: "t7", title: 'Dark Waters', artist: 'Gray Matter', audioSrc: '' },
      { id: "t8", title: 'Ndlovu', artist: 'Gray Matter', audioSrc: '' },
      { id: "t9", title: 'Deja Vu', artist: 'Gray Matter', audioSrc: '' },
      { id: "t10", title: 'Character Development', artist: 'Gray Matter', audioSrc: '' },
      { id: "t11", title: 'The Tribe has Spoken (Outro)', artist: 'Gray Matter', audioSrc: '' }
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
    link: 'https://statealchemymusic.bandcamp.com/album/ep-a-serenade-amidst-snowfall',
    slug: 'a-serenade-amidst-snowfall',
    description: `beneath the Frostbound Canopy,\nthe silence grows deep and wild\nbranches breathe in crystal light.\nfrom far beyond the frozen trunks,\na shadow moves, slow and still\nwrapped in the embrace of Winter's Veil.\nin this calm, the forest speaks,\nsoft voices stir the stillness\nthe echo of Glacial Whispers.\neach note becomes a memory,\na shimmer of life in the cold\nthis is A Serenade Amidst Snowfall.`,
    tracks: [
      { id: "t1", title: 'Frostbound Canopy', artist: 'ZDLCK', audioSrc: '' },
      { id: "t2", title: 'Winter’s Veil', artist: 'ZDLCK & Revoke', audioSrc: '' },
      { id: "t3", title: 'Glacial Whispers', artist: 'ZDLCK', audioSrc: '' },
      { id: "t4", title: 'A Serenade Amidst Snowfall', artist: 'ZDLCK', audioSrc: '' }
    ]
  },
  {
    id: 'ep-2',
    title: 'Chronoform',
    artist: 'Blether',
    date: '2025-07-04',
    cover: '/images/music/ep/chronoform.avif',
    type: 'EP',
    link: 'https://statealchemymusic.bandcamp.com/album/ep-chronoform',
    slug: 'chronoform',
    description: `We are proud to announce the debut EP "Chronoform" from our local master blaster BLETHER!!\n \n With Chronoform, Blether delivers a high-voltage debut EP that dives deep into the raw edges of the human experience: sound, tension, and memory.\n \n Across three tracks, he weaves hypnotic grooves, warped synths, and brain-bending sound design into a psychedelic journey that's as playful as it is intense.\n \n Each track taps into a different part of what makes us tick — the thrill of a sonic punch, the push and pull of inner battles, the strange loops of time and memory. It's music for moving bodies and wandering minds.\n \n Whether you're lost in the crowd or deep in your headphones, Chronoform doesn't just keep the energy high, it makes you feel something under the surface.`,
    tracks: [
      { id: "t1", title: 'Chronoform', artist: 'Blether', audioSrc: '' },
      { id: "t2", title: 'Conflicts', artist: 'Blether', audioSrc: '' },
      { id: "t3", title: `That's The Sound`, artist: 'Blether', audioSrc: '' }
    ]
  },
  {
    id: 'ep-3',
    title: 'Voidrealm',
    artist: 'Voidwalker',
    date: '2025-03-21',
    cover: '/images/music/ep/voidrealm.avif',
    type: 'EP',
    link: 'https://statealchemymusic.bandcamp.com/album/ep-voidrealm',
    slug: 'voidrealm',
    description: `After countless hours of musical introspection and a relentless pursuit of his craft, Voidwalker is finally ready to share his debut offering with the world. VoidRealm is a descent into the depths of his mind across three tracks, blending darkpsy fundamentals, driving and dancefloor-friendly elements, and a sprinkling of pop-culture references and memes for good measure. This EP is an invitation to see psychedelic music through his eyes, a reflection of the mind behind the tunes, and a walk through a realm of nothing and everything at the same time.`,
    tracks: [
      { id: "t1", title: 'Shady Maneuvers', artist: 'Voidwalker', audioSrc: '' },
      { id: "t2", title: `Nintendon't`, artist: 'Voidwalker', audioSrc: '' },
      { id: "t3", title: 'Doombringer', artist: 'Voidwalker', audioSrc: '' }
    ]
  },
  {
    id: 'ep-4',
    title: 'Electric Boogie Machine',
    artist: 'Phylth',
    date: '2024-09-20',
    cover: '/images/music/ep/electricBoogieMachine.avif',
    type: 'EP',
    link: 'https://statealchemymusic.bandcamp.com/album/ep-electric-boogie-machine',
    slug: 'electric-boogie-machine',
    description: `Phylth is the visionary project of Cape Town's rising psychedelic artist, Jos van Veen. \n \n With deep roots in funk and groove, and a background as a guitarist heavily influenced by jazz, Jos has channeled these elements into a unique, evolving sound. \n \n We're thrilled to share his debut release with the world and can't wait for you to experience the music firsthand!`,
    tracks: [
      { id: "t1", title: 'Electric Boogie Machine', artist: 'Phylth', audioSrc: '' },
      { id: "t2", title: 'Groove Operator', artist: 'Phylth', audioSrc: '' },
      { id: "t3", title: `Bootsy's One`, artist: 'Phylth', audioSrc: '' }
    ]
  },
  {
    id: 'ep-5',
    title: 'Why Not?',
    artist: 'Key To Insaniity',
    date: '2024-07-12',
    cover: '/images/music/ep/whyNot.avif',
    type: 'EP',
    link: 'https://statealchemymusic.bandcamp.com/album/ep-why-not',
    slug: 'why-not',
    description: `We're thrilled to announce our latest release: a 4-track EP by Key To Insaniity! \n \n Alex is one of South Africa's standout producers, hailing from Johannesburg, known in the Psytrance scene, crafts high-energy psychedelic music. A strong proponent of Hi-Tech, he's been a driving force in Johannesburg's psychedelic music community. \n \n Titled "Why Not?", the EP features 4 intricately crafted solo tracks that showcase his unique sound—a fusion of alien and robotic influences seamlessly woven into pulsating basslines . This EP is a true tale of artistic expression through technology and alien frequencies. WHY NOT delve in??`,
    tracks: [
      { id: "t1", title: 'Just Move', artist: 'Key To Insaniity', audioSrc: '' },
      { id: "t2", title: 'Why Not?', artist: 'Key To Insaniity', audioSrc: '' },
      { id: "t3", title: 'Only Human', artist: 'Key To Insaniity', audioSrc: '' }
    ]
  },
  {
    id: 'ep-6',
    title: 'Moss Monkey',
    artist: 'Killawatt',
    date: '2024-03-14',
    cover: '/images/music/ep/mossMonkey.avif',
    type: 'EP',
    link: 'https://statealchemymusic.bandcamp.com/album/ep-moss-monkey',
    slug: 'moss-monkey',
    description: `Killawatt is the brainchild of Byron Sampson, a highly esteemed figure in South Africa's psychedelic community. With over 15 years of experience spinning and crafting beats, Byron boasts a portfolio that includes releases on both local and international labels as well as performing at every major local party as well as playing internationally. \n \n This EP marks his debut release as Killawatt, showcasing four meticulously produced tracks. One Chillout piece and three high-energy Dark Psy compositions. \n \n We are honored to present Byron's inaugural EP on State Alchemy Music, alongside our roster of talented local artists. Byron's influence reverberates throughout South Africa's psychedelic community, and this release stands as a testament to his unwavering passion and dedication to the genre over the years.`,
    tracks: [
      { id: "t1", title: 'Intro', artist: 'Chillawatt', audioSrc: '' },
      { id: "t2", title: 'Condensation', artist: 'Killawatt', audioSrc: '' },
      { id: "t3", title: 'Moaning Marshmallow', artist: 'Killawatt', audioSrc: '' },
      { id: "t4", title: '100 Tabs', artist: 'Killawatt', audioSrc: '' }
    ]
  },
  {
    id: 'ep-7',
    title: 'Africhemy',
    artist: 'Compos Mentis',
    date: '2024-01-28',
    cover: '/images/music/ep/africhemy.avif',
    type: 'EP',
    link: 'https://statealchemymusic.bandcamp.com/album/ep-africhemy',
    slug: 'africhemy',
    description: `Africhemy is the inaugural release from State Alchemy Music label Manager, Profound, in his new live act persona - Compos Mentis. This 2-track EP is a sonic journey meticulously crafted to merge the rhythmic heartbeat of traditional African sounds with the profound alchemical insights of psytrance. \n \n Dive into the rich tapestry of Africhemy as it unfolds a narrative that not only explores the traditional beats of psytrance but also celebrates the diverse and vibrant cultures of South Africa. Compos Mentis weaves together aural landscapes that pay homage to his native roots, seamlessly blending traditional African elements with cutting-edge production techniques. \n \n Each track within Africhemy is a sonic alchemy, carefully thought out and executed to create a transformative experience for the listener. The EP encapsulates the essence of State Alchemy Music's vision, attempting to push the boundaries of psytrance by infusing it with cultural authenticity and deep storytelling.`,
    tracks: [
      { id: "t1", title: 'Africhemy', artist: 'Compos Mentis', audioSrc: '' },
      { id: "t2", title: 'The Highveld', artist: 'Compos Mentis', audioSrc: '' }
    ]
  },
  {
    id: 'ep-8',
    title: 'Trollstigen',
    artist: 'Skörgen',
    date: '2023-12-15',
    cover: '/images/music/ep/trollstigen.avif',
    type: 'EP',
    link: 'https://statealchemymusic.bandcamp.com/album/ep-trollstigen',
    slug: 'trollstigen',
    description: `State Alchemy Music is proud to present to you: \n \n Skörgen's debut EP - "Trollstigen" \n \n Trollstigen, the mountains are not just a physical landscape but a gateway to a magical realm where trolls and humans could, under the right circumstances, coexist and share in the enchantment of the night. Trolls, with their magical and mischievous nature, would roam the valleys and peaks of Trollstigen. They hid in the caves and crevices during the day waiting for the sun to set until they could create enchanting music and dance under the Northern Lights, especially when the moonlight bathed the mountains in an ethereal glow.`,
    tracks: [
      { id: "t1", title: 'Skogsrå', artist: 'Skörgen', audioSrc: '' },
      { id: "t2", title: 'Nøkken', artist: 'Skörgen & Urjasa', audioSrc: '' },
      { id: "t3", title: 'Bråkskalle', artist: 'Skörgen & ZDLCK', audioSrc: '' },
      { id: "t4", title: 'Synthesthesia', artist: 'Skörgen', audioSrc: '' }
    ]
  },
  {
    id: 'ep-9',
    title: 'Self Control',
    artist: 'Gray Matter',
    date: '2023-04-14',
    cover: '/images/music/ep/selfControl.avif',
    type: 'EP',
    link: 'https://statealchemymusic.bandcamp.com/album/ep-self-control',
    slug: 'self-control',
    description: `Self Control. \n \n Welcome Candidate for Initiation. \n \n We have been paying close attention - analyzing every sound, symbol, and interaction. \n Through sound, we will proceed to use your passion as a concentration tool for inter-dimensional portal configuration and travel. \n The music displays an overwhelming connection to higher planes of existence. \n \n Uncover the Origin of your soul. Use your passion to bring forth shifts in this reality and beyond. Your energy is a perfect match. Time is illusory. You exist not only here, but also above. You're in control of your selves. \n \n Welcome to Self Control.`,
    tracks: [
      { id: "t1", title: 'Orca Stration', artist: 'Gray Matter', audioSrc: '' },
      { id: "t2", title: 'Self Control', artist: 'Gray Matter', audioSrc: '' },
      { id: "t3", title: 'Seraphim Sangria', artist: 'Gray Matter', audioSrc: '' },
      { id: "t4", title: 'Hybridization', artist: 'Gray Matter', audioSrc: '' }
    ]
  },

  // Singles
  {
    id: 's-1',
    title: 'Strange Radio',
    artist: 'Killer B, Hegchick',
    date: '2025-06-27',
    cover: '/images/music/singles/strangeRadio.avif',
    type: 'Single',
    link: 'https://statealchemymusic.bandcamp.com/track/single-strange-radio-free-download',
    slug: 'strange-radio',
    description: `Veteran South African psytrance artists Killer B and Hegchick join forces on their latest single, "Strange Radio". Well-respected figures in the local and international trance community, the duo is known for their dynamic presence behind the decks and long-standing contribution to the scene as both performers and producers. \n \n Strange Radio delivers a classic nighttime sound, characterised by playful, intricate leads, precise grid work, and atmospheric depth. Built on a strong, rolling groove, the track balances technical sophistication with dancefloor energy reflecting the duo's years of experience and intuitive synergy. \n \nThis release is a clear expression of their combined style - immersive, powerful, and distinctly psychedelic! \n \n Tune in, tune out and enjoy!`,
    tracks: [
      { id: "t1", title: 'Strange Radio', artist: 'Killer B, Hegchick', audioSrc: '' }
    ]
  },
  {
    id: 's-2',
    title: 'You People',
    artist: 'Voidwalker',
    date: '2024-04-19',
    cover: '/images/music/singles/youPeople.avif',
    type: 'Single',
    link: 'https://statealchemymusic.bandcamp.com/track/single-you-people-158',
    slug: 'you-people',
    description: `Get ready to plunge into the darkness with Voidwalker's latest single, "You People," on State Alchemy Music. Inspired by the unsettling notion of once-familiar comforts morphing into harbingers of fear and anxiety, this darkpsy masterpiece takes listeners on a haunting journey through the shadows of the mind. \n \n With pulsating beats and eerie atmospheric textures, "You People" delves into the murky recesses of the subconscious, where the line between safety and peril becomes blurred. Voidwalker skillfully weaves intricate layers of sound, evoking a sense of unease that creeps beneath the skin and lingers long after the music fades.`,
    tracks: [
      { id: "t1", title: 'You People', artist: 'Voidwalker', audioSrc: '' }
    ]
  },
  {
    id: 's-3',
    title: 'Turkish Delight',
    artist: 'Akuum',
    date: '2023-11-02',
    cover: '/images/music/singles/turkishDelight.avif',
    type: 'Single',
    link: 'https://statealchemymusic.bandcamp.com/track/single-turkish-delight-free-download',
    slug: 'turkish-delight',
    description: `Step into the dynamic soundscape crafted by Akuum, a psytrance luminary rooted in the rich tapestry of African origins. Akuum, a name echoing with depth and meaning—translating to "Your powers are mine," embodying strength, a declaration that all is well, and a nod to honor. \n \n In the sonic wilderness sculpted by Akuum, beats transcend mere rhythm; they become conduits of shared strength and resilience. The amalgamation of African roots and pulsating trance beats forms a unique auditory journey—a narrative where melodies speak of empowerment, and the rhythm is an unspoken agreement that, indeed, all is well. \n \n Akuum's sonic arsenal isn't just a composition; it's a declaration. In the rhythmic embrace, find a space where the ancestral meets the avant-garde. Here, beats are not just heard; they are felt, coursing through veins as a reminder that strength is a collective dance, and honor is woven into every sonic strand. \n \n As you step onto the dance floor of Akuum's creation, there's no need for grandiose promises or theatrical declarations. The music itself speaks—a rhythmic dialect of resilience, a pulsating manifesto of well-being, and an unwavering salute to honor. Akuum invites you to experience not just a performance, but a sonic communion where your powers merge seamlessly with the beats, and the music resonates with the essence of strength, well-being, and honor.`,
    tracks: [
      { id: "t1", title: 'Turkish Delight', artist: 'Akuum', audioSrc: '' }
    ]
  },
  {
    id: 's-4',
    title: 'Woogie Bonderland',
    artist: 'Blether',
    date: '2023-05-01',
    cover: '/images/music/singles/woogieBonderland.avif',
    type: 'Single',
    link: 'https://statealchemymusic.bandcamp.com/track/single-woogie-bonderland-free-download',
    slug: 'woogie-bonderland',
    description: `Blether has released a brand spanking new single called "Woogie Bonderland", and it's now available for FREE DOWNLOAD. The track is a captivating blend of funk and groove that will get you and the crowd moving from the very first beat. \n \n The start of Woogie Bonderland sets the tone for a high-energy, danceable experience, as the track carries on it picks up new sounds and influences, then finally... That sample comes in and suddenly... Everyone, everything goes CRAZY! \n \n Blether's signature style shines through, with a combination of funky basslines, catchy melodies, and dynamic percussion that make this single stand out. Blether's production in "Woogie Bonderland" is top-notch, with crisp sound engineering and a polished finish that showcases Blether's skills as a producer. We are so excited to see what comes from him this year!`,
    tracks: [
      { id: "t1", title: 'Woogie Bonderland', artist: 'Blether', audioSrc: '' }
    ]
  },

  // Compilations
  {
    id: 'comp-1',
    title: 'Best of 2 Years',
    artist: 'State Alchemy Music',
    date: '2025-05-02',
    cover: '/images/music/compilations/bestOf2Years.avif',
    type: 'Compilation',
    link: 'https://statealchemymusic.bandcamp.com/album/va-best-of-2-years-free-download',
    slug: 'best-of-2-years',
    description: `State Alchemy Music is proud to present our two year anniversary release with a free download titled "Best of 2 Years" which contains 13 hand picked tracks from our discography. \n \n Huge shoutout to all of you who have supported our collective these past two years and have really helped us to be able to do what we do as a collective. \n \n Enjoy this free release and let us know in the comments which track is your favourite and why!`,
    tracks: [
      { id: "t1", title: 'Turkish Delight', artist: 'Akuum', audioSrc: '' },
      { id: "t2", title: 'Groove Operator', artist: 'Phylth', audioSrc: '' },
      { id: "t3", title: 'Woogie Bonderland', artist: 'Blether', audioSrc: '' },
      { id: "t4", title: 'Light Travel', artist: 'Kesev Hazer, Z3nkai', audioSrc: '' },
      { id: "t5", title: 'Ndlovu', artist: 'Gray Matter', audioSrc: '' },
      { id: "t6", title: 'Truth Seekers', artist: 'Aranya, Loom', audioSrc: '' },
      { id: "t7", title: 'The Highveld', artist: 'Compos Mentis', audioSrc: '' },
      { id: "t8", title: 'Condensation', artist: 'Killawatt', audioSrc: '' },
      { id: "t9", title: 'Mad Man', artist: 'Rafyx', audioSrc: '' },
      { id: "t10", title: `Nintendon't`, artist: 'Voidwalker', audioSrc: '' },
      { id: "t11", title: 'Shady Maneuvers', artist: 'Voidwalker', audioSrc: '' },
      { id: "t12", title: 'Bråkskalle', artist: 'Skörgen, ZDLCK', audioSrc: '' },
      { id: "t13", title: 'Cosmic Enigma', artist: 'Morkum', audioSrc: '' },
      { id: "t14", title: 'Just Move', artist: 'Key To Insaniity', audioSrc: '' }
    ]
  },
  {
    id: 'comp-3',
    title: 'Stroke the Furry Bassline',
    artist: 'A Geoffrey',
    date: '2025-01-24',
    cover: '/images/music/compilations/strokeTheFurryBassline.avif',
    type: 'Compilation',
    link: 'https://statealchemymusic.bandcamp.com/album/va-stroke-the-furry-bassline',
    slug: 'stroke-the-furry-bassline',
    tracks: [
      { id: "t1", title: 'Scientific Development', artist: 'Flooting Grooves', audioSrc: '' },
      { id: "t2", title: 'Broken Bell', artist: 'Zorggi', audioSrc: '' },
      { id: "t3", title: 'Bugs Brothers', artist: 'Sinbad, Jahshua', audioSrc: '' },
      { id: "t4", title: 'Into Space', artist: 'Digital Dream', audioSrc: '' },
      { id: "t5", title: 'Emotional', artist: 'Dezzert', audioSrc: '' },
      { id: "t6", title: 'Wave Rider', artist: 'Key to Insaniity', audioSrc: '' },
      { id: "t7", title: 'Searching for Knowledge', artist: 'Unexpected, Adrenaline Rush', audioSrc: '' },
      { id: "t8", title: 'Mad Man', artist: 'Rafyx', audioSrc: '' },
      { id: "t9", title: 'The Jabberwock', artist: 'Jahshua', audioSrc: '' },
      { id: "t10", title: 'Wired for Trouble', artist: 'Compos Mentis', audioSrc: '' },
      { id: "t11", title: 'Sacred Dragonfly Magic', artist: 'Simon Hayes', audioSrc: '' }
    ]
  },
  {
    id: 'comp-4',
    title: 'Local is Lekker',
    artist: 'State Alchemy Music',
    date: '2024-05-16',
    cover: '/images/music/compilations/localIsLekker.avif',
    type: 'Compilation',
    link: 'https://statealchemymusic.bandcamp.com/album/va-local-is-lekker-free-download',
    slug: 'local-is-lekker',
    description: `Local is Lekker is a vibrant movement uniting creative minds across South Africa. Every element – from the infectious tracks to the mastered sounds and stunning artwork – is proudly homegrown. This free 16-track compilation showcases the incredible diversity of our local music scene, with something for every taste. Dive in and discover the fresh sounds shaping South Africa's musical landscape! \n \n Local is Lekker!`,
    tracks: [
      { id: "t1", title: 'Bat Country', artist: 'Hydrosplifix', audioSrc: '' },
      { id: "t2", title: 'OA', artist: 'ARK', audioSrc: '' },
      { id: "t3", title: 'Dolka Pot', artist: 'Phylth', audioSrc: '' },
      { id: "t4", title: 'Department of Alien Affairs', artist: 'Dungeon Master', audioSrc: '' },
      { id: "t5", title: 'Tenuiflora', artist: 'Acacia', audioSrc: '' },
      { id: "t6", title: 'Community of Resonance', artist: 'Garden of Eden', audioSrc: '' },
      { id: "t7", title: 'Wander Boogie', artist: 'Keelo', audioSrc: '' },
      { id: "t8", title: 'Sixto', artist: 'Killawatt', audioSrc: '' },
      { id: "t9", title: 'Ja, no, Lekker, man!', artist: 'Lysergic Babble', audioSrc: '' },
      { id: "t10", title: 'The Great Gatsby', artist: 'Gray Matter', audioSrc: '' },
      { id: "t11", title: 'Acidxiety', artist: 'Compos Mentis', audioSrc: '' },
      { id: "t12", title: 'Loadshredding', artist: 'Mr Bud', audioSrc: '' },
      { id: "t13", title: 'Fractal du Flora', artist: 'ZDLCK, Chimerical', audioSrc: '' },
      { id: "t14", title: 'Not Sponsored', artist: 'Voidwalker', audioSrc: '' },
      { id: "t15", title: 'Kinda Forbidden', artist: 'Key to Insaniity', audioSrc: '' },
      { id: "t16", title: 'Magical Mushroom', artist: 'Digital Dream', audioSrc: '' }
    ]
  },
  {
    id: 'comp-5',
    title: 'Equilibrium',
    artist: 'Killer B',
    date: '2023-08-18',
    cover: '/images/music/compilations/equilibrium.avif',
    type: 'Compilation',
    link: 'https://statealchemymusic.bandcamp.com/album/va-equilibrium',
    slug: 'equilibrium',
    description: `"Equilibrium" is a fresh and exciting 12-track VA that has been carefully curated to bring you the ultimate musical experience. Killer B has put his heart and soul into selecting each track, ensuring a perfect balance of vibes and energy throughout the entire compilation. \n \n From mesmerizing melodies to pulsating beats, "Equilibrium" has something for every music lover out there. Whether you're into techno, house, or trance, this compilation caters to all tastes and promises to keep you grooving till the break of dawn!`,
    tracks: [
      { id: "t1", title: 'Adaptive Friction', artist: 'Gozonji', audioSrc: '' },
      { id: "t2", title: 'Primitive Instincts', artist: 'Skanoh, Krel', audioSrc: '' },
      { id: "t3", title: 'Skaaar!!', artist: 'Compos Mentis, Killer B', audioSrc: '' },
      { id: "t4", title: 'Inside Job', artist: 'Blether', audioSrc: '' },
      { id: "t5", title: 'You All Sick', artist: 'Shresth', audioSrc: '' },
      { id: "t6", title: 'Jungle Juice (Inpsyde Out Remix', artist: `LabRat, Doom's`, audioSrc: '' },
      { id: "t7", title: 'Boggie Woggie', artist: 'Ancient Vision, Backdohm', audioSrc: '' },
      { id: "t8", title: 'Primaris', artist: 'Mystic.Inc', audioSrc: '' },
      { id: "t9", title: 'Psilocybin', artist: 'Eeriegeist', audioSrc: '' },
      { id: "t10", title: 'In The Benn Inn Ging', artist: 'Psycatrick', audioSrc: '' },
      { id: "t11", title: 'Light Travel', artist: 'Kesev, hazer, Z3nkai', audioSrc: '' },
      { id: "t12", title: 'Frenetic Wednesday', artist: 'Frenetic Frequency', audioSrc: '' }
    ]
  },
  {
    id: 'comp-6',
    title: 'Forgotten Fynbos',
    artist: 'ZDLCK',
    date: '2025-04-04',
    cover: '/images/music/compilations/forgottenFynbos.avif',
    type: 'Compilation',
    link: 'https://statealchemymusic.bandcamp.com/album/va-forgotten-fynbos-free-download',
    slug: 'forgotten-fynbos',
    description: `Amidst the rugged mountains and sweeping valleys of South Africa's Western Cape, a unique tale unfolds. \n \n "Forgotten Fynbos" \n \n This Various Artist album compiled by ZDLCK started as a concept in early 2023, and has blossomed into an unstoppable force of nature. \n \n Here, the enchanting world of fynbos, a diverse floral kingdom, converges with organic rhythms. As the sun rises over the ancient land, delicate indigenous blooms sway to an unheard melody, their vibrant colors a visual symphony that harmonizes with the energy of the earth. In this wild expanse, a group of visionary artists find inspiration. They immerse themselves in the secret life of fynbos, capturing it's essence through textures that mimic the whisper of winds through shrubs and the dance of insects among the petals. Each track mirrors an integral part of the ever so intricate ecosystem, from the serene valleys to the high peaks. \n \n This album is a sensorial journey. A sonic translation of the fynbos spirit, inviting listeners to dance to the rhythm of nature's vibrations and join in celebrating South African indigenous flora. \n \n This release, like our incredible indigenous flora, is very special in more aspects than just the music. As most of us South Africans know, our mountains have been ravaged by fires in recent years. This takes a lot of resources and effort on the part of fire fighters to keep us safe and the fires contained. \n \n The funds raised from support for this VA will be donated directly to the Volunteer Wildfire Services to assist them in being able to combat any future fires.`,
    tracks: [
      { id: "t1", title: `(intro) Disa's Dream`, artist: 'Talisman', audioSrc: '' },
      { id: "t2", title: 'Gavroche', artist: 'Skörgen', audioSrc: '' },
      { id: "t3", title: 'Binary Junk', artist: 'Omja', audioSrc: '' },
      { id: "t4", title: 'Of Embers And Blooms', artist: 'Argaleth & ZDLCK', audioSrc: '' },
      { id: "t5", title: 'Queen Of The Cape', artist: 'Shroomzoom', audioSrc: '' },
      { id: "t6", title: 'Nova Peak Construct', artist: 'Spectral Viewer', audioSrc: '' },
      { id: "t7", title: 'B. Oc', artist: 'Lysergic Babble', audioSrc: '' },
      { id: "t8", title: 'Suvavamehn', artist: 'Garden of Eden vs Ebb & Flow', audioSrc: '' },
      { id: "t9", title: 'Cosmic Engima', artist: 'Morkum', audioSrc: '' },
      { id: "t10", title: 'Viridis', artist: 'Acacia', audioSrc: '' },
      { id: "t11", title: 'Rooibos', artist: 'Gray Matter', audioSrc: '' },
      { id: "t12", title: 'Acid Jungle', artist: 'IDawa vs Klinoman', audioSrc: '' },
      { id: "t13", title: 'Mesmerized', artist: 'Crooked Mind', audioSrc: '' },
      { id: "t14", title: '(outro) Smoke & Tranquility', artist: 'Chillawatt', audioSrc: '' }
    ]
  },
  {
    id: 'comp-7',
    title: 'It Came To Pass',
    artist: 'Profound',
    date: '2026-04-24',
    cover: '/images/music/compilations/itCameToPass.avif',
    type: 'Compilation',
    link: 'https://statealchemymusic.bandcamp.com/album/it-came-to-pass',
    slug: 'it-came-to-pass',
    description: `It Came to Pass brings together nine artists under a single concept. The intersection of the spiritual and the unknown. \n \n Taking cues from biblical iconography and the idea of \"higher forms\", this VA explores themes of presence, judgement, and transformation. There's a clear sense of movement throughout, shifting from tension to release, from chaos to clarity. \n \n Balance sits at the core of the release. Lighter, more melodic moments contrast against darker, more driving cuts, creating a steady push and pull from start to finish. Each artist approaches the concept from a different angle, yet the tone remains consistent. Nothing feels out of place. \n \n This is a VA that unfolds over time. Subtle details, layered textures, and shifts in energy reveal themselves the deeper you go. It rewards attention.`,
    tracks: [
      { id: "t1", title: 'Grumpy Palace', artist: `Oxyflux, Mental Projection`, audioSrc: '' },
      { id: "t2", title: 'Decalcification', artist: 'Anarkick', audioSrc: '' },
      { id: "t3", title: `Don't Get Abducted`, artist: 'Slide, Gray matter', audioSrc: '' },
      { id: "t4", title: 'Synaptic Overload', artist: 'Jahshua', audioSrc: '' },
      { id: "t5", title: 'Sonic Speedster', artist: 'Key To Insaniity', audioSrc: '' },
      { id: "t6", title: 'The Allseeing Eye', artist: 'Creepy Deep, Karev, Shroomzoom', audioSrc: '' },
      { id: "t7", title: 'DX21', artist: 'Cyk', audioSrc: '' },
      { id: "t8", title: 'Sacred Decay', artist: 'Eliza', audioSrc: '' },
      { id: "t9", title: 'It Came To Pass', artist: 'Voidwalker, Compos Mentis', audioSrc: '' }
    ]
  },
  {
    id: 'comp-8',
    title: 'The Law of Equivalent Exchange',
    artist: 'Profound',
    date: '2023-3-6',
    cover: '/images/music/compilations/theLawOfEquivalentExchange.avif',
    type: 'Compilation',
    link: 'https://statealchemymusic.bandcamp.com/album/va-the-law-of-equivalent-exchange',
    slug: 'the-law-of-equivalent-exchange',
    description: ``,
    tracks: [
      { id: "t1", title: 'Shagadelic', artist: 'Blether', audioSrc: '' },
      { id: "t2", title: `Disintegrating Matter`, artist: 'Dungeon Master', audioSrc: '' },
      { id: "t3", title: 'Prima Materia', artist: 'Nergil, Seraburayka', audioSrc: '' },
      { id: "t4", title: 'Particle Transmission', artist: 'Eternity, Defective Model', audioSrc: '' },
      { id: "t5", title: 'Whispering Loser', artist: 'Killawatt', audioSrc: '' },
      { id: "t6", title: 'Just Say No', artist: 'creepy Deep, Dezzert', audioSrc: '' },
      { id: "t7", title: 'Jupiterian Entity', artist: 'Kacid', audioSrc: '' },
      { id: "t8", title: 'Truth Seekers', artist: 'Aranya, Loom', audioSrc: '' },
      { id: "t9", title: 'The Search', artist: 'Malákia', audioSrc: '' }
    ]
  }
];
