import Container from '@/components/Container';
import ProductDetails from '@/components/ProductDetails';
import ProductRatings from '@/components/ProductRatings';
import { dummyProducts } from '@/lib/dummy';

interface IParams {
	productId?: string;
}

export default function ProductPage({ params }: { params: IParams }) {
	const product = dummyProducts.find((p) => p.id === params.productId);

	return (
		<main className="pt-4 pb-14 md:py-24">
			<Container>
				<ProductDetails product={product} />
				<ProductRatings product={product} />
			</Container>
		</main>
	);
}
