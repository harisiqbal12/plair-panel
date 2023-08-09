import dynamic from 'next/dynamic';
import { FaTasks } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { PiUserListLight } from 'react-icons/pi';

import {
	ButtonOutlined,
	Heading,
	ProjectCardLoader,
	InputPrimary,
	SelectPrimary,
	ButtonPrimary,
} from '@ui';

const ProjectCard = dynamic(() => import('@/components/Ui/Cards/ProjectCards'), {
	ssr: false,
	loading: () => <ProjectCardLoader style={{ width: '100%' }} />,
});

const FourthTable = dynamic(() => import('@/components/Ui/Tables/Fourth'), {
	ssr: false,
});

export default function ProjectManager(): JSX.Element {
	return (
		<div className='w-full h-full text-black py-32 bg-white px-10 background-pattern font-primary flex flex-col gap-20 overflow-y-scroll'>
			<div className='w-full items-center justify-between flex gap-6'>
				<div className='w-1/2'>
					<ButtonOutlined
						title='Project Manager'
						border='btn-border-purple'
						Icon={FaTasks}
						style={{
							width: '100%',
							backgroundColor: '#542AAD',
							color: '#fff',
						}}
					/>
				</div>
				<div className='w-1/2'>
					<ButtonOutlined
						title='Personal Projects'
						border='btn-border-purple'
						Icon={PiUserListLight}
						style={{
							width: '100%',
						}}
					/>
				</div>
			</div>
			<div className='w-full flex flex-col gap-8'>
				<Heading title='Pending requirements' search />
				<div className='w-full grid col-span- grid-cols-4 gap-6'>
					<ProjectCard
						status='Getting estimate'
						style={{
							width: '100%',
						}}
						btnTitle='Submit Requirements'
					/>
					<ProjectCard
						status='Getting estimate'
						style={{
							width: '100%',
						}}
						btnTitle='Submit Requirements'
					/>
					<ProjectCard
						status='Getting estimate'
						style={{
							width: '100%',
						}}
						btnTitle='Submit Requirements'
					/>
					<ProjectCard
						status='Getting estimate'
						style={{
							width: '100%',
						}}
						btnTitle='Submit Requirements'
					/>
				</div>
			</div>
			<div className='w-full flex flex-col gap-8'>
				<Heading title='Active Projects' search />
				<div className='w-full grid col-span- grid-cols-4 gap-6'>
					<ProjectCard
						status='Reviewing quote'
						style={{
							width: '100%',
						}}
						btnTitle='Submit Requirements'
					/>
					<ProjectCard
						status='Reviewing quote'
						style={{
							width: '100%',
						}}
						btnTitle='Submit Requirements'
					/>
				</div>
			</div>
			<div className='w-full flex flex-col gap-8'>
				<Heading title='Archived Projects' search />
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
