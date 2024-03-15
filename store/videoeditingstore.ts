import { create } from "zustand";

export const usePremiereProTools = create((set) => ({
  active: "",
  setActive: (value: string) => set(() => ({ active: value })),
}));
