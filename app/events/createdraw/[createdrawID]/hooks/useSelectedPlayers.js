import { create } from "zustand";

export const useSelectedPlayers = create((set) => ({
  selectedPlayers: [],
  setSelectedPlayers: (selectedPlayers) => set({ selectedPlayers }),
}));
