'use client';

import { ImageType } from '@/types/types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import ImageSelect from './ImageSelect';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';

interface ColorSelectProps {
	item: ImageType;
	addImageToState: (value: ImageType) => void;
	removeImageFromState: (value: ImageType) => void;
	isProductCreated: boolean;
}

const ColorSelect: FC<ColorSelectProps> = ({
	item,
	addImageToState,
	removeImageFromState,
	isProductCreated,
}) => {
	const [isSelected, setIsSelected] = useState(false);
	const [file, setFile] = useState<File | null>(null);

	useEffect(() => {
		if (isProductCreated) {
			setIsSelected(false);
			setFile(null);
		}
	}, [isProductCreated]);

	const handleFileChange = useCallback(
		(value: File) => {
			setFile(value);
			addImageToState({ ...item, image: value });
		},
		[addImageToState, item]
	);

	const handleCheck = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setIsSelected(e.target.checked);

			if (!e.target.checked) {
				setFile(null);
				removeImageFromState(item);
			}
		},
		[item, removeImageFromState]
	);

	return (
		<div className="">
			<div className="h-[50px] flex items-center justify-center gap-2 border rounded-md border-neutral-300">
				<input
					id={item.color}
					type="checkbox"
					checked={isSelected}
					onChange={handleCheck}
					className="cursor-pointer"
				/>
				<label
					htmlFor={item.color}
					className="font-light text-sm text-neutral-400 cursor-pointer"
				>
					{item.color}
				</label>
			</div>
			{isSelected && !file && (
				<div className="mt-2">
					<ImageSelect item={item} handleFileChange={handleFileChange} />
				</div>
			)}
			{file && (
				<div className="flex items-center justify-between gap-4 p-2 mt-2 border border-dashed rounded-md border-teal-600">
					<p className="text-xs truncate">{file?.name}</p>
					<Button
						onClick={() => {
							setFile(null);
							removeImageFromState(item);
						}}
						className="text-neutral-50 bg-red-600 transition hover:bg-red-600 hover:opacity-90"
					>
						<Trash size={18} />
					</Button>
				</div>
			)}
		</div>
	);
};

export default ColorSelect;
