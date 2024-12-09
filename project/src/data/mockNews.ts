import { NewsArticle, NewsArticleRaw } from '../types';
import { calculateCredibilityScore } from '../utils/credibilityCheck';
import { businessNews } from './newsCategories/business';
import { healthNews } from './newsCategories/health';
import { scienceNews } from './newsCategories/science';
import { technologyNews } from './newsCategories/technology';

const rawNewsData: NewsArticleRaw[] = [
  ...technologyNews,
  ...scienceNews,
  ...healthNews,
  ...businessNews,
];

export const mockNews: NewsArticle[] = rawNewsData.map(article => ({
  ...article,
  credibilityScore: calculateCredibilityScore(article.title, article.source)
}));