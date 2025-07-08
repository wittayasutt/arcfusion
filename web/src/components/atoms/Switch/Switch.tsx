import { Switch as RadixSwitch } from 'radix-ui';

type SwitchProps = {
	label?: string;
};

function Switch({ label }: SwitchProps) {
	return (
		<>
			<label
				className="pr-3 text-[15px] leading-none select-none"
				htmlFor="dark-mode"
			>
				{label}
			</label>
			<RadixSwitch.Root className="relative h-[25px] w-[42px] cursor-pointer rounded-full bg-black shadow-[0_2px_10px_var(--black-a7)] [tap-highlight-color:transparent] focus:ring-2 focus:ring-black focus:outline-none data-[state=checked]:bg-black">
				<RadixSwitch.Thumb className="block h-[21px] w-[21px] translate-x-[2px] rounded-full bg-white shadow-[0_2px_2px_var(--black-a7)] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
			</RadixSwitch.Root>
		</>
	);
}

export default Switch;
