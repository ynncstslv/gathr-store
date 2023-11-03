'use client';

import { categories } from '@/lib/data';
import Category from './Category';
import { useSearchParams, usePathname } from 'next/navigation';

const CategoriesMenu = () => {
	const params = useSearchParams();
	const pathname = usePathname();

	const category = params?.get('category');

	const isStorePage = pathname === '/store';
	if (!isStorePage) return null;

	return (
		<nav className="flex items-center justify-between px-12 py-3 border rounded-md border-violet-100 bg-neutral-100 shadow-md">
			{categories.map((item) => (
				<div key={item.id}>
					<Category
						label={item.name}
						icon={item.icon}
						selected={
							category === item.name ||
							(category === null && item.name === 'All')
						}
					/>
				</div>
			))}
		</nav>
	);
};

export default CategoriesMenu;
