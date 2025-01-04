import { Video } from '../types';

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building a Modern Web Application',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    channel: {
      name: 'TechChannel',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      verified: true
    },
    views: 1200000,
    timestamp: '2 days ago',
    duration: '12:34'
  },
  {
    id: '2',
    title: 'Learn React in 1 Hour',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    channel: {
      name: 'CodeMaster',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      verified: true
    },
    views: 850000,
    timestamp: '5 days ago',
    duration: '8:22'
  },
  {
    id: '3',
    title: 'Epic Mountain Biking Adventure',
    thumbnail: 'https://images.unsplash.com/photo-1544191696-102ad3c882c3',
    channel: {
      name: 'Adventure Sports',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
      verified: true
    },
    views: 2100000,
    timestamp: '1 week ago',
    duration: '18:45'
  },
  {
    id: '4',
    title: 'Easy Gourmet Cooking at Home',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d',
    channel: {
      name: 'Culinary Delights',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857',
      verified: true
    },
    views: 750000,
    timestamp: '3 days ago',
    duration: '15:20'
  },
  {
    id: '5',
    title: 'Photography Tips for Beginners',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    channel: {
      name: 'PhotoPro',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
      verified: false
    },
    views: 425000,
    timestamp: '1 day ago',
    duration: '10:15'
  },
  {
    id: '6',
    title: 'Modern Interior Design Ideas',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
    channel: {
      name: 'Home & Design',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      verified: true
    },
    views: 980000,
    timestamp: '6 days ago',
    duration: '14:30'
  },
  {
    id: '7',
    title: 'Daily Workout Routine',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    channel: {
      name: 'FitLife',
      avatar: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c',
      verified: true
    },
    views: 1500000,
    timestamp: '4 days ago',
    duration: '25:00'
  },
  {
    id: '8',
    title: 'Music Production Masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    channel: {
      name: 'Music Lab',
      avatar: 'https://images.unsplash.com/photo-1567596388756-f6d710c8fc07',
      verified: true
    },
    views: 650000,
    timestamp: '2 weeks ago',
    duration: '45:12'
  }
];