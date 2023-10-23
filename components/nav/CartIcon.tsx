'use client';

import { ShoppingBasket } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';

const CartIcon = () => {
	const router = useRouter();
	const { cartTotalQuantity } = useCart();

	return (
		<div className="relative">
			<Button
				variant="ghost"
				size="icon"
				className="text-violet-100 transition hover:text-violet-100 hover:bg-transparent hover:opacity-90"
				onClick={() => router.push('/cart')}
			>
				<ShoppingBasket size={24} />
				<div className="w-6 h-6 flex items-center justify-center absolute -top-[2px] -right-[2px] border-2 border-violet-950 rounded-full text-xs text-violet-950 bg-teal-400">
					{cartTotalQuantity}
				</div>
			</Button>
		</div>
	);
};

export default CartIcon;
