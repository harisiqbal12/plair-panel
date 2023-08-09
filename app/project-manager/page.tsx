import type { Metadata } from 'next';
import { ProjectManager } from '@components';

export default function Page(): JSX.Element {
	return <ProjectManager />;
}

export const metadata: Metadata = {
	title: 'Project Manager | Plair Panel',
	openGraph: {
		title: 'ContProjectract Manager',
		description: 'manage projects',
	},
};
