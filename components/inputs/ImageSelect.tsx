'use client';

import { ImageType } from '@/types/types';
import { Upload } from 'lucide-react';
import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageSelectProps {
	item?: ImageType;
	handleFileChange: (value: File) => void;
}

const ImageSelect: FC<ImageSelectProps> = ({ item, handleFileChange }) => {
	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			if (acceptedFiles.length > 0) {
				handleFileChange(acceptedFiles[0]);
			}
		},
		[handleFileChange]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
	});

	return (
		<div
			{...getRootProps()}
			className="flex items-center justify-center p-2 font-normal text-sm text-teal-600 border border-dashed rounded-md border-teal-600 cursor-pointer"
		>
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the image here...</p>
			) : (
				<p className="flex items-center gap-2">
					<Upload size={14} /> Upload
				</p>
			)}
		</div>
	);
};

export default ImageSelect;
