import { NewsArticleRaw } from '../../types';

export const scienceNews: NewsArticleRaw[] = [
  {
    id: 'sci-1',
    title: 'Breakthrough in Cancer Research',
    description: 'Scientists discover new mechanism for targeting cancer cells with unprecedented precision.',
    source: 'Nature',
    url: 'https://nature.com/cancer-research',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
    publishedAt: '2024-03-15T08:00:00Z',
    content: 'Full article content here...',
    sourceCredibility: 0.95,
    titleCredibility: 0.95
  },
  {
    id: 'sci-2',
    title: 'ALIENS FOUND On Mars Surface!!!',
    description: 'Amateur astronomer claims to have spotted alien structures in NASA photos...',
    source: 'Space Mystery Blog',
    url: 'https://spacemystery.blog/mars-aliens',
    imageUrl: 'https://images.unsplash.com/photo-1451186859696-371d9477be93',
    publishedAt: '2024-03-14T12:00:00Z',
    content: 'Full article content here...',
    sourceCredibility: 0.1,
    titleCredibility: 0.1
  },
  {
    id: 'sci-3',
    title: 'New Species Discovered in Amazon Rainforest',
    description: 'Researchers identify previously unknown primate species in remote region.',
    source: 'Science',
    url: 'https://science.org/amazon-discovery',
    imageUrl: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b',
    publishedAt: '2024-03-13T14:00:00Z',
    content: 'Full article content here...',
    sourceCredibility: 0.95,
    titleCredibility: 0.9
  }
];