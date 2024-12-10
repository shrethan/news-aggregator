import { NewsArticle } from '../../types';

export const technologyNews: NewsArticle[] = [
  {
    id: 'tech-1',
    title: 'Breakthrough in Quantum Computing Achieves New Milestone',
    description: 'Scientists have successfully demonstrated quantum supremacy with a 1000-qubit processor, marking a significant advancement in quantum computing technology.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    source: 'Tech Review',
    url: 'https://techreview.com/quantum-computing-milestone',
    category: 'Technology',
    publishedAt: '2024-03-15T10:30:00Z',
    trustScore: 0.95
  },
  {
    id: 'tech-2',
    title: 'Revolutionary AI Model Achieves Human-Level Understanding',
    description: 'A new artificial intelligence model demonstrates unprecedented natural language comprehension, raising questions about the future of AI development.',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b',
    source: 'AI Insider',
    url: 'https://aiinsider.com/human-level-ai',
    category: 'Technology',
    publishedAt: '2024-03-14T15:45:00Z',
    trustScore: 0.88
  },
  {
    id: 'tech-3',
    title: '5G Network Coverage Expands Globally',
    description: 'Major telecommunications companies announce significant expansion of 5G networks, promising faster connectivity worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    source: 'TechWorld',
    url: 'https://techworld.com/5g-expansion',
    category: 'Technology',
    publishedAt: '2024-03-13T09:20:00Z',
    trustScore: 0.92
  }
];