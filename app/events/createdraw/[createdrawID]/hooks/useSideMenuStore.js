import { create } from "zustand";

// Create a Zustand store for the side menu state
export const useMenuStore = create((set) => ({
  activeModal: null,
  divisions: [],
  selectedDivison: {},
  setSelectedDivision: (division) => set({ selectedDivison: division }),
  setDivisions: (divisions) => set({ divisions }),
  selectedDraw: [],
  setSelectedDraw: (draw) => set({ selectedDraw: draw }),
  drawsList: [],
  setDrawlist: (list) => set({ list }),
  showDrawMenu: false,
  setShowDrawMenu: (show) => set({ showDrawMenu: show }),
  openModal: (modalType) => {
    set({ activeModal: modalType });
  },
  closeModal: () => {
    set({ activeModal: null });
  },
  MODAL_TYPES: {},
}));

export default useMenuStore;
