import getCurrentUser from '@/actions/getCurrentUser';
import Container from '@/components/Container';
import FormWrap from '@/components/FormWrap';
import NullData from '@/components/NullData';
import AddProductForm from '@/components/admin/AddProductForm';

export default async function AddProductPage() {
	const currentUser = await getCurrentUser();

	if (!currentUser || currentUser.role !== 'ADMIN') {
		return <NullData title="Access Denied!" />;
	}

	return (
		<main className="pt-4 pb-14 md:py-16">
			<Container>
				<FormWrap>
					<AddProductForm />
				</FormWrap>
			</Container>
		</main>
	);
}
