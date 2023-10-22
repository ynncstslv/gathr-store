'use client';

import { CartProductType } from '@/types/types';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import ProductCounter from '../ProductCounter';

interface CartProductItemProps {
	item: CartProductType;
}

const CartProductItem: FC<CartProductItemProps> = ({ item }) => {
	return (
		<div className="grid grid-cols-2 py-4 border-b border-b-neutral-200 md:grid-cols-9">
			<div>
				<Link href={`/store/${item.id}`}>
					<div className="aspect-square w-[150px] relative md:w-[70px]">
						<Image
							src={item.selectedImage.image}
							alt={item.name}
							fill
							className="object-contain"
						/>
					</div>
				</Link>
			</div>
			<div className="md:col-span-8">
				<div className="md:grid md:grid-cols-3 md:items-center md:gap-24">
					<div className="mb-4 md:mb-0">
						<p className="font-light text-xs text-neutral-500">{item.brand}</p>
						<h2 className="font-bold text-violet-950">{item.name}</h2>
						<p className="font-light text-xs text-neutral-500">{item.set}</p>
					</div>
					<div className="flex items-center justify-between mb-8 md:mb-0">
						<p className="font-semibold text-lg text-violet-700">{`$${item.price}`}</p>
						<ProductCounter
							cartProduct={item}
							cartCounter
							onIncrease={() => {}}
							onDecrease={() => {}}
						/>
					</div>
					<div className="flex items-center justify-between">
						<Button
							size="icon"
							className="w-8 h-8 bg-red-500 transition hover:bg-red-500 hover:opacity-90"
							onClick={() => {}}
						>
							<Trash2 size={18} />
						</Button>
						<p className="font-semibold text-sm text-teal-700">{`Total: $${
							item.price * item.quantity
						}`}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartProductItem;
