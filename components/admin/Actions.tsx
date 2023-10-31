import { FC } from 'react';
import { IconType } from 'react-icons';
import { Button } from '../ui/button';

interface ActionsProps {
	icon: IconType;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
}

const Actions: FC<ActionsProps> = ({ icon: Icon, onClick, disabled }) => {
	return (
		<Button size="icon" onClick={onClick} disabled={disabled}>
			<Icon size={18} />
		</Button>
	);
};

export default Actions;
