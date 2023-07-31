export default function PrimarySectionLoader(): JSX.Element {
	return (
		<div className='flex items-center gap-6 duration-150'>
			<div className='w-[70%] h-64 bg-gray-300 animate-pulse rounded-lg'></div>
			<div className='w-[30%] h-64 bg-gray-300 animate-pulse rounded-lg'></div>
		</div>
	);
}
