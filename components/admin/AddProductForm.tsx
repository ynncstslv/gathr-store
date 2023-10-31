'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Input from '../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Textarea from '../inputs/Textarea';
import Checkbox from '../inputs/Checkbox';
import { categories, colors } from '@/lib/data';
import CategoryInput from '../inputs/CategoryInput';
import ColorSelect from '../inputs/ColorSelect';
import { ImageType, UploadedImageType } from '@/types/types';
import { Button } from '../ui/button';
import toast from 'react-hot-toast';
import firebaseApp from '@/lib/firebase';
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from 'firebase/storage';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddProductForm = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [images, setImages] = useState<ImageType[] | null>();
	const [isProductCreated, setIsProductCreated] = useState(false);

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
			set: '',
			price: '',
			stock: '',
			inStock: false,
		},
	});

	useEffect(() => {
		setCustomValue('images', images);
	}, [images]);

	useEffect(() => {
		if (isProductCreated) {
			reset();
			setImages(null);
			setIsProductCreated(false);
		}
	}, [isProductCreated, reset]);

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		let uploadedImages: UploadedImageType[] = [];

		if (!data.category) {
			setIsLoading(false);
			return toast.error('A category needs to be selected.');
		}

		if (!data.images || data.images.length === 0) {
			setIsLoading(false);
			return toast.error('At least one image needs to be uploaded.');
		}

		const handleImageUploads = async () => {
			toast('Uploading images...');

			try {
				for (const item of data.images) {
					if (item.image) {
						const fileName = new Date().getTime() + item.image.name;
						const storage = getStorage(firebaseApp);
						const storageRef = ref(storage, `products/${fileName}`);
						const uploadTask = uploadBytesResumable(storageRef, item.image);

						await new Promise<void>((resolve, reject) => {
							uploadTask.on(
								'state_changed',
								(snapshot) => {
									const progress =
										(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
									console.log(`Upload is ${progress}% done`);

									switch (snapshot.state) {
										case 'paused':
											console.log('Upload is paused');
											break;
										case 'running':
											console.log('Upload is running');
											break;
									}
								},
								(error) => {
									console.log('Error while uploading image', error);
									reject(error);
								},
								() => {
									getDownloadURL(uploadTask.snapshot.ref)
										.then((downloadURL) => {
											uploadedImages.push({
												...item,
												image: downloadURL,
											});
											console.log('File available at', downloadURL);
											resolve();
										})
										.catch((error) => {
											console.log('Error while getting downloadURL', error);
										});
								}
							);
						});
					}
				}
			} catch (error) {
				setIsLoading(false);
				console.log('Error while uploading images', error);

				return toast.error('Error while uploading images');
			}
		};

		await handleImageUploads();
		const productData = { ...data, images: uploadedImages };

		axios
			.post('/api/product', productData)
			.then(() => {
				toast.success('Product created successfully');
				setIsProductCreated(true);
				router.refresh();
			})
			.catch((error) => {
				toast.error('Error while creating product');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const category = watch('category');

	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldValidate: true,
			shouldDirty: true,
			shouldTouch: true,
		});
	};

	const addImageToState = useCallback((value: ImageType) => {
		setImages((prev) => {
			if (!prev) {
				return [value];
			}

			return [...prev, value];
		});
	}, []);

	const removeImageFromState = useCallback((value: ImageType) => {
		setImages((prev) => {
			if (prev) {
				const filteredImages = prev.filter(
					(item) => item.color !== value.color
				);

				return filteredImages;
			}

			return prev;
		});
	}, []);

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
						id="brand"
						label="Brand"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						id="set"
						label="Set"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>
				<div className="flex flex-col items-center md:flex-row md:gap-4">
					<Input
						id="price"
						label="Price"
						type="number"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
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
				<Textarea
					id="description"
					label="Description"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<div className="mb-6">
					<h2 className="text-sm text-violet-800">Select a Category</h2>
					<div className="grid grid-cols-2 items-center gap-2 mt-3 text-center md:grid-cols-4">
						{categories.map((item) => (
							<React.Fragment key={item.id}>
								<CategoryInput
									name={item.name}
									onClick={(category) => setCustomValue('category', category)}
									selected={category === item.name}
								/>
							</React.Fragment>
						))}
					</div>
				</div>
				<div className="mb-6">
					<h2 className="mb-2 text-sm text-violet-800">
						Select the available product colors and upload their images.
					</h2>
					<p className="max-w-[75%] text-xs text-neutral-400 md:max-w-full">
						You must upload an image for each of the colors, otherwise your
						color selection will be ignored.
					</p>
					<div className="grid grid-cols-2 items-center gap-4 p-2 mt-4 overflow-y-auto md:grid-cols-3">
						{colors.map((color) => (
							<React.Fragment key={color.colorCode}>
								<ColorSelect
									item={color}
									addImageToState={addImageToState}
									removeImageFromState={removeImageFromState}
									isProductCreated={isProductCreated}
								/>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
			<Button
				className="w-full text-violet-950 bg-teal-400 transition hover:bg-teal-400 hover:opacity-90"
				onClick={handleSubmit(onSubmit)}
				disabled={isLoading}
			>
				Add Product
			</Button>
		</div>
	);
};

export default AddProductForm;
