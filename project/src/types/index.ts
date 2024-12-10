export interface User {
  id: string;
  email: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  categories: string[];
  topics: string[];
  region: string;
  fakeNewsDetection: {
    enabled: boolean;
    sensitivity: number;
    customKeywords: string[];
  };
}

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  source: string;
  url: string;
  category: string;
  publishedAt: string;
  trustScore?: number;
}