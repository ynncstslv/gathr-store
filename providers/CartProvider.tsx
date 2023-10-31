'use client';

import { FC } from 'react';
import { CartContextProvider } from '@/context/cartContext';

interface CartProviderProps {
	children: React.ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
	return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
