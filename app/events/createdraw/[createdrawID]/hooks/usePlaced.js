import { create } from "zustand";

export const usePlaced = create((set) => ({
  placedPlayers: {},
  setPlacedPlayers: (newPlayer) =>
    set((state) => ({ ...state, placedPlayers: newPlayer })),
}));
