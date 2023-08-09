import dynamic from 'next/dynamic';
import { BiSearch } from 'react-icons/bi';
import { MdFilterList } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import {
	Heading,
	ProjectCardLoader,
	InputPrimary,
	ButtonPrimary,
	SelectPrimary,
} from '@ui';

const ProjectCard = dynamic(() => import('@/components/Ui/Cards/ProjectCards'), {
	ssr: false,
	loading: () => <ProjectCardLoader style={{ width: '100%' }} />,
});

const SecondaryTable = dynamic(() => import('@/components/Ui/Tables/Secondary'), {
	ssr: false,
});

export default function Component(): JSX.Element {
	return (
		<div className='w-full h-full text-black py-32 bg-white px-10 background-pattern font-primary flex flex-col gap-20 overflow-y-scroll'>
			<Heading title='Pending Quotes' />
			<div className='w-full grid col-span- grid-cols-4 gap-6'>
				<ProjectCard
					status='Getting estimate'
					style={{
						width: '100%',
					}}
				/>
				<ProjectCard
					status='Finding New Developer'
					style={{
						width: '100%',
					}}
				/>
				<ProjectCard
					status='Finding New Developer'
					style={{
						width: '100%',
					}}
				/>
				<ProjectCard
					status='Reviewing quote'
					style={{
						width: '100%',
					}}
				/>
				<ProjectCard
					status='Awaiting Clarification'
					style={{
						width: '100%',
					}}
				/>
				<ProjectCard
					status='Awaiting Clarification'
					style={{
						width: '100%',
					}}
				/>
			</div>
			<div className='flex flex-col gap-10'>
				<Heading title='All Quotes and Requests' />
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
		</div>
	);
}
