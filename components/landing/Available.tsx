import { availableRightNow } from '@/lib/data';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Available = () => {
	return (
		<section className="w-full my-10 mx-auto md:my-16">
			<div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2">
				{availableRightNow.map((set) => (
					<React.Fragment key={set.id}>
						<Link href={set.route} className="px-4 py-0 md:py-4">
							<Image
								src={set.image}
								alt={set.name}
								width={700}
								height={700}
								className="w-full mx-auto rounded-xl"
							/>
						</Link>
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Available;
