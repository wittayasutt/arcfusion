import { Moon, Sun } from 'lucide-react';

import { Switch } from '@components';
import { useDarkMode } from '@stores';

function DarkModeSwitch() {
	const { isDarkMode, switchDarkMode } = useDarkMode();

	const handleSwitchDarkMode = () => {
		switchDarkMode();
	};

	const icon = isDarkMode ? (
		<Moon className="h-5 w-5" />
	) : (
		<Sun className="h-5 w-5" />
	);

	return (
		<Switch
			checked={isDarkMode}
			label={icon}
			onCheckedChange={handleSwitchDarkMode}
		/>
	);
}

export default DarkModeSwitch;
