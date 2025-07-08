import { create } from 'zustand';

type DarkModeStore = {
	isDarkMode: boolean;
	switchDarkMode: () => void;
};

const useDarkMode = create<DarkModeStore>((set) => ({
	isDarkMode: true,
	switchDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useDarkMode;
