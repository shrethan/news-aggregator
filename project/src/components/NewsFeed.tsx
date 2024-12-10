import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { allNews } from '../data/mockNews';
import { NewsArticle } from '../types';
import { sortNewsByDate, filterNewsByKeywords, formatPublishDate, getTrustScoreColor, getTrustScoreLabel } from '../utils/newsUtils';
import { Search, AlertTriangle, ExternalLink } from 'lucide-react';

export function NewsFeed() {
  const user = useAuthStore((state) => state.user);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (user) {
      let filteredNews = allNews;
      
      // Filter by user preferences
      if (user.preferences.categories.length > 0) {
        filteredNews = filteredNews.filter(article =>
          user.preferences.categories.includes(article.category)
        );
      }

      if (user.preferences.topics.length > 0) {
        filteredNews = filterNewsByKeywords(filteredNews, user.preferences.topics);
      }

      // Sort by date
      filteredNews = sortNewsByDate(filteredNews);
      setArticles(filteredNews);
    }
  }, [user]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const searchResults = filterNewsByKeywords(allNews, [searchTerm]);
      setArticles(sortNewsByDate(searchResults));
    } else {
      setArticles(sortNewsByDate(allNews));
    }
  };

  const handleArticleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => handleArticleClick(article.url)}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer relative"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ExternalLink className="h-5 w-5 text-gray-600" />
              </div>
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-200"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                  {user?.preferences.fakeNewsDetection.enabled && (
                    <div className="flex items-center">
                      <AlertTriangle className={`h-4 w-4 ${getTrustScoreColor(article.trustScore || 0)} mr-1`} />
                      <span className={`text-xs ${getTrustScoreColor(article.trustScore || 0)}`}>
                        {getTrustScoreLabel(article.trustScore || 0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{article.source}</span>
                  <time>{formatPublishDate(article.publishedAt)}</time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}