import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useUserStore } from './store/userStore';
import SignInForm from './components/auth/SignInForm';
import PreferencesForm from './components/preferences/PreferencesForm';
import NewsFeed from './components/news/NewsFeed';
import { Newspaper, Settings, LogOut } from 'lucide-react';

function App() {
  const { user, setUser } = useUserStore();

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <SignInForm />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Newspaper className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold">SmartNews</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  News Feed
                </Link>
                <Link
                  to="/preferences"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Settings className="h-5 w-5" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="py-10">
          <Routes>
            <Route path="/" element={<NewsFeed />} />
            <Route path="/preferences" element={<PreferencesForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;