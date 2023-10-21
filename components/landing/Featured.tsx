'use client';

import { useEffect, useState } from 'react';
import Loader from '../Loader';
import { dummyProducts } from '../../lib/dummy';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ProductCard from '../ProductCard';

const Featured = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<section className="w-full mt-10 mx-auto md:mt-16">
			<div className="mb-8 text-center md:mb-12 md:text-start">
				<h1 className="mb-1 font-bold text-2xl text-violet-950 lg:text-4xl">
					Featured
				</h1>
				<p className="text-sm text-neutral-600 md:text-base">
					New releases and best sellers for this month.
				</p>
			</div>
			{loading ? (
				<Loader />
			) : (
				<Swiper
					className="my-swiper"
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
						1440: {
							slidesPerView: 5,
						},
					}}
				>
					{dummyProducts.map((product) => (
						<SwiperSlide key={product.id}>
							<ProductCard data={product} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</section>
	);
};

export default Featured;
