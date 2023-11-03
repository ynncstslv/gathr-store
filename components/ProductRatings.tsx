import moment from 'moment';
import { FC } from 'react';
import { Badge } from './ui/badge';
import { ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Avatar from './Avatar';

interface ProductRatingsProps {
	product: any;
}

const ProductRatings: FC<ProductRatingsProps> = ({ product }) => {
	return (
		<section className="w-full mt-12 mx-auto md:mt-16">
			<div className="mb-8 text-center md:text-start">
				<h1 className="mb-1 font-bold text-2xl text-violet-950 lg:text-3xl">
					Reviews
				</h1>
				<p className="text-sm text-neutral-500">
					What are our clients saying about this product?
				</p>
			</div>
			<div className="text-sm">
				{product.reviews.length > 0 ? (
					product.reviews.map((review: any) => {
						return (
							<div
								key={review.id}
								className="p-6 mb-4 border rounded-lg border-violet-200 shadow-md"
							>
								<div className="flex items-center justify-between gap-8">
									<div className="flex items-center gap-2">
										<Avatar user={review?.user.image} />
										<p className="font-semibold text-base text-violet-800">
											{review?.user.name}
										</p>
									</div>
									<div className="flex items-center gap-4">
										<p className="font-light text-xs text-neutral-500">
											{moment(review.createdDate).fromNow()}
										</p>
										<Badge className="font-medium text-yellow-900 bg-yellow-500 transition hover:bg-yellow-500 hover:opacity-90">
											{review.rating} <ThumbsUp size={12} className="ml-1" />
										</Badge>
									</div>
								</div>
								<hr className="my-4" />
								<p className="font-light text-violet-900">{`"${review.comment}"`}</p>
							</div>
						);
					})
				) : (
					<p className="text-center text-neutral-300 md:text-start">
						No reviews for this product yet...
					</p>
				)}
			</div>
		</section>
	);
};

export default ProductRatings;
