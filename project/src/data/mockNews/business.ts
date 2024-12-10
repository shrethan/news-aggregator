import { NewsArticle } from '../../types';

export const businessNews: NewsArticle[] = [
  {
    id: 'bus-1',
    title: 'Tech Giant Announces Revolutionary AI-Powered Platform',
    description: 'Leading technology company unveils new artificial intelligence platform set to transform business operations across industries.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    source: 'Business Insider',
    url: 'https://businessinsider.com/ai-platform-launch',
    category: 'Business',
    publishedAt: '2024-03-13T14:20:00Z',
    trustScore: 0.92
  },
  {
    id: 'bus-2',
    title: 'Global Markets React to Economic Policy Shifts',
    description: 'Stock markets worldwide experience significant movements as major economies announce new fiscal policies.',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    source: 'Financial Times',
    url: 'https://ft.com/global-markets-reaction',
    category: 'Business',
    publishedAt: '2024-03-12T16:30:00Z',
    trustScore: 0.94
  },
  {
    id: 'bus-3',
    title: 'Sustainable Energy Investment Reaches Record High',
    description: 'Global investment in renewable energy projects surpasses traditional energy sectors for the first time in history.',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7',
    source: 'Bloomberg Green',
    url: 'https://bloomberg.com/green-energy-investment',
    category: 'Business',
    publishedAt: '2024-03-11T11:45:00Z',
    trustScore: 0.90
  }
];