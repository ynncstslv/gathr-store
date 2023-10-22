import { CartContextType, CartProductType } from '@/types/types';
import { createContext, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
	[propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
	const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
	const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
		null
	);
	const [isToastShown, setIsToastShown] = useState(false);

	useEffect(() => {
		const cartItems: any = localStorage.getItem('gathrCartItems');
		const cProducts: CartProductType[] | null = JSON.parse(cartItems);

		setCartProducts(cProducts);
	}, []);

	const handleAddProductToCart = useCallback(
		(product: CartProductType) => {
			if (!isToastShown) {
				setCartProducts((prev) => {
					let updatedCart;

					if (prev) {
						updatedCart = [...prev, product];
					} else {
						updatedCart = [product];
					}

					setIsToastShown(true);
					localStorage.setItem('gathrCartItems', JSON.stringify(updatedCart));

					return updatedCart;
				});

				toast.success('Product added to cart!');

				setTimeout(() => {
					setIsToastShown(false);
				}, 2000);
			}
		},
		[isToastShown]
	);

	const value = { cartTotalQuantity, cartProducts, handleAddProductToCart };

	return <CartContext.Provider value={value} {...props} />;
};
