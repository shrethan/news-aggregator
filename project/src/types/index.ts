export interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  categories: string[];
  sources: string[];
  language: string;
  region: string;
}

export interface NewsArticleRaw {
  id: string;
  title: string;
  description: string;
  content: string;
  source: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  sourceCredibility: number;
  titleCredibility: number;
}

export interface NewsArticle extends NewsArticleRaw {
  credibilityScore: number;
}