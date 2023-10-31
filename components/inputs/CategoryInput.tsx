'use client';

import { FC } from 'react';

interface CategoryInputProps {
	name: string;
	selected?: boolean;
	onClick: (value: string) => void;
}

const CategoryInput: FC<CategoryInputProps> = ({ name, selected, onClick }) => {
	return (
		<div
			className={`p-4 border rounded-lg transition cursor-pointer hover:text-violet-800 hover:border-violet-800 ${
				selected
					? 'text-violet-600 border-violet-600'
					: 'text-neutral-400 border-neutral-300'
			}`}
			onClick={() => onClick(name)}
		>
			<h3 className="text-sm">{name}</h3>
		</div>
	);
};

export default CategoryInput;
