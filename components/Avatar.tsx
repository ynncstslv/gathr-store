import { User } from '@prisma/client';
import Image from 'next/image';
import { FC } from 'react';

interface AvatarProps {
	user?: User;
}

const Avatar: FC<AvatarProps> = ({ user }) => {
	return (
		<Image
			src={user?.image || '/assets/images/placeholder.jpg'}
			alt="Avatar"
			width={30}
			height={30}
			className="rounded-full"
		/>
	);
};

export default Avatar;
