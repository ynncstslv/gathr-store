import React from 'react';
import Link from 'next/link';

import { paths } from '@/lib/data';

const NavLinks = () => {
	return (
		<nav className="flex items-center justify-center gap-5 px-1 py-3 bg-neutral-100 border-b-neutral-200 shadow-lg sm:gap-8 sm:px-0">
			{paths.map((path) => (
				<React.Fragment key={path.id}>
					<Link
						href={path.route}
						className="text-xs text-violet-950 transition hover:underline hover:opacity-90 sm:text-sm"
					>
						{path.name}
					</Link>
				</React.Fragment>
			))}
		</nav>
	);
};

export default NavLinks;
