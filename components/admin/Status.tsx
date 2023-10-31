import { FC } from 'react';
import { IconType } from 'react-icons';

interface StatusProps {
	text: string;
	icon: IconType;
	color: string;
	bgColor: string;
}

const Status: FC<StatusProps> = ({ text, icon: Icon, color, bgColor }) => {
	return (
		<div
			className={`flex items-center gap-1 px-2 py-1 text-xs ${color} rounded-md ${bgColor}`}
		>
			<Icon size={15} /> {text}
		</div>
	);
};

export default Status;
