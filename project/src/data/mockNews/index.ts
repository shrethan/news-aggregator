import { technologyNews } from './technology';
import { politicsNews } from './politics';
import { businessNews } from './business';
import { sportsNews } from './sports';
import { entertainmentNews } from './entertainment';
import { scienceNews } from './science';
import { NewsArticle } from '../../types';

export const allNews: NewsArticle[] = [
  ...technologyNews,
  ...politicsNews,
  ...businessNews,
  ...sportsNews,
  ...entertainmentNews,
  ...scienceNews,
];

export const getNewsByCategory = (category: string): NewsArticle[] => {
  return allNews.filter(article => article.category.toLowerCase() === category.toLowerCase());
};

export const getNewsByTopic = (topic: string): NewsArticle[] => {
  return allNews.filter(article => 
    article.title.toLowerCase().includes(topic.toLowerCase()) ||
    article.description.toLowerCase().includes(topic.toLowerCase())
  );
};

export const getNewsByRegion = (region: string): NewsArticle[] => {
  // In a real application, this would filter based on article region metadata
  // For mock data, we'll return all news for now
  return allNews;
};

export const getFakeNewsScore = (article: NewsArticle, sensitivity: number): number => {
  // This is a simplified mock implementation
  // In a real application, this would use more sophisticated algorithms
  const baseScore = article.trustScore || 0.5;
  return Math.max(0, Math.min(1, baseScore * (2 - sensitivity)));
};

export {
  technologyNews,
  politicsNews,
  businessNews,
  sportsNews,
  entertainmentNews,
  scienceNews,
};