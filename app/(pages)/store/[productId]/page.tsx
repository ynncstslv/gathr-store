import getCurrentUser from '@/actions/getCurrentUser';
import getProductById from '@/actions/getProductById';
import AddReview from '@/components/AddReview';
import Container from '@/components/Container';
import NullData from '@/components/NullData';
import ProductDetails from '@/components/ProductDetails';
import ProductRatings from '@/components/ProductRatings';

interface IParams {
	productId?: string;
}

export default async function ProductPage({ params }: { params: IParams }) {
	const product = await getProductById(params);
	const user = await getCurrentUser();

	if (!product) {
		return <NullData title="Product not found!" />;
	}

	return (
		<main className="pt-4 pb-14 md:py-24">
			<Container>
				<ProductDetails product={product} />
				<ProductRatings product={product} />
				<AddReview product={product} user={user} />
			</Container>
		</main>
	);
}
