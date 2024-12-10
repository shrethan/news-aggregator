import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignInForm } from './components/SignInForm';
import { PreferencesPage } from './components/PreferencesPage';
import { NewsFeed } from './components/NewsFeed';
import { useAuthStore } from './store/authStore';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route
          path="/preferences"
          element={
            <PrivateRoute>
              <PreferencesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/news"
          element={
            <PrivateRoute>
              <NewsFeed />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;