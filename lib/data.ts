import CMDM from '@/public/assets/images/available/masters.jpeg';
import WOE from '@/public/assets/images/available/eldraine.jpeg';

import {
	MdDashboard,
	MdDns,
	MdFormatListBulleted,
	MdLibraryAdd,
} from 'react-icons/md';

// nav paths
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

// available products' cards at the bottom of landing page
export const availableRightNow = [
	{
		id: 1,
		name: 'Wilds of Eldraine',
		image: WOE,
		route: '/store',
	},
	{
		id: 2,
		name: 'Commander Masters',
		image: CMDM,
		route: '/store',
	},
];

// categories for products in the store
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

// admin items for the admin dashboard
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

// colors for the color selection in the add product form
export const colors = [
	{
		color: 'Black',
		colorCode: '#000',
		image: null,
	},
	{
		color: 'White',
		colorCode: '#fff',
		image: null,
	},
	{
		color: 'Red',
		colorCode: '#dc2626',
		image: null,
	},
	{
		color: 'Green',
		colorCode: '#84cc16',
		image: null,
	},
	{
		color: 'Blue',
		colorCode: '#2563eb',
		image: null,
	},
	{
		color: 'Cyan',
		colorCode: '#22d3ee',
		image: null,
	},
	{
		color: 'Pink',
		colorCode: '#ec4899',
		image: null,
	},
	{
		color: 'Yellow',
		colorCode: '#facc15',
		image: null,
	},
	{
		color: 'Purple',
		colorCode: '#7c3aed',
		image: null,
	},
	{
		color: 'Orange',
		colorCode: '#f97316',
		image: null,
	},
	{
		color: 'Gold',
		colorCode: '#854d0e',
		image: null,
	},
	{
		color: 'Silver',
		colorCode: '#a8a29e',
		image: null,
	},
] as const;
