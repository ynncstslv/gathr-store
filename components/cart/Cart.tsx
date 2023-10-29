'use client';

import { useCart } from '@/hooks/useCart';
import EmptyCart from './EmptyCart';
import { Button } from '../ui/button';
import CartProductItem from './CartProductItem';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { User } from '@prisma/client';
import { FC } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface CartProps {
	currentUser?: User;
}

const Cart: FC<CartProps> = ({ currentUser }) => {
	const router = useRouter();
	const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
	const { data: session } = useSession();

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
					<div className="flex flex-col items-center gap-8 mt-6 md:flex-row md:items-start md:gap-28">
						<Button
							className="w-full bg-red-600 transition hover:bg-red-500 hover:opacity-90"
							onClick={() => handleClearCart()}
						>
							Clear
						</Button>
						<div className="w-full">
							<div className="flex items-center justify-between">
								<p className="font-bold text-lg text-violet-950">Subtotal</p>
								<p className="font-semibold text-xl text-violet-700">
									$ {cartTotalAmount.toFixed(2)}
								</p>
							</div>
							<p className="mb-4 font-light text-xs text-neutral-500">
								* Taxes & Shipping calculated at checkout.
							</p>
							<div className="flex items-center justify-between">
								<Link
									href="/store"
									className="text-sm text-neutral-600 transition hover:underline"
								>
									<div className="flex items-center justify-start gap-2">
										<ArrowLeft size={18} /> <p>Continue Shopping</p>
									</div>
								</Link>
								{session?.user ? (
									<Button
										className="text-violet-950 border border-violet-950 bg-transparent transition hover:bg-transparent hover:opacity-90"
										onClick={() => router.push('/checkout')}
									>
										Checkout
									</Button>
								) : (
									<Button
										className="text-violet-950 border border-violet-950 bg-transparent transition hover:bg-transparent hover:opacity-90"
										onClick={() => router.push('/login')}
									>
										Login
									</Button>
								)}
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Cart;
