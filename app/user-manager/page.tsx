import type { Metadata } from 'next';
import { UserManager } from '@components';

export default function Page(): JSX.Element {
	return <UserManager />;
}

export const metadata: Metadata = {
	title: 'User Manager | Plair Panel',
	openGraph: {
		title: 'User Manager',
		description: 'manage users',
	},
};
