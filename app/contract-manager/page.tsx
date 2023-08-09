import type { Metadata } from 'next';
import { ContractManager } from '@components';

export default function Page(): JSX.Element {
	return <ContractManager />;
}

export const metadata: Metadata = {
	title: 'Contract Manager | Plair Panel',
	openGraph: {
		title: 'Contract Manager',
		description: 'manage contracts',
	},
};
