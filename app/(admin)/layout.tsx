import AdminMenu from '@/components/admin/AdminMenu';
import Footer from '@/components/footer/Footer';
import Nav from '@/components/nav/Nav';

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Nav />
				<div className="w-[90%] mt-8 mx-auto">
					<AdminMenu />
				</div>
				{children}
				<Footer />
			</body>
		</html>
	);
}
