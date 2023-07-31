import dynamic from 'next/dynamic';
import { Heading, ProjectCardLoader } from '@ui';
import PrimarySectionLoader from './PrimarySectionLoader';

const PrimarySection = dynamic(() => import('./PrimarySection'), {
	ssr: false,
	loading: () => <PrimarySectionLoader />,
});
const ProjectCard = dynamic(() => import('@/components/Ui/Cards/ProjectCards'), {
	ssr: false,
	loading: () => <ProjectCardLoader />,
});

const QuotesCard = dynamic(() => import('@/components/Ui/Cards/QuotesCard'), {
	ssr: false,
	loading: () => <ProjectCardLoader />,
});

export default function Home(): JSX.Element {
	return (
		<div className='w-full h-full text-black py-32 bg-white px-10 background-pattern font-primary flex flex-col gap-10 overflow-y-scroll'>
			<PrimarySection />
			<div className='w-full flex flex-col gap-10'>
				<Heading title='Active Projects' />
				<div className='w-full flex items-center gap-4 justify-between '>
					<ProjectCard status='Awaiting Payment' />
					<ProjectCard status='Awaiting Clarification' />
					<ProjectCard status='Finding New Developer' />
				</div>
			</div>
			<div className='w-full flex flex-col gap-10'>
				<Heading title='Pending Quotes' />
				<div className='w-full flex items-center gap-4 justify-between '>
					<QuotesCard />
					<QuotesCard />
					<QuotesCard />
				</div>
			</div>
		</div>
	);
}
