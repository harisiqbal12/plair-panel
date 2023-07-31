import type { PrimaryButtonProps } from './types';

export default function Button({
	title,
	color,
	Icon,
	...props
}: PrimaryButtonProps): JSX.Element {
	const classname = `p-4 w-full flex items-center gap-2 rounded-lg text-white font-semibold text-base justify-center transition duration-150 ${color}`;

	return (
		<button {...props} className={classname}>
			<Icon size={20} />
			{title}
		</button>
	);
}
