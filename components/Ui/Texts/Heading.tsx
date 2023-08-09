import { FiSearch } from 'react-icons/fi';
import { InputPrimary } from '..';

import type { HeadingPrimaryProps } from './types';

export default function Heading({
	title,
	search,
}: HeadingPrimaryProps): JSX.Element {
	return (
		<div className='flex flex-col gap-1 w-full'>
			<div className='w-full flex items-center justify-between'>
				<h1 className='font-bold text-medium text-black'>{title}</h1>
				{search ? (
					<div className='w-[30%]'>
						<InputPrimary placeholder='Search project' Icon={FiSearch} />
					</div>
				) : (
					<span className='text-base'>Show all</span>
				)}
			</div>
			<div className='w-full h-1 rounded-full bg-primary' />
		</div>
	);
}
