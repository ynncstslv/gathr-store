import { CartProductType, SelectedImageType } from '@/types/types';
import Image from 'next/image';
import { FC } from 'react';

interface ProductImageProps {
	product: any;
	cartProduct: CartProductType;
	handleColorSelect: (value: SelectedImageType) => void;
}

const ProductImage: FC<ProductImageProps> = ({
	product,
	cartProduct,
	handleColorSelect,
}) => {
	return (
		<div className="w-full m-auto grid grid-cols-6 gap-2 h-full min-h-[400px] max-h-[500px] sm:max-h-[100px]">
			<div className="h-full min-h-[400px] max-h-[500px] flex flex-col items-center justify-center gap-4 sm:max-h-[100px]">
				{product.images.map((image: SelectedImageType) => {
					return (
						<div
							key={cartProduct.id}
							className={`aspect-square w-[80%] relative rounded-md border-violet-300 ${
								cartProduct.selectedImage.color === image.color
									? 'border-2'
									: 'border-0'
							}`}
							onClick={() => handleColorSelect(image)}
						>
							<Image
								src={image.image}
								alt={image.color}
								fill
								className="p-1 rounded-md object-contain cursor-pointer"
							/>
						</div>
					);
				})}
			</div>
			<div className="aspect-square col-span-5 relative">
				<Image
					src={cartProduct.selectedImage.image}
					alt={cartProduct.name}
					fill
					className="w-full h-full min-h-[400px] max-h-[500px] object-contain sm:max-h-[100px]"
				/>
			</div>
		</div>
	);
};

export default ProductImage;
