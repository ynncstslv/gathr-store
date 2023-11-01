'use client';

import { useCart } from '@/hooks/useCart';
import {
	AddressElement,
	PaymentElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import React, { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';

interface CheckoutFormProps {
	clientSecret: string;
	handleSetPaymentSuccess: (value: boolean) => void;
}

const CheckoutForm: FC<CheckoutFormProps> = ({
	clientSecret,
	handleSetPaymentSuccess,
}) => {
	const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
		useCart();
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		if (!clientSecret) {
			return;
		}

		handleSetPaymentSuccess(false);
	}, [stripe, clientSecret, handleSetPaymentSuccess]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setLoading(true);

		stripe
			.confirmPayment({
				elements,
				redirect: 'if_required',
			})
			.then((result) => {
				if (!result.error) {
					toast.success('Payment Successful!');

					handleClearCart();
					handleSetPaymentSuccess(true);
					handleSetPaymentIntent(null);
				}

				setLoading(false);
			});
	};

	return (
		<form id="paymentForm" onSubmit={handleSubmit}>
			<div className="mb-8 text-center md:mb-12 md:text-start">
				<h1 className="font-bold text-2xl text-violet-950 lg:text-4xl">
					Checkout
				</h1>
			</div>
			<div className="mb-6">
				<h2 className="mb-2 text-violet-950">Personal Information</h2>
				<AddressElement
					options={{ mode: 'shipping', allowedCountries: ['US', 'UK', 'BR'] }}
				/>
			</div>
			<h2 className="mb-2 text-violet-950">Payment Information</h2>
			<PaymentElement id="paymentElement" options={{ layout: 'tabs' }} />
			<div className="flex items-center justify-between gap-12 mt-8">
				<p className="font-bold text-2xl text-teal-600">
					Total: $ {cartTotalAmount.toFixed(2)}
				</p>
				<Button
					className="w-full max-w-[70%]"
					onClick={() => {}}
					disabled={loading}
				>
					{loading ? 'Processing Payment...' : 'Checkout'}
				</Button>
			</div>
		</form>
	);
};

export default CheckoutForm;
