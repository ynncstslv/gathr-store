import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';

export default function PagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
