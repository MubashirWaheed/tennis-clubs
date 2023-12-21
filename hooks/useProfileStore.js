import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProfileStore = create(
  persist(
    (set) => ({
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
    }),
    { name: "profile" }
  )
);
