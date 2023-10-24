import { useRouter } from 'next/navigation';
import Logo from '../Logo';
import { Button } from '../ui/button';
import NavLinks from './NavLinks';
import Search from './Search';
import CartIcon from './CartIcon';
import { SearchIcon } from 'lucide-react';
import MobileSidebar from './mobile/MobileSidebar';
import UserMenu from './UserMenu';
import getCurrentUser from '@/actions/getCurrentUser';

const Nav = async () => {
	const currentUser = await getCurrentUser();

	return (
		<>
			<nav className="px-1 py-3 bg-violet-950 md:px-0 md:py-4">
				<div className="max-w-[90%] flex items-center justify-between gap-8 mx-auto 2xl:max-w-[80%]">
					<Logo />
					<Search />
					<div className="flex items-center justify-end gap-2">
						<UserMenu currentUser={currentUser!} />
						<div className="flex items-center gap-3">
							<Button
								variant="ghost"
								size="icon"
								className="flex text-violet-100 transition hover:text-violet-100 hover:bg-transparent hover:opacity-90 sm:hidden"
							>
								<SearchIcon size={24} />
							</Button>
							<CartIcon />
							<MobileSidebar currentUser={currentUser!} />
						</div>
					</div>
				</div>
			</nav>
			<NavLinks />
		</>
	);
};

export default Nav;
