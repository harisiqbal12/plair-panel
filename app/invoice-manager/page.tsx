import type { Metadata } from 'next';
import { InvoiceManager } from '@components';

export default function Page(): JSX.Element {
	return <InvoiceManager />;
}

export const metadata: Metadata = {
	title: 'Invoice Manager | Plair Panel',
	openGraph: {
		title: 'Invoice Manager',
		description: 'manage invoices',
	},
};
