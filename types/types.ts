import { User } from '@prisma/client';

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
	image: string;
};

export type CartContextType = {
	cartTotalAmount: number;
	cartTotalQuantity: number;
	cartProducts: CartProductType[] | null;
	paymentIntent: string | null;
	handleAddProductToCart: (product: CartProductType) => void;
	handleRemoveProductFromCart: (product: CartProductType) => void;
	handleCartQuantityIncrease: (product: CartProductType) => void;
	handleCartQuantityDecrease: (product: CartProductType) => void;
	handleClearCart: () => void;
	handleSetPaymentIntent: (val: string | null) => void;
};

export type SafeUser = Omit<
	User,
	'createdAt' | 'updatedAt' | 'emailVerified'
> & { createdAt: string; updatedAt: string; emailVerified: string | null };

export type ImageType = {
	color: string;
	colorCode: string;
	image: File | null;
};

export type UploadedImageType = {
	color: string;
	colorCode: string;
	image: string;
};
