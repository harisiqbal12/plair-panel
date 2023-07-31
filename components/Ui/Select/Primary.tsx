import { IoIosArrowDown } from 'react-icons/io';

import type { PrimarySelectProps } from './types';

export default function Select({ title }: PrimarySelectProps): JSX.Element {
	return (
		<div className='w-[35%] flex items-center bg-gray-200 p-4 rounded-lg text-base font-semibold text-zinc-700 justify-between cursor-pointer hover:bg-gray-300 transition duration-150'>
			<span>{title}</span>
			<IoIosArrowDown size={20} />
		</div>
	);
}
