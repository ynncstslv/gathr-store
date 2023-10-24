'use client';

import { User } from '@prisma/client';
import { FC } from 'react';

import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { paths } from '@/lib/data';
import { cn } from '@/lib/utils';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { signOut, useSession } from 'next-auth/react';
import Avatar from '@/components/Avatar';
import { LogOut } from 'lucide-react';

interface SidebarProps {
	currentUser?: User;
}

const Sidebar: FC<SidebarProps> = ({ currentUser }) => {
	const pathname = usePathname();
	const router = useRouter();
	const { data: session } = useSession();

	if (session) {
		const currentUser = session.user;
	}

	return (
		<nav className="h-full flex flex-col space-y-4 py-4 text-neutral-50 border-r border-r-violet-950 bg-gradient-to-tr from-violet-950 to-violet-900">
			<div className="flex-1 px-6 py-8">
				<Logo />
				<p className="my-5 text-sm text-violet-100">
					Always ensuring that every collector and dedicated player can find
					treasures.
				</p>
				<hr className="border-violet-300" />
				<ul className="flex flex-col space-y-2 mt-12">
					{paths.map((path) => (
						<React.Fragment key={path.id}>
							<Link
								href={path.route}
								className={cn(
									'group w-full justify-start p-4 font-light tracking-wide rounded-lg transition cursor-pointer hover:opacity-90',
									pathname === path.route
										? 'text-teal-400 bg-violet-950/50'
										: 'text-neutral-50'
								)}
							>
								<li>{path.name}</li>
							</Link>
						</React.Fragment>
					))}
				</ul>
			</div>
			{session ? (
				<div className="flex flex-col gap-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3 px-6">
							<Avatar user={currentUser} />
							<div className="flex flex-col items-start text-sm">
								<h2 className="font-bold">{currentUser?.name}</h2>
								<h3 className="font-light text-gray-300">
									{currentUser?.email}
								</h3>
							</div>
							<Button
								size="icon"
								variant="ghost"
								className="ml-4"
								onClick={() => signOut()}
							>
								<LogOut size={18} className="text-violet-100" />
							</Button>
						</div>
					</div>
				</div>
			) : (
				<div className="px-6">
					<Button
						className="w-full text-violet-950 bg-teal-400 transition hover:bg-teal-400 hover:opacity-90"
						onClick={() => router.push('/login')}
					>
						Login / Register
					</Button>
				</div>
			)}
		</nav>
	);
};

export default Sidebar;
