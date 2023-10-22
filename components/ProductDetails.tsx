'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { BadgeCheck, ShoppingCart, ThumbsUp } from 'lucide-react';
import { Button } from './ui/button';
import { CartProductType, SelectedImageType } from '@/types/types';
import Colors from './Colors';
import ProductCounter from './ProductCounter';
import ProductImage from './ProductImage';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
	product: any;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
	const router = useRouter();
	const [cartProduct, setCartProduct] = useState<CartProductType>({
		id: product.id,
		name: product.name,
		description: product.description,
		category: product.category,
		brand: product.brand,
		selectedImage: { ...product.images[0] },
		stock: product.stock,
		quantity: 1,
		price: product.price,
	});
	const { handleAddProductToCart, cartProducts } = useCart();
	const [isProductInCart, setIsProductInCard] = useState(false);

	useEffect(() => {
		setIsProductInCard(false);

		if (cartProducts) {
			const existingIndex = cartProducts.findIndex(
				(item) => item.id === product.id
			);

			if (existingIndex > -1) {
				setIsProductInCard(true);
			}
		}
	}, [cartProducts, product.id]);

	const productRating =
		product.reviews.reduce(
			(acc: number, review: any) => acc + review.rating,
			0
		) / product.reviews.length;

	const handleColorSelect = useCallback((value: SelectedImageType) => {
		setCartProduct((prev) => {
			return { ...prev, selectedImage: value };
		});
	}, []);

	const handleQuantityIncrease = useCallback(() => {
		if (cartProduct.quantity != null) {
			if (cartProduct.quantity < cartProduct.stock) {
				setCartProduct((prev) => {
					return { ...prev, quantity: prev.quantity + 1 };
				});
			}
		}
	}, [cartProduct]);

	const handleQuantityDecrease = useCallback(() => {
		if (cartProduct.quantity > 0) {
			setCartProduct((prev) => {
				return { ...prev, quantity: prev.quantity - 1 };
			});
		}
	}, [cartProduct]);

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
			<ProductImage
				cartProduct={cartProduct}
				product={product}
				handleColorSelect={handleColorSelect}
			/>
			<div className="flex flex-col gap-1">
				<h3 className="font-light text-sm text-neutral-500">{product.brand}</h3>
				<h2 className="mb-2 font-bold text-3xl text-violet-950">
					{product.name}
				</h2>
				<div className="flex items-center gap-16">
					<Badge className="font-medium text-violet-950 bg-violet-200 transition hover:bg-violet-200 hover:opacity-90">
						{product.category}
					</Badge>
					{!productRating ? (
						<Badge className="font-medium text-neutral-500 border border-neutral-500 bg-transparent transition hover:bg-transparent hover:opacity-90">
							No Reviews
						</Badge>
					) : (
						<div className="flex items-center gap-4">
							<Badge className="font-medium text-yellow-900 bg-yellow-500 transition hover:bg-yellow-500 hover:opacity-90">
								{productRating} <ThumbsUp size={12} className="ml-1" />
							</Badge>
							<p className="font-light text-sm text-neutral-500">
								{product.reviews.length} Reviews
							</p>
						</div>
					)}
				</div>
				<div className="flex items-center gap-8 mt-6">
					<p className="font-semibold text-4xl text-violet-700">{`$${product.price}`}</p>
					{product.inStock ? (
						<div className="text-sm text-green-700">In Stock</div>
					) : (
						<div className="text-sm text-red-600">Out of Stock</div>
					)}
				</div>
				<hr className="my-4" />
				<p className="font-light text-sm text-neutral-700 text-justify">
					{product.description}
				</p>
				<hr className="my-4" />
				{isProductInCart ? (
					<>
						<div className="flex items-center gap-2 mb-4">
							<BadgeCheck size={18} className="text-teal-500" />
							<p className="font-light text-sm text-neutral-600">
								Product already in cart.
							</p>
						</div>
						<Button
							className="text-violet-950 border border-violet-950 bg-transparent transition hover:bg-transparent hover:opacity-90"
							onClick={() => router.push('/cart')}
						>
							View Cart
						</Button>
					</>
				) : (
					<>
						<div className="flex flex-col items-start gap-8 mt-2 mb-8 lg:flex-row">
							<ProductCounter
								cartProduct={cartProduct}
								onIncrease={handleQuantityIncrease}
								onDecrease={handleQuantityDecrease}
							/>
							<div className="flex items-center gap-12">
								{!product.images[0].color ? null : (
									<Colors
										cartProduct={cartProduct}
										images={product.images}
										handleColorSelect={handleColorSelect}
									/>
								)}
							</div>
						</div>
						<Button
							className="text-violet-950 bg-teal-400 transition hover:bg-teal-400 hover:opacity-90"
							onClick={() => handleAddProductToCart(cartProduct)}
							disabled={cartProduct.stock < cartProduct.quantity}
						>
							<ShoppingCart size={18} className="mr-2" /> Add to Cart
						</Button>
					</>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
