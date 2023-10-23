'use client';

import { useRouter } from 'next/navigation';
import Logo from '../Logo';
import { Button } from '../ui/button';
import NavLinks from './NavLinks';
import Search from './Search';
import CartIcon from './CartIcon';
import { SearchIcon } from 'lucide-react';
import MobileSidebar from './mobile/MobileSidebar';

const Nav = () => {
	const router = useRouter();
	return (
		<>
			<nav className="px-1 py-3 bg-violet-950 md:px-0 md:py-4">
				<div className="max-w-[90%] flex items-center justify-between gap-8 mx-auto 2xl:max-w-[80%]">
					<Logo />
					<Search />
					<div className="flex items-center justify-end gap-2">
						<Button
							className="hidden px-6 text-violet-950 bg-teal-400 transition hover:bg-teal-400 hover:opacity-90 sm:block"
							onClick={() => router.push('/login')}
						>
							Login
						</Button>
						<div className="flex items-center gap-3">
							<Button
								variant="ghost"
								size="icon"
								className="flex text-violet-100 transition hover:text-violet-100 hover:bg-transparent hover:opacity-90 sm:hidden"
								onClick={() => router.push('/')}
							>
								<SearchIcon size={24} />
							</Button>
							<CartIcon />
							<MobileSidebar />
						</div>
					</div>
				</div>
			</nav>
			<NavLinks />
		</>
	);
};

export default Nav;
