import { NewsArticle } from '../types';

export const sortNewsByDate = (articles: NewsArticle[]): NewsArticle[] => {
  return [...articles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const filterNewsByKeywords = (articles: NewsArticle[], keywords: string[]): NewsArticle[] => {
  if (!keywords.length) return articles;
  
  return articles.filter(article => 
    keywords.some(keyword => 
      article.title.toLowerCase().includes(keyword.toLowerCase()) ||
      article.description.toLowerCase().includes(keyword.toLowerCase())
    )
  );
};

export const formatPublishDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const getTrustScoreColor = (score: number): string => {
  if (score >= 0.8) return 'text-green-600';
  if (score >= 0.6) return 'text-yellow-600';
  return 'text-red-600';
};

export const getTrustScoreLabel = (score: number): string => {
  if (score >= 0.8) return 'Highly Trustworthy';
  if (score >= 0.6) return 'Moderately Trustworthy';
  return 'Low Trust Score';
};