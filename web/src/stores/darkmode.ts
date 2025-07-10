import { create } from 'zustand';

type DarkModeStore = {
	isDarkMode: boolean;
	switchDarkMode: () => void;
};

const getInitialDarkMode = (): boolean => {
	if (typeof window !== 'undefined') {
		const isDarkMode = localStorage.getItem('darkMode');
		if (isDarkMode !== null) {
			return isDarkMode === 'true';
		}
		return document.documentElement.getAttribute('class') === 'dark';
	}

	// Default to dark mode if window is undefined
	return true;
};

const updateHtmlTheme = (isDarkMode: boolean) => {
	if (typeof window !== 'undefined') {
		document.documentElement.setAttribute(
			'class',
			isDarkMode ? 'dark' : 'light',
		);
	}
};

const useDarkMode = create<DarkModeStore>((set) => {
	const initialDarkMode = getInitialDarkMode();
	updateHtmlTheme(initialDarkMode);

	return {
		isDarkMode: initialDarkMode,
		switchDarkMode: () =>
			set((state) => {
				const newDarkMode = !state.isDarkMode;
				updateHtmlTheme(newDarkMode);
				if (typeof window !== 'undefined') {
					localStorage.setItem('darkMode', newDarkMode.toString());
				}
				return { isDarkMode: newDarkMode };
			}),
	};
});

export default useDarkMode;
