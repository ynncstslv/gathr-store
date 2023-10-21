import Image from 'next/image';
import { FC } from 'react';

interface AvatarProps {
	src?: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
	return (
		<>
			{src ? (
				<Image
					src={src}
					alt="Avatar"
					width={30}
					height={30}
					className="rounded-full"
				/>
			) : (
				<Image
					src="/assets/images/placeholder.jpg"
					alt="Placeholder"
					width={30}
					height={30}
					className="rounded-full"
				/>
			)}
		</>
	);
};

export default Avatar;
