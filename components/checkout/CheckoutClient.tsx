'use client';

import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loader from '../Loader';
import { Button } from '../ui/button';
import Image from 'next/image';

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutClient = () => {
	const router = useRouter();
	const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [clientSecret, setClientSecret] = useState('');
	const [paymentSuccess, setPaymentSuccess] = useState(false);

	useEffect(() => {
		if (cartProducts) {
			setLoading(true);
			setError(false);

			fetch('/api/payment-intent', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					items: cartProducts,
					payment_intent_id: paymentIntent,
				}),
			})
				.then((res) => {
					setLoading(false);

					if (res.status === 401) {
						return router.push('/login');
					}

					return res.json();
				})
				.then((data) => {
					setClientSecret(data.paymentIntent.client_secret);

					handleSetPaymentIntent(data.paymentIntent.id);
				})
				.catch((err: any) => {
					setError(true);

					console.log('Error', err);
					toast.error('Something went wrong!');
				});
		}
	}, [cartProducts, paymentIntent, handleSetPaymentIntent, router]);

	const options: StripeElementsOptions = {
		clientSecret,
		appearance: {
			theme: 'stripe',
			labels: 'floating',
		},
	};

	const handleSetPaymentSuccess = useCallback((value: boolean) => {
		setPaymentSuccess(value);
	}, []);

	return (
		<div className="w-full">
			{clientSecret && cartProducts && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm
						clientSecret={clientSecret}
						handleSetPaymentSuccess={handleSetPaymentSuccess}
					/>
				</Elements>
			)}
			{loading && <Loader />}
			{error && (
				<div className="flex flex-col items-center">
					<Image
						src="/assets/images/empty-cart.png"
						alt="Empty"
						width={250}
						height={250}
					/>
					<h2 className="font-bold text-xl text-center text-violet-950">
						Something went wrong!
					</h2>
					<p className="mt-2 font-light text-sm text-center text-gray-500">
						We&apos;re sorry that happened...We&apos;ll check everything and fix
						it as soon as possible!
					</p>
					<Button
						className="mt-6 text-violet-950 bg-teal-400 hover:bg-teal-400 hover:opacity-90"
						onClick={() => router.push('/cart')}
					>
						Go Back!
					</Button>
				</div>
			)}
			{paymentSuccess && (
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-center text-violet-950">Payment Success!</h1>
					<div className="w-full max-w-[220px]">
						<Button onClick={() => router.push('/orders')}>Your Orders</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CheckoutClient;
