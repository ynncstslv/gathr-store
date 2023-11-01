import getProducts, { IProductParams } from '@/actions/getProducts';
import NullData from '../NullData';
import ProductCard from '../ProductCard';

interface ProductProps {
	searchParams: IProductParams;
}

export default async function Products({ searchParams }: ProductProps) {
	const products = await getProducts({ category: null });

	if (products.length === 0) {
		return <NullData title="No products found!" />;
	}

	return (
		<section className="w-full mt-10 mx-auto md:mt-16">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 2xl:grid-cols-4">
				{products.map((product) => (
					<ProductCard key={product.id} data={product} />
				))}
			</div>
		</section>
	);
}
