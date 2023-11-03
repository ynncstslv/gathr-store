'use client';

import { FC } from 'react';
import { Order, Product, Review, User } from '@prisma/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { Button } from './ui/button';
import { Rating } from '@mui/material';
import Textarea from './inputs/Textarea';
import toast from 'react-hot-toast';
import axios from 'axios';

interface AddReviewProps {
	product: Product & {
		reviews: Review[];
	};
	user:
		| (User & {
				orders: Order[];
		  })
		| null;
}

const AddReview: FC<AddReviewProps> = ({ product, user }) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			comment: '',
			rating: 0,
		},
	});

	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldTouch: true,
			shouldDirty: true,
			shouldValidate: true,
		});
	};

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		if (data.rating === 0) {
			setIsLoading(false);
			return toast.error('No rating selected!');
		}

		const ratingData = { ...data, userId: user?.id, product: product };

		axios
			.post('/api/review', ratingData)
			.then(() => {
				toast.success('Review submitted');
				router.refresh();
				reset();
			})
			.catch((err) => {
				toast.error('Something went wrong!');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	if (!user || !product) return null;

	const deliveredOrder = user?.orders.some((order) =>
		order.products.find(
			(item) => item.id === product.id && order.deliveryStatus === 'delivered'
		)
	);

	const userReview = product?.reviews.find((review: Review) => {
		return review.userId === user?.id;
	});

	if (userReview || !deliveredOrder) return null;

	return (
		<div className="p-4 mt-16 border border-neutral-200 rounded-lg">
			<div className="mb-2 text-start">
				<h1 className="mb-1 font-semibold text-lg text-violet-900">
					Add Review
				</h1>
			</div>
			<Rating
				onChange={(event, newValue) => {
					setCustomValue('rating', newValue);
				}}
				className="mb-4"
			/>
			<Textarea
				id="comment"
				label="How do you feel about this product?"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Button
				className="w-full text-violet-700 border border-violet-700 bg-transparent hover:bg-transparent hover:opacity-90"
				onClick={handleSubmit(onSubmit)}
				disabled={isLoading}
			>
				Submit Review
			</Button>
		</div>
	);
};

export default AddReview;
