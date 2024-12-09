import { NewsArticleRaw } from '../../types';

export const healthNews: NewsArticleRaw[] = [
  {
    id: 'health-1',
    title: 'Mediterranean Diet Linked to Longer Life',
    description: 'Large-scale study confirms significant health benefits of Mediterranean eating patterns.',
    source: 'The New England Journal of Medicine',
    url: 'https://nejm.org/diet-study',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
    publishedAt: '2024-03-15T09:30:00Z',
    content: 'Full article content here...',
    sourceCredibility: 0.95,
    titleCredibility: 0.9
  },
  {
    id: 'health-2',
    title: 'MIRACLE WEIGHT LOSS PILL Melts Fat Overnight!!!',
    description: 'Revolutionary new supplement promises instant results without diet or exercise...',
    source: 'Health Trends Weekly',
    url: 'https://healthtrends.com/miracle-pill',
    imageUrl: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6',
    publishedAt: '2024-03-14T11:00:00Z',
    content: 'Full article content here...',
    sourceCredibility: 0.2,
    titleCredibility: 0.1
  },
  {
    id: 'health-3',
    title: 'New Research on Sleep Quality',
    description: 'Study reveals important links between sleep patterns and cognitive function.',
    source: 'Science Daily',
    url: 'https://sciencedaily.com/sleep-study',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
    publishedAt: '2024-03-13T16:00:00Z',
    content: 'Full article content here...',
    sourceCredibility: 0.85,
    titleCredibility: 0.9
  }
];