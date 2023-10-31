'use client';

import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CheckboxProps {
	id: string;
	label: string;
	disabled?: boolean;
	register: UseFormRegister<FieldValues>;
}

const Checkbox: FC<CheckboxProps> = ({ id, label, disabled, register }) => {
	return (
		<div className="w-full flex items-center gap-2 mb-4 md:mb-0">
			<input id={id} type="checkbox" disabled={disabled} {...register(id)} />
			<label htmlFor={id} className="font-light text-sm text-neutral-500">
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
