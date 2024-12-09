import { NewsArticleRaw } from '../../types';

export const technologyNews: NewsArticleRaw[] = [
  {
    id: 'tech-1',
    title: 'New Breakthrough in Quantum Computing',
    description: 'Scientists at MIT have achieved a significant milestone in quantum computing, demonstrating stable qubit manipulation at room temperature.',
    content: 'Full article content here...',
    source: 'Reuters',
    url: 'https://reuters.com/article1',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    publishedAt: '2024-03-15T10:00:00Z',
    sourceCredibility: 0.95,
    titleCredibility: 0.85
  },
  {
    id: 'tech-2',
    title: 'SHOCKING: AI Robots Take Over Factory Operations!!!',
    description: 'Controversial claims about AI systems completely replacing human workers...',
    source: 'TechBuzz Daily',
    url: 'https://techbuzz.com/ai-takeover',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    publishedAt: '2024-03-14T09:00:00Z',
    content: 'Full article content here...',
    sourceCredibility: 0.3,
    titleCredibility: 0.2
  },
  {
    id: 'tech-3',
    title: 'Apple Announces Revolutionary AR Glasses',
    description: 'Tech giant unveils next-generation augmented reality device with breakthrough features.',
    source: 'TechCrunch',
    url: 'https://www.apple.com/newsroom/2023/06/introducing-apple-vision-pro',
    imageUrl: 'https://images.unsplash.com/photo-1478416272538-5f7e51dc5400',
    publishedAt: '2024-03-13T15:30:00Z',
    content: 'Full article content here...',
    sourceCredibility: 0.85,
    titleCredibility: 0.9
  },
]