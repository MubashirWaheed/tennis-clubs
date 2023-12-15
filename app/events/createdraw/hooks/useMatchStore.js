import create from "zustand";
const useMatchStore = create((set) => ({
  matches: {},
  setMatches: (matchestoBePlayed) => set({ matches: matchestoBePlayed }),
}));

export default useMatchStore;
