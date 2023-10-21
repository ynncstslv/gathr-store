'use client';

import Image from 'next/image';
import { FC } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { InfoIcon, ThumbsUp } from 'lucide-react';
import { Badge } from './ui/badge';

interface ProductCardProps {
	data: any;
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {
	const router = useRouter();

	const productRating =
		data.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) /
		data.reviews.length;

	return (
		<div className="p-6 mx-3 border border-neutral-300 rounded-lg shadow-md">
			<Image
				src={data.images[0].image}
				alt={data.name}
				width={220}
				height={220}
				className="w-[50%] mx-auto md:w-[220px]"
			/>
			<div className="my-4 text-center">
				<h4 className="font-light text-sm text-neutral-500">{data.set}</h4>
				<h3 className="mb-2 font-bold text-lg text-violet-950">{data.name}</h3>
				<hr className="mb-3" />
				<div className="flex items-center justify-center gap-4">
					<div>
						{!productRating ? (
							<Badge className="font-medium text-neutral-500 border border-neutral-500 bg-transparent transition hover:bg-transparent hover:opacity-90">
								No Reviews
							</Badge>
						) : (
							<Badge className="font-medium text-yellow-900 bg-yellow-500 transition hover:bg-yellow-500 hover:opacity-90">
								{productRating} <ThumbsUp size={12} className="ml-1" />
							</Badge>
						)}
					</div>
					<p className="font-semibold text-lg text-violet-700">{`$${data.price}`}</p>
				</div>
				<Button
					className="w-full mt-8 text-violet-950 bg-teal-400 transition hover:bg-teal-400 hover:opacity-90"
					onClick={() => router.push(`/store/${data.id}`)}
				>
					<InfoIcon size={18} className="mr-2" /> More Information
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
