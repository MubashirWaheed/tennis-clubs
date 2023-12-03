import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRegisteredPlayerStore = create((set) => ({
  user: null,
  setUser: (loggedUser) => set(() => ({ user: loggedUser })),
}));
