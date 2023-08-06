import type { PrimaryInputProps } from './types';

export default function InputPrimary({
	Icon,
	...props
}: PrimaryInputProps): JSX.Element {
	return (
		<div className='w-full h-10 rounded-lg bg-gray-200 flex items-center pr-2'>
			<input
				{...props}
				className='w-[97%] h-full px-4 outline-none bg-gray-200 rounded-lg font-medium'
			/>
			{Icon && <Icon size={20} className="text-primary" />}
		</div>
	);
}
