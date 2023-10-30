import getCurrentUser from '@/actions/getCurrentUser';
import Container from '@/components/Container';
import FormWrap from '@/components/FormWrap';
import NullData from '@/components/NullData';
import AddProductForm from '@/components/admin/AddProductForm';

export default async function AddProductPage() {
	const currentUser = getCurrentUser();

	currentUser
		.then((userData) => {
			if (!userData || userData.role !== 'ADMIN') {
				return <NullData title="Oops!" />;
			}
		})
		.catch((error) => {
			console.log(error);
		});

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
