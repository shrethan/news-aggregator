import React from 'react';
import NewsCard from './NewsCard';
import { useUserStore } from '../../store/userStore';
import { mockNews } from '../../data/mockNews';

export default function NewsFeed() {
  const user = useUserStore((state) => state.user);

  const filteredNews = user
    ? mockNews.filter(article =>
        user.preferences.sources.some(source =>
          article.source.toLowerCase().includes(source.toLowerCase())
        )
      )
    : mockNews;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}