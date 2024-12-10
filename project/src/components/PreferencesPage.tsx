import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Settings, Globe, Tag, BookOpen } from 'lucide-react';

const categories = ['Technology', 'Politics', 'Business', 'Sports', 'Entertainment', 'Science'];
const topics = ['Climate Change', 'Cryptocurrency', 'AI', 'Healthcare', 'Education'];
const regions = ['Global', 'North America', 'Europe', 'Asia', 'Africa', 'South America', 'Oceania'];

export function PreferencesPage() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  
  const [preferences, setPreferences] = useState({
    categories: user?.preferences.categories || [],
    topics: user?.preferences.topics || [],
    region: user?.preferences.region || 'Global',
    fakeNewsDetection: {
      enabled: user?.preferences.fakeNewsDetection.enabled ?? true,
      sensitivity: user?.preferences.fakeNewsDetection.sensitivity ?? 0.5,
      customKeywords: user?.preferences.fakeNewsDetection.customKeywords || [],
    },
  });

  const handleSave = () => {
    // Save preferences logic here
    navigate('/news');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Settings className="h-8 w-8" />
            Personalize Your News Feed
          </h1>
          <p className="mt-2 text-gray-600">
            Customize your news preferences to get the most relevant content
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Categories
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={preferences.categories.includes(category)}
                    onChange={(e) => {
                      const newCategories = e.target.checked
                        ? [...preferences.categories, category]
                        : preferences.categories.filter((c) => c !== category);
                      setPreferences({ ...preferences, categories: newCategories });
                    }}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Tag className="h-5 w-5" />
              Topics of Interest
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {topics.map((topic) => (
                <label key={topic} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={preferences.topics.includes(topic)}
                    onChange={(e) => {
                      const newTopics = e.target.checked
                        ? [...preferences.topics, topic]
                        : preferences.topics.filter((t) => t !== topic);
                      setPreferences({ ...preferences, topics: newTopics });
                    }}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Region
            </h2>
            <select
              value={preferences.region}
              onChange={(e) => setPreferences({ ...preferences, region: e.target.value })}
              className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Fake News Detection</h2>
            <div className="mt-4 space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.fakeNewsDetection.enabled}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      fakeNewsDetection: {
                        ...preferences.fakeNewsDetection,
                        enabled: e.target.checked,
                      },
                    })
                  }
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span>Enable Fake News Detection</span>
              </label>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Detection Sensitivity
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={preferences.fakeNewsDetection.sensitivity}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      fakeNewsDetection: {
                        ...preferences.fakeNewsDetection,
                        sensitivity: parseFloat(e.target.value),
                      },
                    })
                  }
                  className="mt-1 w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Less Strict</span>
                  <span>More Strict</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleSave}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}