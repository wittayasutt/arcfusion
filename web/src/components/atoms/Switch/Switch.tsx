import { Switch as RadixSwitch } from 'radix-ui';
import { type ReactNode } from 'react';

type SwitchProps = {
	checked?: boolean;
	label?: ReactNode;
	onCheckedChange?: () => void;
};

function Switch({ checked, label, onCheckedChange }: SwitchProps) {
	return (
		<div className="flex items-center">
			<RadixSwitch.Root
				className="relative h-[25px] w-[42px] cursor-pointer rounded-full bg-black shadow-[0_2px_10px_var(--black-a7)] [tap-highlight-color:transparent] focus:ring-2 focus:ring-black focus:outline-none data-[state=checked]:bg-black"
				checked={checked}
				onCheckedChange={onCheckedChange}
			>
				<RadixSwitch.Thumb className="block h-[21px] w-[21px] translate-x-[2px] rounded-full bg-white shadow-[0_2px_2px_var(--black-a7)] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
			</RadixSwitch.Root>
			<div className="ml-2">{label}</div>
		</div>
	);
}

export default Switch;
