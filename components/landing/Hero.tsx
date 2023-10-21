'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Hero = () => {
	return (
		<section className="w-full">
			<Swiper
				modules={[Autoplay]}
				slidesPerView={1}
				autoplay={{
					delay: 3000,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				loop
				className="h-[150px] rounded-lg md:h-[290px] md:rounded-xl lg:h-[400px] xl:h-[640px]"
			>
				<SwiperSlide>
					<Link href="#">
						<Image
							src="/assets/images/hero/mtg-docwho-bigger.jpg"
							alt="MTG Doctor Who"
							width={1250}
							height={1250}
							className="w-full"
						/>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="#">
						<Image
							src="/assets/images/hero/mtg-ixalan-bigger.jpg"
							alt="MTG Ixalan"
							width={1250}
							height={1250}
							className="w-full"
						/>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="#">
						<Image
							src="/assets/images/hero/mtg-mylittlepony-bigger.jpg"
							alt="MTG My Little Pony"
							width={1250}
							height={1250}
							className="w-full"
						/>
					</Link>
				</SwiperSlide>
				<SwiperSlide>
					<Link href="#">
						<Image
							src="/assets/images/hero/mtg-dragonshield-bigger.jpg"
							alt="Dragon Shield Accessories"
							width={1250}
							height={1250}
							className="w-full"
						/>
					</Link>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Hero;
