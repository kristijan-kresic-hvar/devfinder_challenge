import create from "zustand";

const useThemeStore = create((set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
