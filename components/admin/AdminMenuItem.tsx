import { FC } from 'react';
import { IconType } from 'react-icons';

interface AdminMenuItemProps {
	label: string;
	icon: IconType;
	selected?: boolean;
}

const AdminMenuItem: FC<AdminMenuItemProps> = ({
	label,
	icon: Icon,
	selected,
}) => {
	return (
		<div
			className={`flex items-center justify-center gap-2 transition cursor-pointer hover:opacity-80 ${
				selected ? 'text-violet-500' : 'text-violet-950'
			}`}
		>
			<Icon size={20} />
			<h3 className="hidden font-light text-sm md:block">{label}</h3>
		</div>
	);
};

export default AdminMenuItem;
