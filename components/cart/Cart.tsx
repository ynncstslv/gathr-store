'use client';

import { useCart } from '@/hooks/useCart';
import EmptyCart from './EmptyCart';
import { Button } from '../ui/button';
import CartProductItem from './CartProductItem';

const Cart = () => {
	const { cartProducts } = useCart();

	return (
		<>
			{!cartProducts || cartProducts.length === 0 ? (
				<EmptyCart />
			) : (
				<section className="w-full mt-6 mx-auto md:mt-0">
					<div className="mb-8 text-center md:mb-12 md:text-start">
						<h1 className="font-bold text-2xl text-violet-950 lg:text-4xl">
							Shopping Cart
						</h1>
					</div>
					<div className="mb-4 border-b border-b-neutral-200" />
					<div>
						{cartProducts &&
							cartProducts.map((item) => {
								return (
									<div key={item.id}>
										<CartProductItem item={item} />
									</div>
								);
							})}
					</div>
				</section>
			)}
		</>
	);
};

export default Cart;
