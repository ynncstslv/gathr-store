import Container from '@/components/Container';
import Hero from '@/components/landing/Hero';
import Categories from '@/components/store/Categories';
import Products from '@/components/store/Products';

export default function StorePage() {
	return (
		<main className="py-6 md:py-18">
			<Container>
				<Categories />
				<Products />
			</Container>
		</main>
	);
}
