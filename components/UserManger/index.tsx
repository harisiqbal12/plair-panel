import { BiSearch } from 'react-icons/bi';
import { MdFilterList } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import {
	InputPrimary,
	ButtonPrimary,
	SelectPrimary,
	SecondaryTable,
	Heading,
} from '@ui';

export default function UserManager(): JSX.Element {
	return (
		<div className='w-full h-full text-black py-32 bg-white px-10 background-pattern font-primary flex flex-col gap-10 overflow-y-scroll'>
			<div className='w-full bg-white flex flex-col h-[120%] rounded-lg shadow-custom p-10 px-14 gap-8'>
				<div className='flex gap-6'>
					<div className='w-[60%] flex items-center shrink-0'>
						<InputPrimary Icon={BiSearch} placeholder='Search here' />
					</div>
					<div className='flex items-center gap-4 w-[40%]'>
						<ButtonPrimary
							title='Filter by'
							color='btn-style-purple'
							style={{
								height: 40,
							}}
							Icon={MdFilterList}
						/>
						<SelectPrimary
							title='10'
							style={{
								height: 40,
							}}
						/>
						<ButtonPrimary
							title='Create New User'
							color='btn-style-orange'
							style={{
								height: 40,
							}}
							Icon={AiOutlinePlus}
						/>
					</div>
				</div>
				<div>
					<SecondaryTable />
				</div>
			</div>
			<div className='w-full flex flex-col gap-10'>
				<Heading title='My Teams' />
				<div className='w-full flex items-center gap-4'>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col gap-10'>
				<Heading title='Teams' />
				<div className='flex gap-6 w-full'>
					<div className='w-[90%] flex items-center shrink-0'>
						<InputPrimary Icon={BiSearch} placeholder='Search team' />
					</div>
					<div className='flex items-center gap-4 w-[10%]'>
						<SelectPrimary
							title='18'
							style={{
								height: 40,
								width: "100%"
							}}
						/>
					</div>
				</div>
				<div className='w-full flex items-center gap-4 flex-wrap'>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
					<div className='w-fit flex p-6 rounded-lg bg-white shadow-custom flex-col h-40 justify-between shrink-0'>
						<div className='flex flex-col'>
							<span className='font-bold text-black text-md'>The Cool Team</span>
							<span className='text-xs text-gray-500 font-semibold'>
								12 members
							</span>
						</div>
						<div className='flex gap-4'>
							<span className='text-base font-medium text-gray-500'>
								TEAM LEAD:{' '}
							</span>
							<span className='text-base font-medium text-primary underline'>
								Saami294
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
