'use client';

import { FC, useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { User } from '@prisma/client';

interface UserMenuProps {
	currentUser?: User;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<div className="hidden relative md:block">
			<div
				className="flex flex-row items-center gap-3 p-4 text-blue-950 border-[1px] rounded-full border-teal-400 cursor-pointer transition hover:shadow-md md:px-2 md:py-1"
				onClick={toggleOpen}
			>
				<AiOutlineMenu size={20} className="text-teal-400 sm:ml-1" />
				<Avatar user={currentUser} />
			</div>
			{isOpen && (
				<div className="w-[12vw] absolute top-16 right-0 text-sm text-violet-950 border-[1px] rounded-xl border-neutral-200 bg-white shadow-md overflow-hidden z-10 md:top-12">
					<div className="flex flex-col cursor-pointer">
						{currentUser ? (
							<>
								<MenuItem label="Admin" onClick={() => router.push('/admin')} />
								<MenuItem
									label="My Orders"
									onClick={() => router.push('/orders')}
								/>
								<hr />
								<MenuItem label="Sign Out" onClick={() => signOut()} />
							</>
						) : (
							<>
								<MenuItem label="Login" onClick={() => router.push('/login')} />
								<MenuItem
									label="Register"
									onClick={() => router.push('/register')}
								/>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
