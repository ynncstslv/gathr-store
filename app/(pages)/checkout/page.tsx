import Container from '@/components/Container';
import FormWrap from '@/components/FormWrap';
import CheckoutClient from '@/components/checkout/CheckoutClient';

export default function CheckoutPage() {
	return (
		<main className="pt-4 pb-14 md:py-16">
			<Container>
				<FormWrap>
					<CheckoutClient />
				</FormWrap>
			</Container>
		</main>
	);
}
