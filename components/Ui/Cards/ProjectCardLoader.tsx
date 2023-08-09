import { HTMLProps } from 'react';

export default function ProjectCardLoader({ ...props }: Props): JSX.Element {
	return (
		<div
			{...props}
			className='w-[40%] h-[20rem] bg-white shadow-custom rounded-lg flex flex-col p-4 justify-between'>
			<div className='w-full flex items-start justify-between'>
				<div className='flex flex-col gap-2 w-full'>
					<div className='w-[35%] h-4 rounded-full bg-gray-300 animate-pulse' />
					<div className='w-[20%] h-2 rounded-full bg-gray-300 animate-pulse' />
				</div>
				<div className='w-[30%] h-4 rounded-full bg-gray-300 animate-pulse' />
			</div>
			<div className='flex flex-col gap-2 w-full'>
				<div className='w-[80%] h-2 rounded-full bg-gray-300 animate-pulse' />
				<div className='w-[70%] h-2 rounded-full bg-gray-300 animate-pulse' />
				<div className='w-[90%] h-2 rounded-full bg-gray-300 animate-pulse' />
				<div className='w-[50%] h-2 rounded-full bg-gray-300 animate-pulse' />
				<div className='w-[60%] h-2 rounded-full bg-gray-300 animate-pulse' />
			</div>
			<div className='w-full items-center justify-between flex'>
				<div className='w-[40%] h-10 rounded-lg animate-pulse bg-gray-300'></div>
				<div className='w-[20%] h-3 rounded-full bg-gray-300 animate-pulse' />
			</div>
		</div>
	);
}

interface Props extends HTMLProps<HTMLDivElement> {}
