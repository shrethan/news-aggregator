import { create } from 'zustand';
import { User, UserPreferences } from '../types';

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  updatePreferences: (preferences: UserPreferences) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updatePreferences: (preferences) =>
    set((state) => ({
      user: state.user ? { ...state.user, preferences } : null,
    })),
}));