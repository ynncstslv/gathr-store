'use client';

import { useEffect, useState } from 'react';
import Input from '../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import SocialButton from './SocialButton';
import { BsGoogle, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
	const router = useRouter();
	const session = useSession();
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

	useEffect(() => {
		if (session?.status === 'authenticated') router.push('/');
	}, [session?.status, router]);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		signIn('credentials', { ...data, redirect: false })
			.then((callback) => {
				if (callback?.error) {
					toast.error('Something went wrong!');
				}

				if (callback?.ok && !callback?.error) {
					toast.success('Successfully logged in!');
				}
			})
			.finally(() => setIsLoading(false));
	};

	const socialAction = (action: string) => {
		setIsLoading(true);

		signIn(action, { redirect: false })
			.then((callback) => {
				if (callback?.error) {
					toast.error('Something went wrong!');
				}

				if (callback?.ok && !callback?.error) {
					toast.success('Successfully logged in!');
				}
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div>
			<div className="text-center">
				<h1 className="mb-2 font-bold text-2xl text-violet-950 lg:text-3xl">
					Login
				</h1>
				<p className="text-sm text-neutral-400">Login to your Gathr account!</p>
			</div>
			<hr className="my-6" />
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
						Or sign in with
					</span>
				</div>
			</div>
			<div className="flex gap-2 mt-6">
				<SocialButton
					icon={BsGoogle}
					label="Google"
					onClick={() => {
						socialAction('google');
					}}
				/>
				<SocialButton
					icon={BsGithub}
					label="Github"
					onClick={() => {
						socialAction('github');
					}}
				/>
			</div>
			<Button
				className="w-full mt-6 text-violet-950 bg-teal-400 transition hover:bg-teal-400 hover:opacity-90"
				onClick={handleSubmit(onSubmit)}
				disabled={isLoading}
			>
				Login
			</Button>
			<div className="flex gap-2 justify-center py-2 mt-3 text-xs text-neutral-500">
				<div>Don&apos;t have an account?</div>
				<Link href="/register" className="underline cursor-pointer">
					Register
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
