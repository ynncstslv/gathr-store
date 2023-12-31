'use client';

import { FC, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import { User } from '@prisma/client';

interface MobileSidebarProps {
	currentUser?: User;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ currentUser }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<Sheet>
			<SheetTrigger>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="w-6 h-6 text-violet-100" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="p-0 bg-violet-950">
				<Sidebar currentUser={currentUser} />
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
