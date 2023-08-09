import type { Metadata } from 'next';
import { TimeCardManager } from '@components';

export default function Page(): JSX.Element {
	return <TimeCardManager />;
}

export const metadata: Metadata = {
	title: 'Time Card Manager | Plair Panel',
	openGraph: {
		title: 'Time card Manager',
		description: 'manage time cards',
	},
};
