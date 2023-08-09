import { HiDocumentText } from 'react-icons/hi';
import { BiSolidUserBadge, BiSearch } from 'react-icons/bi';
import { MdFilterList } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import {
	Heading,
	ButtonPrimary,
	ButtonOutlined,
	InputPrimary,
	SelectPrimary,
} from '@ui';
import dynamic from 'next/dynamic';

const SecondaryTable = dynamic(() => import('@/components/Ui/Tables/Secondary'), {
	ssr: false,
});

const ThirdTable = dynamic(() => import('@/components/Ui/Tables/Third'), {
	ssr: false,
});

const FourthTable = dynamic(() => import('@/components/Ui/Tables/Fourth'), {
	ssr: false,
});

export default function ContractManager(): JSX.Element {
	return (
		<div className='w-full h-full text-black py-32 bg-white px-10 background-pattern font-primary flex flex-col gap-20 overflow-y-scroll'>
			<div className='w-full items-center justify-between flex gap-6'>
				<div className='w-1/2'>
					<ButtonOutlined
						title='Contract Manager'
						border='btn-border-purple'
						Icon={HiDocumentText}
						style={{
							width: '100%',
							backgroundColor: '#542AAD',
							color: "#fff"
						}}
					/>
				</div>
				<div className='w-1/2'>
					<ButtonOutlined
						title='Personal Contracts'
						border='btn-border-purple'
						Icon={BiSolidUserBadge}
						style={{
							width: '100%',
						}}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<Heading title='Pending Contracts' />
				<div className='w-full bg-white flex flex-col h-[120%] rounded-lg shadow-custom p-10 px-14 gap-8'>
					<div className='flex gap-6'>
						<div className='w-[60%] flex items-center shrink-0'>
							<InputPrimary Icon={BiSearch} placeholder='Search contract' />
						</div>
						<div className='flex items-center gap-4 w-[40%] justify-end'>
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
								title='Create New Quote'
								color='btn-style-orange'
								style={{
									height: 40,
								}}
								Icon={AiOutlinePlus}
							/>
						</div>
					</div>
					<SecondaryTable />
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<Heading title='Draft Contracts' />
				<div className='w-full bg-white flex flex-col h-[120%] rounded-lg shadow-custom p-10 px-14 gap-8'>
					<div className='flex gap-6'>
						<div className='w-[60%] flex items-center shrink-0'>
							<InputPrimary Icon={BiSearch} placeholder='Search contract' />
						</div>
						<div className='flex items-center gap-4 w-[40%] justify-end'>
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
								title='Create New Quote'
								color='btn-style-orange'
								style={{
									height: 40,
								}}
								Icon={AiOutlinePlus}
							/>
						</div>
					</div>
					<ThirdTable />
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<Heading title='Signed Contracts' />
				<div className='w-full bg-white flex flex-col h-[120%] rounded-lg shadow-custom p-10 px-14 gap-8'>
					<div className='flex gap-6'>
						<div className='w-[60%] flex items-center shrink-0'>
							<InputPrimary Icon={BiSearch} placeholder='Search contract' />
						</div>
						<div className='flex items-center gap-4 w-[40%] justify-end'>
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
						</div>
					</div>
					<FourthTable />
				</div>
			</div>
		</div>
	);
}
