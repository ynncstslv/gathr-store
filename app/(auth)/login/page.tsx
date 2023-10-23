import Container from '@/components/Container';
import FormWrap from '@/components/FormWrap';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
	return (
		<main className="min-h-full flex flex-col justify-center bg-gradient-to-tr from-violet-950 to-violet-800">
			<Container>
				<FormWrap>
					<LoginForm />
				</FormWrap>
			</Container>
		</main>
	);
}
