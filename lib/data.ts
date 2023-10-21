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
		name: 'About',
		route: '/about',
	},
	{
		id: 3,
		name: 'Online Store',
		route: '/store',
	},
	{
		id: 4,
		name: 'Contact Us',
		route: '/contact',
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

export const categories = [
	{
		id: 1,
		name: 'Singles',
	},
	{
		id: 2,
		name: 'Sealed',
	},
	{
		id: 3,
		name: 'Complete Sets',
	},
	{
		id: 4,
		name: 'Accessories',
	},
];
