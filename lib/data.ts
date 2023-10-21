import CMDM from '@/public/assets/images/available/masters.jpeg';
import WOE from '@/public/assets/images/available/eldraine.jpeg';

export const paths = [
	{
		id: 1,
		name: 'Home',
		route: '/',
	},
	{
		id: 2,
		name: 'Singles',
		route: '/singles',
	},
	{
		id: 3,
		name: 'Sealed',
		route: '/sealed',
	},
	{
		id: 4,
		name: 'Accessories',
		route: '/accessories',
	},
	{
		id: 5,
		name: 'All Products',
		route: '/all',
	},
] as const;

export const availableRightNow = [
	{
		id: 1,
		name: 'Wilds of Eldraine',
		image: WOE,
		route: '/sealed',
	},
	{
		id: 2,
		name: 'Commander Masters',
		image: CMDM,
		route: '/sealed',
	},
];
