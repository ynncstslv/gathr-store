import { CartContextType, CartProductType } from '@/types/types';
import { createContext, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
	[propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
	const [cartTotalAmount, setCartTotalAmount] = useState(0);
	const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
	const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
		null
	);
	const [paymentIntent, setPaymentIntent] = useState<string | null>(null);
	const [isToastShown, setIsToastShown] = useState(false);

	useEffect(() => {
		const cartItems: any = localStorage.getItem('gathrCartItems');
		const cProducts: CartProductType[] | null = JSON.parse(cartItems);

		const gathrPaymentIntetn: any = localStorage.getItem('gathrPaymentIntent');
		const paymentIntent: string | null = JSON.parse(gathrPaymentIntetn);

		setCartProducts(cProducts);
		setPaymentIntent(paymentIntent);
	}, []);

	useEffect(() => {
		const getTotals = () => {
			if (cartProducts) {
				const { total, qty } = cartProducts?.reduce(
					(acc, item) => {
						const itemTotal = item.price * item.quantity;

						acc.total += itemTotal;
						acc.qty += item.quantity;

						return acc;
					},
					{ total: 0, qty: 0 }
				);

				setCartTotalQuantity(qty);
				setCartTotalAmount(total);
			}
		};

		getTotals();
	}, [cartProducts]);

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

	const handleRemoveProductFromCart = useCallback(
		(product: CartProductType) => {
			if (cartProducts) {
				const filteredProducts = cartProducts.filter((item) => {
					return item.id !== product.id;
				});

				setCartProducts(filteredProducts);
				toast.success('Product removed from cart!');

				localStorage.setItem(
					'gathrCartItems',
					JSON.stringify(filteredProducts)
				);
			}
		},
		[cartProducts]
	);

	const handleCartQuantityIncrease = useCallback(
		(product: CartProductType) => {
			let updatedCart;

			if (product.quantity === product.stock) {
				return toast.error('Product quantity cannot exceed stock!');
			}

			if (cartProducts) {
				updatedCart = [...cartProducts];

				const existingIndex = cartProducts.findIndex(
					(item) => item.id === product.id
				);

				if (existingIndex > -1) {
					updatedCart[existingIndex].quantity += 1;
				}

				setCartProducts(updatedCart);
				localStorage.setItem('gathrCartItems', JSON.stringify(updatedCart));
			}
		},
		[cartProducts]
	);

	const handleCartQuantityDecrease = useCallback(
		(product: CartProductType) => {
			let updatedCart;

			if (product.quantity === 1) {
				return toast.error('Product quantity cannot be less than 1!');
			}

			if (cartProducts) {
				updatedCart = [...cartProducts];

				const existingIndex = cartProducts.findIndex(
					(item) => item.id === product.id
				);

				if (existingIndex > -1) {
					updatedCart[existingIndex].quantity -= 1;
				}

				setCartProducts(updatedCart);
				localStorage.setItem('gathrCartItems', JSON.stringify(updatedCart));
			}
		},
		[cartProducts]
	);

	const handleClearCart = useCallback(() => {
		setCartProducts(null);
		setCartTotalQuantity(0);

		localStorage.setItem('gathrCartItems', JSON.stringify(null));
	}, []);

	const handleSetPaymentIntent = useCallback((val: string | null) => {
		setPaymentIntent(val);

		localStorage.setItem('gathrPaymentIntent', JSON.stringify(val));
	}, []);

	const value = {
		cartTotalAmount,
		cartTotalQuantity,
		cartProducts,
		paymentIntent,
		handleAddProductToCart,
		handleRemoveProductFromCart,
		handleCartQuantityIncrease,
		handleCartQuantityDecrease,
		handleClearCart,
		handleSetPaymentIntent,
	};

	return <CartContext.Provider value={value} {...props} />;
};
