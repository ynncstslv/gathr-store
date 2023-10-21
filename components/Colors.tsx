'use client';

import { CartProductType, SelectedImageType } from '@/types/types';
import { FC } from 'react';

interface ColorsProps {
	cartProduct: CartProductType;
	images: SelectedImageType[];
	handleColorSelect: (value: SelectedImageType) => void;
}

const Colors: FC<ColorsProps> = ({
	cartProduct,
	images,
	handleColorSelect,
}) => {
	return (
		<div>
			<div className="flex items-center gap-4">
				<span className="font-medium text-sm text-neutral-400">Colors:</span>
				<div className="flex items-center justify-center gap-1">
					{images.map((image) => {
						return (
							<div
								key={cartProduct.id}
								className={`w-7 h-7 flex items-center justify-center rounded-full border-teal-600 cursor-pointer ${
									cartProduct.selectedImage.color === image.color
										? 'border-2'
										: 'border-0'
								}`}
								onClick={() => handleColorSelect(image)}
							>
								<div
									style={{ background: image.colorCode }}
									className="w-5 h-5 border rounded-full border-neutral-100"
								></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Colors;
