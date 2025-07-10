import { Switch as UiSwitch } from '@ui/switch';
import { type ReactNode } from 'react';

type SwitchProps = {
	checked?: boolean;
	label?: ReactNode;
	onCheckedChange?: () => void;
};

function Switch({ checked, label, onCheckedChange }: SwitchProps) {
	return (
		<div className="flex items-center">
			<UiSwitch
				className="cursor-pointer"
				checked={checked}
				onCheckedChange={onCheckedChange}
			/>
			<div className="ml-2">{label}</div>
		</div>
	);
}

export default Switch;
