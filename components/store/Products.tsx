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
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 2xl:grid-cols-4">
				{shuffleProducts.map((product) => (
					<ProductCard key={product.id} data={product} />
				))}
			</div>
		</section>
	);
}

// 'use client';

// import { Loader } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import ProductCard from '../ProductCard';
// import { dummyProducts } from '@/lib/dummy';
// import { Button } from '../ui/button';

// const Products = () => {
// 	const [loading, setLoading] = useState(false);
// 	const [visibleProducts, setVisibleProducts] = useState(4);

// 	useEffect(() => {
// 		setTimeout(() => {
// 			setLoading(false);
// 		}, 2000);
// 	}, []);

// 	return (
// 		<section className="w-full mt-10 mx-auto md:mt-16">
// 			{loading ? (
// 				<Loader />
// 			) : (
// 				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 2xl:grid-cols-4">
// 					{dummyProducts.slice(0, visibleProducts).map((product) => (
// 						<div key={product.id}>
// 							<ProductCard data={product} />
// 						</div>
// 					))}
// 				</div>
// 			)}
// 			{!loading && visibleProducts < dummyProducts.length && (
// 				<Button
// 					onClick={() => setVisibleProducts(visibleProducts + 4)}
// 					className="w-full mt-8 mx-auto text-violet-800 border border-violet-800 bg-transparent transition hover:text-neutral-50 hover:bg-violet-800"
// 				>
// 					Load more...
// 				</Button>
// 			)}
// 		</section>
// 	);
// };

// export default Products;
