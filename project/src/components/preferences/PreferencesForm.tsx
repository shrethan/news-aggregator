import React from 'react';
import { useUserStore } from '../../store/userStore';
import { Settings } from 'lucide-react';

const categories = [
  'Technology', 'Science', 'Business', 'Health',
  'Entertainment', 'Sports', 'Politics', 'World'
];

const sources = [
  'Reuters', 'BBC News', 'Associated Press',
  'The Guardian', 'Bloomberg', 'TechCrunch'
];

export default function PreferencesForm() {
  const { user, updatePreferences } = useUserStore();

  const handleCategoryChange = (category: string) => {
    if (!user) return;
    const newCategories = user.preferences.categories.includes(category)
      ? user.preferences.categories.filter(c => c !== category)
      : [...user.preferences.categories, category];

    updatePreferences({
      ...user.preferences,
      categories: newCategories,
    });
  };

  const handleSourceChange = (source: string) => {
    if (!user) return;
    const newSources = user.preferences.sources.includes(source)
      ? user.preferences.sources.filter(s => s !== source)
      : [...user.preferences.sources, source];

    updatePreferences({
      ...user.preferences,
      sources: newSources,
    });
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <Settings className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">News Preferences</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={user.preferences.categories.includes(category.toLowerCase())}
                  onChange={() => handleCategoryChange(category.toLowerCase())}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">News Sources</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sources.map((source) => (
              <label
                key={source}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={user.preferences.sources.includes(source.toLowerCase())}
                  onChange={() => handleSourceChange(source.toLowerCase())}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700">{source}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}