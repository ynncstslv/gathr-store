export type CartProductType = {
	id: string;
	name: string;
	description: string;
	category: string;
	brand?: string;
	set?: string;
	selectedImage: SelectedImageType;
	stock: number;
	quantity: number;
	price: number;
};

export type CartContextType = {
	cartProducts: CartProductType[] | null;
	cartTotalQuantity: number;
	cartTotalAmount: number;
	paymentIntent: string | null;
	handleAddProductToCart: (product: CartProductType) => void;
	handleRemoveProductFromCart: (product: CartProductType) => void;
	handleCartQuantityIncrease: (product: CartProductType) => void;
	handleCartQuantityDecrease: (product: CartProductType) => void;
	handleClearCart: () => void;
	handleSetPaymentIntent: (val: string | null) => void;
};

export type ImageType = {
	image: File | null;
	color: string;
	colorCode: string;
};

export type SelectedImageType = {
	image: string;
	color: string;
	colorCode: string;
};

export type UploadedImageType = {
	image: string;
	color: string;
	colorCode: string;
};
