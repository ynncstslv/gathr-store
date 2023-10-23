import { cn } from '@/lib/utils';
import { FC } from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface InputProps {
	id: string;
	label: string;
	placeholder?: string;
	type?: string;
	disabled?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const Input: FC<InputProps> = ({
	id,
	label,
	placeholder,
	type,
	disabled,
	required,
	register,
	errors,
}) => {
	return (
		<div className="">
			<label
				htmlFor={id}
				className="block mb-1 text-sm leading-6 text-violet-900"
			>
				{label}
			</label>
			<input
				id={id}
				type={type}
				autoComplete="off"
				className={cn(
					`w-full block px-3 py-2 mb-4 text-neutral-900 border rounded-md border-neutral-300 placeholder:text-neutral-400 focus:ring-1 focus:ring-inset focus:ring-violet-200 sm:text-sm sm:leading-6`,
					errors[id] && 'focus:ring-rose-500',
					disabled && 'opacity-50 cursor-not-allowed'
				)}
				placeholder={placeholder}
				disabled={disabled}
				{...register(id, { required })}
			/>
		</div>
	);
};

export default Input;
