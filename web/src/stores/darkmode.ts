import { create } from 'zustand';

type DarkModeStore = {
	isDarkMode: boolean;
	switchDarkMode: () => void;
};

const getInitialDarkMode = (): boolean => {
	console.log('typeof window', typeof window);
	if (typeof window !== 'undefined') {
		return document.documentElement.getAttribute('class') === 'dark';
	}
	return false;
};

const updateHtmlTheme = (isDarkMode: boolean) => {
	console.log('typeof window isDarkMode', typeof window);
	if (typeof window !== 'undefined') {
		document.documentElement.setAttribute(
			'class',
			isDarkMode ? 'dark' : 'light',
		);
	}
};

const useDarkMode = create<DarkModeStore>((set) => ({
	isDarkMode: getInitialDarkMode(),
	switchDarkMode: () =>
		set((state) => {
			const newDarkMode = !state.isDarkMode;
			updateHtmlTheme(newDarkMode);
			return { isDarkMode: newDarkMode };
		}),
}));

export default useDarkMode;
