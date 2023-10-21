'use client';

import { PuffLoader } from 'react-spinners';

const Loader = () => {
	return (
		<div className="h-[50vh] flex flex-col items-center justify-center">
			<PuffLoader color="#a78bfa" size={70} />
		</div>
	);
};

export default Loader;
