import { Switch } from '@components';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useDarkMode } from '@stores';

function DarkModeSwitch() {
	const { isDarkMode, switchDarkMode } = useDarkMode();

	const handleSwitchDarkMode = () => {
		switchDarkMode();
	};

	const label = isDarkMode ? (
		<MoonIcon className="h-5 w-5 text-black" />
	) : (
		<SunIcon className="h-5 w-5 text-black" />
	);

	return (
		<Switch
			checked={isDarkMode}
			label={label}
			onCheckedChange={handleSwitchDarkMode}
		/>
	);
}

export default DarkModeSwitch;
