import type { Metadata } from 'next';
import { QuoteManager } from '@components';

export default function Page(): JSX.Element {
	return <QuoteManager />;
}

export const metadata: Metadata = {
	title: 'Quote Manager | Plair Panel',
	openGraph: {
		title: 'Quote Manager',
		description: 'manage quotes',
	},
};
