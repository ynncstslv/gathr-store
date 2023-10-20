import Image from 'next/image';
import Link from 'next/link';

import { DM_Sans } from 'next/font/google';

const logo = DM_Sans({ weight: '600', subsets: ['latin'] });

const Logo = () => {
	return (
		<>
			<Link href="/" className="flex items-center justify-start">
				<div className="w-8 h-8 relative mr-2">
					<Image src="/assets/logo-icon-white.png" alt="gathr logo" />
				</div>
				<h1
					className={`${logo.className} text-2xl tracking-tight text-neutral-50 md:text-3xl`}
				>
					Gathr
				</h1>
			</Link>
		</>
	);
};

export default Logo;
