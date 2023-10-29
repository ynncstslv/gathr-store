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
			<h2 className="">Personal Information</h2>
			<AddressElement
				options={{ mode: 'shipping', allowedCountries: ['US', 'UK', 'BR'] }}
			/>
			<h2 className="">Payment Information</h2>
			<PaymentElement id="paymentElement" options={{ layout: 'tabs' }} />
			<div>
				<p className="">Total: $ {cartTotalAmount.toFixed(2)}</p>
			</div>
			<Button onClick={() => {}} disabled={loading}>
				{loading ? 'Processing Payment...' : 'Checkout'}
			</Button>
		</form>
	);
};

export default CheckoutForm;
