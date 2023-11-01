import Link from 'next/link';

const DiscountBanner = () => {
	return (
		<section className="w-full mt-10 mx-auto md:mt-16">
			<Link href="/store">
				<div className="py-4 font-bold text-xs tracking-wider text-center text-violet-900 border rounded-lg border-neutral-200 bg-neutral-100 shadow-md transition hover:scale-105 hover:shadow-xl md:py-8 md:text-3xl">
					FREE SHIPPING ON <span className="text-violet-500">SEALED</span>{' '}
					ORDERS OVER $50!
				</div>
			</Link>
		</section>
	);
};

export default DiscountBanner;
