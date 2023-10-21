'use client';

import { CartProductType } from '@/types/types';
import { Minus, Plus } from 'lucide-react';
import { FC } from 'react';
import { Button } from './ui/button';

interface ProductCounterProps {
	cartProduct: CartProductType;
	cartCounter?: boolean;
	onIncrease: () => void;
	onDecrease: () => void;
}

const ProductCounter: FC<ProductCounterProps> = ({
	cartProduct,
	cartCounter,
	onIncrease,
	onDecrease,
}) => {
	return (
		<div className="flex items-center gap-4">
			{cartCounter ? null : (
				<div className="font-medium text-sm text-neutral-400">Quantity:</div>
			)}
			<div className="flex items-center justify-center gap-4">
				<Button
					onClick={onDecrease}
					size="icon"
					className="w-7 h-7 text-neutral-50 bg-violet-400 transition hover:bg-violet-400 hover:opacity-90"
				>
					<Minus size={18} />
				</Button>
				<div className="font-semibold text-violet-950">
					{cartProduct.quantity}
				</div>
				<Button
					onClick={onIncrease}
					size="icon"
					className="w-7 h-7 text-neutral-50 bg-violet-400 transition hover:bg-violet-400 hover:opacity-90"
				>
					<Plus size={18} />
				</Button>
			</div>
		</div>
	);
};

export default ProductCounter;
