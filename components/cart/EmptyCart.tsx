'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const EmptyCart = () => {
	const router = useRouter();
	return (
		<section className="w-full py-4 mx-auto text-center">
			<Image
				src="/assets/images/empty-cart.png"
				alt="empty cart"
				width={250}
				height={250}
				className="mx-auto"
			/>
			<h1 className="mb-2 font-bold text-2xl text-violet-950">
				Your cart is empty...
			</h1>
			<p className="mb-10 font-light text-sm text-neutral-500">
				Don&apos;t worry, you can always go back to our store and select
				something for you!
			</p>
			<div>
				<Button
					className="text-violet-950 bg-teal-400 transition hover:bg-teal-400 hover:opacity-90"
					onClick={() => router.push('/store')}
				>
					Go Shopping!
				</Button>
			</div>
		</section>
	);
};

export default EmptyCart;
