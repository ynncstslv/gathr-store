import { User } from '@prisma/client';
import { StaticImageData } from 'next/image';

export type CartProductType = {
	id: string;
	name: string;
	description: string;
	category: string;
	brand?: string;
	set: string;
	selectedImage: SelectedImageType;
	stock: number;
	quantity: number;
	price: number;
};

export type SelectedImageType = {
	color: string;
	colorCode: string;
	image: StaticImageData;
};

export type CartContextType = {
	cartTotalAmount: number;
	cartTotalQuantity: number;
	cartProducts: CartProductType[] | null;
	handleAddProductToCart: (product: CartProductType) => void;
	handleRemoveProductFromCart: (product: CartProductType) => void;
	handleCartQuantityIncrease: (product: CartProductType) => void;
	handleCartQuantityDecrease: (product: CartProductType) => void;
	handleClearCart: () => void;
};

export type SafeUser = Omit<
	User,
	'createdAt' | 'updatedAt' | 'emailVerified'
> & { createdAt: string; updatedAt: string; emailVerified: string | null };
