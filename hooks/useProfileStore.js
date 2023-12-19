import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profile: {},
  profileCreated: false,
  fetchProfile: async (userId) => {
    const response = await fetch(`/api/profile?userId=${userId}`);

    if (!response.ok) {
      throw new Error(`Error fetching profile: ${response.statusText}`);
    }

    const profileData = await response.json();

    set({ profile: profileData });
  },
  storeProfile: (profileobj) => {
    set({ profile: profileobj, profileCreated: true });
  },
}));
