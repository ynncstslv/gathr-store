import getProducts from '@/actions/getProducts';
import Container from '@/components/Container';
import AdminMenu from '@/components/admin/AdminMenu';
import ManageProductsClient from '@/components/admin/ManageProductsClient';
import getCurrentUser from '@/actions/getCurrentUser';
import NullData from '@/components/NullData';

export default async function ManageProductsPage() {
	const currentUser = await getCurrentUser();
	const products = await getProducts({ category: null });

	if (!currentUser || currentUser.role !== 'ADMIN') {
		return <NullData title="Access Denied!" />;
	}

	return (
		<main className="pt-4 pb-14 md:py-16">
			<Container>
				<ManageProductsClient products={products} />
			</Container>
		</main>
	);
}
