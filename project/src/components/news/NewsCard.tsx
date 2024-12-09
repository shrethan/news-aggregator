import React, { useState } from 'react';
import { NewsArticle } from '../../types';
import { ExternalLink, AlertTriangle, CheckCircle, Shield, ShieldAlert } from 'lucide-react';
import { analyzeArticle } from '../../utils/credibilityCheck';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const getCredibilityColor = (score: number) => {
    if (score >= 0.8) return 'text-green-600';
    if (score >= 0.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCredibilityIcon = (score: number) => {
    if (score >= 0.8) return <CheckCircle className="h-5 w-5" />;
    return <AlertTriangle className="h-5 w-5" />;
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    const analysis = await analyzeArticle(article);
    setShowAnalysis(true);
    setIsAnalyzing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{article.source}</span>
          <div className={`flex items-center ${getCredibilityColor(article.credibilityScore)}`}>
            {getCredibilityIcon(article.credibilityScore)}
            <span className="ml-1 text-sm">
              {Math.round(article.credibilityScore * 100)}%
            </span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.description}</p>
        
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className={`w-full mb-4 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${isAnalyzing ? 'bg-gray-100 text-gray-500' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
        >
          {isAnalyzing ? (
            <Shield className="h-4 w-4 mr-2 animate-pulse" />
          ) : (
            <ShieldAlert className="h-4 w-4 mr-2" />
          )}
          {isAnalyzing ? 'Analyzing...' : 'Analyze for Fake News'}
        </button>

        {showAnalysis && (
          <div className="mb-4 p-3 bg-gray-50 rounded-md">
            <h4 className="font-medium text-sm mb-2">Analysis Results:</h4>
            <ul className="text-sm space-y-1">
              <li className="flex items-center">
                <span className={getCredibilityColor(article.credibilityScore)}>
                  • Source Reputation: {Math.round(article.sourceCredibility * 100)}%
                </span>
              </li>
              <li className="flex items-center">
                <span className={getCredibilityColor(article.titleCredibility)}>
                  • Title Analysis: {Math.round(article.titleCredibility * 100)}%
                </span>
              </li>
            </ul>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            Read more
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}