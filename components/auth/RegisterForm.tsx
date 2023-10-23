'use client';

import { useState } from 'react';
import Input from '../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import SocialButton from './SocialButton';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		console.log(data);
	};

	return (
		<div>
			<div className="text-center">
				<h1 className="mb-2 font-bold text-2xl text-violet-950 lg:text-3xl">
					Register
				</h1>
				<p className="text-sm text-neutral-400">Create your Gathr account!</p>
			</div>
			<hr className="my-6" />
			<Input
				id="name"
				label="Name"
				type="text"
				placeholder="John Doe"
				register={register}
				disabled={isLoading}
				errors={errors}
				required
			/>
			<Input
				id="email"
				label="Email"
				type="email"
				placeholder="johndoe@mail.com"
				register={register}
				disabled={isLoading}
				errors={errors}
				required
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				placeholder="********"
				register={register}
				disabled={isLoading}
				errors={errors}
				required
			/>
			<div className="relative mt-6">
				<div className="flex items-center absolute inset-0">
					<div className="w-full border-t border-neutral-300" />
				</div>
				<div className="flex justify-center relative text-sm">
					<span className="px-2 text-neutral-500 bg-white">
						Or register with
					</span>
				</div>
			</div>
			<div className="flex gap-2 mt-6">
				<SocialButton icon={BsGoogle} label="Google" onClick={() => {}} />
				<SocialButton icon={BsGithub} label="Github" onClick={() => {}} />
			</div>
			<Button
				className="w-full mt-6 text-violet-950 bg-teal-400 transition hover:bg-teal-400 hover:opacity-90"
				onClick={handleSubmit(onSubmit)}
			>
				Register
			</Button>
			<div className="flex gap-2 justify-center py-2 mt-3 text-xs text-neutral-500">
				<div>Already have an account?</div>
				<Link href="/login" className="underline cursor-pointer">
					Sign In!
				</Link>
			</div>
		</div>
	);
};

export default RegisterForm;
