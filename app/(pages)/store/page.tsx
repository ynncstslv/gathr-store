import Container from '@/components/Container';
import CategoriesMenu from '@/components/store/CategoriesMenu';
import Products from '@/components/store/Products';

export default function StorePage() {
	return (
		<main className="py-6 md:py-18">
			<Container>
				<CategoriesMenu />
				<Products />
			</Container>
		</main>
	);
}
