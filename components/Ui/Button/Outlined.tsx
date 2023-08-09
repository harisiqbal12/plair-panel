import type { OutlinedButtonProps } from './types';

export default function Button({
	title,
	border,
	Icon,

	...props
}: OutlinedButtonProps): JSX.Element {
	const classname = `p-4 flex items-center gap-2 rounded-lg font-semibold text-base justify-center border transition duration-150 ${border}`;

	return (
		<button {...props} className={classname}>
			{Icon && <Icon size={20} />}
			{title}
		</button>
	);
}
