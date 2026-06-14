export interface NewsItem {
  id: string;
  title: string;
  category: 'News' | 'Update' | 'Alert';
  date: string;
  image: string;
  excerpt: string;
}

export interface Tournament {
  id: string;
  title: string;
  prizePool: string;
  date: string;
  participants: number;
  maxParticipants: number;
  image: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}

export interface Player {
  id: string;
  name: string;
  avatar: string;
  rank: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Heroic' | 'Grandmaster';
  playStyle: 'Rush' | 'Sniper' | 'Support' | 'Balanced';
  language: 'English' | 'Twi' | 'Ga' | 'Fante';
  kills: number;
  headshotRate: string;
  winRate: string;
}

export interface Clip {
  id: string;
  title: string;
  author: string;
  likes: number;
  thumbnail: string;
  views: number;
}

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Free Fire OB45 Update: Ghanaian Servers Optimized',
    category: 'Update',
    date: '2 hours ago',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0dcb52-9b38-4bf6-b444-f5f02bd6810f/news-1-33ed2773-1781450269911.webp',
    excerpt: 'Garena has announced new server optimizations specifically for West African players, promising lower ping in Accra and Kumasi.'
  },
  {
    id: '2',
    title: 'Team GH Wins West Africa Pro Series',
    category: 'News',
    date: '5 hours ago',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0dcb52-9b38-4bf6-b444-f5f02bd6810f/news-2-db0c2803-1781450268929.webp',
    excerpt: 'Local giants Team GH secured the first place in the regional finals, taking home a massive prize pool.'
  }
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    title: 'Accra Gaming Championship 2024',
    prizePool: 'GH₵ 5,000',
    date: 'Oct 25, 2024',
    participants: 48,
    maxParticipants: 100,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0dcb52-9b38-4bf6-b444-f5f02bd6810f/tournament-1-50c1cacb-1781450269140.webp',
    status: 'Upcoming'
  },
  {
    id: 't2',
    title: 'FireLink Community Scrims',
    prizePool: 'GH₵ 1,000',
    date: 'Oct 20, 2024',
    participants: 32,
    maxParticipants: 32,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0dcb52-9b38-4bf6-b444-f5f02bd6810f/tournament-2-400de308-1781450269815.webp',
    status: 'Ongoing'
  }
];

export const PLAYERS: Player[] = [
  {
    id: 'p1',
    name: 'KojoSniper',
    avatar: 'https://i.pravatar.cc/150?u=kojo',
    rank: 'Grandmaster',
    playStyle: 'Sniper',
    language: 'English',
    kills: 12500,
    headshotRate: '65%',
    winRate: '42%'
  },
  {
    id: 'p2',
    name: 'AmaRush',
    avatar: 'https://i.pravatar.cc/150?u=ama',
    rank: 'Heroic',
    playStyle: 'Rush',
    language: 'Twi',
    kills: 8900,
    headshotRate: '45%',
    winRate: '38%'
  },
  {
    id: 'p3',
    name: 'KwameGhost',
    avatar: 'https://i.pravatar.cc/150?u=kwame',
    rank: 'Diamond',
    playStyle: 'Support',
    language: 'English',
    kills: 4500,
    headshotRate: '30%',
    winRate: '55%'
  }
];

export const CLIPS: Clip[] = [
  {
    id: 'c1',
    title: 'Epic Quadra Kill in Factory!',
    author: 'KojoSniper',
    likes: 1240,
    views: 5400,
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/bd0dcb52-9b38-4bf6-b444-f5f02bd6810f/clip-1-039eff2f-1781450271373.webp'
  }
];

export const DAILY_REDEEM_CODE = 'FF-GH-2024-OCT';
