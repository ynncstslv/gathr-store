import type { Metadata } from 'next';

import './globals.css';
import { Poppins } from 'next/font/google';
import CartProvider from '@/providers/CartProvider';
import { Toaster } from 'react-hot-toast';
import AuthContext from '@/context/authContext';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Gathr | Expand you collection!',
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
							style: { background: 'rgb(51, 65, 85)', color: '#fff' },
						}}
					/>
					<CartProvider>{children}</CartProvider>
				</AuthContext>
			</body>
		</html>
	);
}
