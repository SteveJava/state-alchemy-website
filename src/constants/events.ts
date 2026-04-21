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
    image: '/images/events/stateAlchemistsRecordLabelEvening/stateAlchemistsRecordLabelEvening.jpg',
    link: '#'
  },
  {
    id: 'e3',
    slug: 'binary-botany-karev',
    title: 'Binary Botany Feat. Karev & Alchemy Circle',
    date: '2024-09-07',
    location: 'Cape Town',
    venue: 'Colorbox Studios',
    image: '/images/events/binaryBotanyKarev/binaryBotanyKarev.jpg',
    link: '#'
  },
  {
    id: 'e4',
    slug: 'binary-botany-rinkadink-akari-system',
    title: 'Binary Botany Feat. Rinkadink & Akari System',
    date: '2024-06-08',
    location: 'Cape Town',
    venue: 'Colorbox Studios',
    image: '/images/events/binaryBotanyRinkadink/binaryBotanyRinkadink.jpg',
    link: '#'
  },
  {
    id: 'e5',
    slug: 'binary-botany-creepy-deep',
    title: 'Binary Botany Feat. Creepy Deep',
    date: '2024-03-30',
    location: 'Cape Town',
    venue: 'Colorbox Studios',
    image: '/images/events/binaryBotanyCreepyDeep/binaryBotanyCreepyDeep.jpg',
    link: '#'
  },
  {
    id: 'e6',
    slug: 'alchemical-stories',
    title: 'Alchemical Stories',
    date: '2024-01-27',
    location: 'Cape Town',
    venue: 'The Spice Yard',
    image: '/images/events/alchemicalStories/alchemicalStories.jpg',
    link: '#'
  }
];
