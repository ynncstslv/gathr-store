'use client';

import { adminItems } from '@/lib/data';
import AdminMenuItem from './AdminMenuItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminMenu = () => {
	const pathname = usePathname();
	return (
		<nav className="flex items-center justify-between px-12 py-3 border rounded-md border-violet-100 bg-neutral-100 shadow-md">
			{adminItems.map((item) => (
				<div key={item.id}>
					<Link href={item.route}>
						<AdminMenuItem
							label={item.name}
							icon={item.icon}
							selected={pathname === item.route}
						/>
					</Link>
				</div>
			))}
		</nav>
	);
};

export default AdminMenu;
