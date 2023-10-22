import { CartContextType, CartProductType } from '@/types/types';
import { createContext, useCallback, useState } from 'react';

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
	[propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
	const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
	const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
		null
	);

	const handleAddProductToCart = useCallback((product: CartProductType) => {
		setCartProducts((prev) => {
			let updatedCart;

			if (prev) {
				updatedCart = [...prev, product];
			} else {
				updatedCart = [product];
			}

			return updatedCart;
		});
	}, []);

	const value = { cartTotalQuantity, cartProducts, handleAddProductToCart };

	return <CartContext.Provider value={value} {...props} />;
};
