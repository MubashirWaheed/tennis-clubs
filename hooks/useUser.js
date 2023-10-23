import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (loggedUser) => set(() => ({ user: loggedUser })),
    }),
    { name: "auth-user" }
  )
);
