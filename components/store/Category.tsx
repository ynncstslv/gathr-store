import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback } from 'react';
import { IconType } from 'react-icons';
import queryString from 'query-string';

interface CategoryProps {
	label: string;
	icon: IconType;
	selected?: boolean;
}

const Category: FC<CategoryProps> = ({ label, icon: Icon, selected }) => {
	const params = useSearchParams();
	const router = useRouter();

	const handleClick = useCallback(() => {
		if (label === 'All') {
			router.push('/store');
		} else {
			let currentQuery = {};

			if (params) currentQuery = queryString.parse(params.toString());

			const updatedQuery: any = {
				...currentQuery,
				category: label,
			};

			const url = queryString.stringifyUrl(
				{
					url: '/store',
					query: updatedQuery,
				},
				{ skipNull: true }
			);

			router.push(url);
		}
	}, [label, params, router]);

	return (
		<div
			className={`flex items-center justify-center gap-2 transition cursor-pointer hover:opacity-80 ${
				selected ? 'text-violet-500' : 'text-violet-950'
			}`}
			onClick={handleClick}
		>
			<Icon size={20} />
			<h3 className="hidden font-light text-sm md:block">{label}</h3>
		</div>
	);
};

export default Category;
