import getProducts from '@/actions/getProducts';

import NullData from '../NullData';
import ProductCard from '../ProductCard';

export default async function Featured() {
	const products = await getProducts({ category: null });

	if (products.length === 0) {
		return <NullData title="No products found!" />;
	}

	function shuffleArray(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			[array[i], array[j]] = [array[j], array[i]];
		}

		return array;
	}

	const shuffleProducts = shuffleArray(products);

	return (
		<section className="w-full mt-10 mx-auto md:mt-16">
			<div className="mb-8 text-center md:mb-12 md:text-start">
				<h1 className="mb-1 font-bold text-2xl text-violet-950 lg:text-4xl">
					Featured
				</h1>
				<p className="text-sm text-neutral-600 md:text-base">
					New releases and best sellers for this month.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{shuffleProducts.slice(0, 3).map((product) => (
					<ProductCard key={product.id} data={product} />
				))}
			</div>
		</section>
	);
}
