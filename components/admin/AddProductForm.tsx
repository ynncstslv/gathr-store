'use client';

import { useState } from 'react';
import Input from '../inputs/Input';
import { FieldValues, useForm } from 'react-hook-form';
import Textarea from '../inputs/Textarea';
import Checkbox from '../inputs/Checkbox';

const AddProductForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		reset,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			description: '',
			image: [],
			category: '',
			brand: '',
			price: '',
			stock: '',
			inStock: false,
		},
	});
	return (
		<div className="w-full">
			<div className="mb-4 text-center md:text-start">
				<h1 className="font-bold text-2xl text-violet-950 lg:text-4xl">
					Add Product
				</h1>
			</div>
			<hr />
			<div className="mt-4">
				<div className="flex flex-col items-center md:flex-row md:gap-4">
					<Input
						id="name"
						label="Name"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<Input
						id="price"
						label="Price"
						type="number"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
				</div>
				<div className="flex flex-col items-center md:flex-row md:gap-4">
					<Input
						id="brand"
						label="Brand"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						id="category"
						label="Category"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>
				<Textarea
					id="description"
					label="Description"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<div className="flex flex-col items-center md:flex-row md:gap-4">
					<Input
						id="stock"
						label="Stock"
						type="number"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<Checkbox
						id="inStock"
						label="This Product is in Stock"
						register={register}
					/>
				</div>
			</div>
		</div>
	);
};

export default AddProductForm;
