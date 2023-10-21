'use client';

import { useState, useEffect } from 'react';

import axios from 'axios';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import Loader from '../Loader';

import 'swiper/css';

interface Card {
	image_uris: {
		normal: string;
	};
	name: string;
	set_name: string;
	prices: {
		usd: number;
	};
}

const Hottest = () => {
	const [loading, setLoading] = useState(true);
	const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	useEffect(() => {
		async function fetchRandomCards() {
			const fetchedCards = [];
			try {
				for (let i = 0; i < 5; i++) {
					const response = await axios.get(
						'https://api.scryfall.com/cards/random'
					);
					if (response.data) {
						fetchedCards.push(response.data);
					}
				}
				setCards(fetchedCards);
			} catch (error) {
				console.error('Error while fetching data:', error);
			}
		}

		fetchRandomCards();
	}, []);

	return (
		<section className="w-full mt-10 mx-auto md:mt-16">
			<div className="mb-8 text-center md:mb-12 md:text-start">
				<h1 className="mb-1 font-bold text-2xl text-violet-950 lg:text-4xl">
					Hottest Cards
				</h1>
				<p className="text-sm text-neutral-600 md:text-base">
					Our client&apos;s most viewed cards over this week.
				</p>
			</div>
			<div>
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
						{cards.map((card, index) => (
							<SwiperSlide key={index}>
								<Image
									src={card.image_uris?.normal}
									alt={card.name}
									width={250}
									height={350}
									className="w-[50%] mx-auto md:w-[250px]"
								/>
								<div className="mt-4 text-center">
									<h3 className="font-semibold text-violet-950">{card.name}</h3>
									<p className="mb-2 text-sm text-neutral-500">
										{card.set_name}
									</p>
									{card.prices?.usd > 0 ? (
										<p className="font-semibold text-violet-700">
											$ {card.prices?.usd}
										</p>
									) : (
										<p className="font-semibold text-neutral-400">
											Price Not Available
										</p>
									)}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</section>
	);
};

export default Hottest;
