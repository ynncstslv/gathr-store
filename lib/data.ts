import CMDM from '@/public/assets/images/available/masters.jpeg';
import WOE from '@/public/assets/images/available/eldraine.jpeg';
import {
	MdDashboard,
	MdDns,
	MdFormatListBulleted,
	MdLibraryAdd,
} from 'react-icons/md';

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

export const adminItems = [
	{
		id: 1,
		name: 'Summary',
		icon: MdDashboard,
		route: '/admin',
	},
	{
		id: 2,
		name: 'Add Products',
		icon: MdLibraryAdd,
		route: '/admin/add-product',
	},
	{
		id: 3,
		name: 'Manage Products',
		icon: MdDns,
		route: '/admin/manage-products',
	},
	{
		id: 4,
		name: 'Manage Orders',
		icon: MdFormatListBulleted,
		route: '/admin/manage-orders',
	},
] as const;
