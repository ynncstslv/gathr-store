import { StaticImageData } from 'next/image';

export type CartProductType = {
	id: string;
	name: string;
	description: string;
	category: string;
	brand?: string;
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

export type CartContextType = { cartTotalQuantity: number };
