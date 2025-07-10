import { Moon, Sun } from 'lucide-react';

import { Switch } from '@components';
import { useDarkMode } from '@stores';

function DarkModeSwitch() {
	const { isDarkMode, switchDarkMode } = useDarkMode();

	const handleSwitchDarkMode = () => {
		switchDarkMode();
	};

	const icon = isDarkMode ? (
		<Moon className="size-5" />
	) : (
		<Sun className="size-5" />
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
