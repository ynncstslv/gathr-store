import { CartContextType } from '@/types/types';
import { createContext, useState } from 'react';

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
	[propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
	const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

	const value = { cartTotalQuantity };

	return <CartContext.Provider value={value} {...props} />;
};
