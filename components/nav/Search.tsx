import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { SearchIcon } from 'lucide-react';

const Search = () => {
	return (
		<div className="w-[40%] hidden items-center sm:flex">
			<Input
				type="text"
				placeholder="Search for a product..."
				className="mr-2 text-sm text-violet-950 border-none outline-none bg-violet-100 placeholder:text-neutral-400"
			/>
			<Button className="bg-violet-500 transition hover:bg-violet-500 hover:opacity-90">
				<SearchIcon className="w-5 h-5 text-neutral-50" />
			</Button>
		</div>
	);
};

export default Search;
