import getProductById from '@/actions/getProductById';
import Container from '@/components/Container';
import NullData from '@/components/NullData';
import ProductDetails from '@/components/ProductDetails';
import ProductRatings from '@/components/ProductRatings';
import { dummyProducts } from '@/lib/dummy';

interface IParams {
	productId?: string;
}

export default async function ProductPage({ params }: { params: IParams }) {
	const product = await getProductById(params);

	if (!product) {
		return <NullData title="Product not found!" />;
	}

	return (
		<main className="pt-4 pb-14 md:py-24">
			<Container>
				<ProductDetails product={product} />
				<ProductRatings product={product} />
			</Container>
		</main>
	);
}
