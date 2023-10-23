import { FC } from 'react';
import { Button } from '../ui/button';
import { IconType } from 'react-icons';

interface SocialButtonProps {
	icon: IconType;
	label: string;
	onClick: () => void;
}

const SocialButton: FC<SocialButtonProps> = ({
	icon: Icon,
	label,
	onClick,
}) => {
	return (
		<Button
			className="w-full font-light text-sm text-neutral-400 border rounded-md border-neutral-300 bg-transparent transition hover:bg-transparent hover:opacity-90"
			onClick={onClick}
		>
			<Icon className="mr-2" /> {label}
		</Button>
	);
};

export default SocialButton;
