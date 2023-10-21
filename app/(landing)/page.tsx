import Container from '@/components/Container';
import Available from '@/components/landing/Available';
import DiscountBanner from '@/components/landing/DiscountBanner';
import Featured from '@/components/landing/Featured';
import Hero from '@/components/landing/Hero';
import Hottest from '@/components/landing/Hottest';

export default function LandingPage() {
	return (
		<main className="py-6 md:py-18">
			<Container>
				<Hero />
				<Featured />
				<DiscountBanner />
				<Hottest />
				<Available />
			</Container>
		</main>
	);
}
