import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  signIn: async (email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      email,
      preferences: {
        categories: [],
        topics: [],
        region: 'global',
        fakeNewsDetection: {
          enabled: true,
          sensitivity: 0.5,
          customKeywords: [],
        },
      },
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  signOut: () => set({ user: null, isAuthenticated: false }),
}));