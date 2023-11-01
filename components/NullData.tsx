import Image from 'next/image';
import { FC } from 'react';

interface NullDataProps {
	title: string;
}

const NullData: FC<NullDataProps> = ({ title }) => {
	return (
		<div className="w-full h-[50vh] flex flex-col items-center justify-center text-xl text-violet-950 md:text-2xl">
			<Image
				src="/assets/images/empty-cart.png"
				alt="Empty"
				width={250}
				height={250}
			/>
			<p className="font-medium">{title}</p>
		</div>
	);
};

export default NullData;
