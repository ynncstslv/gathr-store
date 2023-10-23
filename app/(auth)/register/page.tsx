import Container from '@/components/Container';
import FormWrap from '@/components/FormWrap';
import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {
	return (
		<main className="min-h-full flex flex-col justify-center bg-gradient-to-tr from-violet-950 to-violet-800">
			<Container>
				<FormWrap>
					<RegisterForm />
				</FormWrap>
			</Container>
		</main>
	);
}
