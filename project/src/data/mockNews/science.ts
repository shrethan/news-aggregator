import { NewsArticle } from '../../types';

export const scienceNews: NewsArticle[] = [
  {
    id: 'sci-1',
    title: 'Scientists Discover New Earth-like Exoplanet',
    description: 'Astronomers have identified a potentially habitable planet orbiting a nearby star, showing promising signs of atmospheric conditions similar to Earth.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    source: 'Science Daily',
    url: 'https://sciencedaily.com/new-exoplanet-discovery',
    category: 'Science',
    publishedAt: '2024-03-10T16:15:00Z',
    trustScore: 0.94
  },
  {
    id: 'sci-2',
    title: 'Breakthrough in Renewable Energy Storage',
    description: 'Researchers develop revolutionary battery technology that could solve the intermittency challenge of renewable energy sources.',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9',
    source: 'Nature Science',
    url: 'https://naturescience.com/battery-breakthrough',
    category: 'Science',
    publishedAt: '2024-03-09T12:30:00Z',
    trustScore: 0.93
  },
  {
    id: 'sci-3',
    title: 'Gene Editing Technique Shows Promise in Disease Treatment',
    description: 'New CRISPR-based therapy demonstrates unprecedented success in treating genetic disorders in clinical trials.',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
    source: 'Medical Science Today',
    url: 'https://medicalsciencetoday.com/gene-editing-breakthrough',
    category: 'Science',
    publishedAt: '2024-03-08T09:45:00Z',
    trustScore: 0.95
  }
];