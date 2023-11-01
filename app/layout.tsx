import AuthContext from '@/context/authContext';
import CartProvider from '@/providers/CartProvider';

import { Toaster } from 'react-hot-toast';

import type { Metadata } from 'next';

import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Gathr | Expand your collection!',
	description:
		'Gathr is the culmination of my journey through the ReactJS course at Coderhouse.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<AuthContext>
					<Toaster
						toastOptions={{
							style: { background: 'rgb(10, 10, 10)', color: '#fafafa' },
						}}
					/>
					<CartProvider>{children}</CartProvider>
				</AuthContext>
			</body>
		</html>
	);
}
