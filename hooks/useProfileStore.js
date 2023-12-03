import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profile: {},
  fetchProfile: async (userId) => {
    const response = await fetch(`/api/profile?userId=${userId}`);
    set({ profile: await response.json() });
  },
}));
