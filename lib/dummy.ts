// commander masters
import MstrCmd1 from '@/public/assets/images/sealed/mstr-cmd-1.png';
import MstrCmd2 from '@/public/assets/images/sealed/mstr-cmd-2.png';
import MstrCmd3 from '@/public/assets/images/sealed/mstr-cmd-3.png';
import MstrCmd4 from '@/public/assets/images/sealed/mstr-cmd-4.png';
import MstrCmdSet from '@/public/assets/images/sealed/mstr-cmd-set.png';
import MstrCollectors from '@/public/assets/images/sealed/mstr-collectors.png';
import MstrCollectorsSingle from '@/public/assets/images/sealed/mstr-collectors-single.png';
import MstrDraft from '@/public/assets/images/sealed/mstr-draft.png';
import MstrDraftSingle from '@/public/assets/images/sealed/mstr-draft-single.png';
import MstrSet from '@/public/assets/images/sealed/mstr-set.png';
import MstrSetSingle from '@/public/assets/images/sealed/mstr-set-single.png';

// wilds of eldraine
import WoeCmd1 from '@/public/assets/images/sealed/woe-cmd-1.png';
import WoeCmd2 from '@/public/assets/images/sealed/woe-cmd-2.png';
import WoeCmdSet from '@/public/assets/images/sealed/woe-cmd-set.png';
import WoeBundle from '@/public/assets/images/sealed/woe-bundle.png';
import WoeCollectors from '@/public/assets/images/sealed/woe-collectors.png';
import WoeCollectorsSingle from '@/public/assets/images/sealed/woe-collectors-single.png';
import WoeDraft from '@/public/assets/images/sealed/woe-draft.png';
import WoeDraftSingle from '@/public/assets/images/sealed/woe-draft-single.png';
import WoeSet from '@/public/assets/images/sealed/woe-set.png';
import WoeSetSingle from '@/public/assets/images/sealed/woe-set-single.png';

// accessories
import Bastion100Blk from '@/public/assets/images/accessories/gamegenic-bastion-100-blk.jpg';
import Bastion100Cya from '@/public/assets/images/accessories/gamegenic-bastion-100-cya.jpg';
import Bastion100Grn from '@/public/assets/images/accessories/gamegenic-bastion-100-grn.jpg';
import Bastion100Pnk from '@/public/assets/images/accessories/gamegenic-bastion-100-pnk.jpg';
import Bastion100Prp from '@/public/assets/images/accessories/gamegenic-bastion-100-prp.jpg';

export const dummyProducts = [
	{
		id: '64a654593e91b8e73a351e9b',
		name: 'Draft Booster',
		set: 'Wilds of Eldraine',
		brand: '',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente aut earum nobis fuga harum iusto laboriosam eum repellat magni et facilis. Accusamus quos ratione nisi a veniam rem eius neque aut. Iure dolor similique aliquam unde praesentium sapiente!',
		price: 3.99,
		category: 'Sealed',
		inStock: true,
		stock: 50,
		images: [{ image: WoeDraftSingle }],
		reviews: [],
	},
	{
		id: '64a4ebe300900d44bb50628a',
		name: 'Draft Booster Box',
		set: 'Wilds of Eldraine',
		brand: '',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente aut earum nobis fuga harum iusto laboriosam eum repellat magni et facilis. Accusamus quos ratione nisi a veniam rem eius neque aut. Iure dolor similique aliquam unde praesentium sapiente!',
		price: 119.99,
		category: 'Sealed',
		inStock: true,
		stock: 34,
		images: [{ image: WoeDraft }],
		reviews: [],
	},
	{
		id: '648437b38c44d52b9542e340',
		name: 'Set Booster',
		set: 'Wilds of Eldraine',
		brand: '',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente aut earum nobis fuga harum iusto laboriosam eum repellat magni et facilis. Accusamus quos ratione nisi a veniam rem eius neque aut. Iure dolor similique aliquam unde praesentium sapiente!',
		price: 4.99,
		category: 'Sealed',
		inStock: true,
		stock: 63,
		images: [{ image: WoeSetSingle }],
		reviews: [
			{
				id: '6499b4887402b0efd394d8f3',
				userId: '6499b184b0e9a8c8709821d3',
				productId: '648437b38c44d52b9542e340',
				rating: 4,
				comment: 'Good enough...',
				createdDate: '2023-06-26T15:53:44.483Z',
				user: {
					id: '6499b184b0e9a8c8709821d3',
					name: 'Greta Garbo',
					email: 'example1@gmail.com',
					emailVerified: null,
					image:
						'https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c',
					hashedPassword: null,
					createdAt: '2023-06-26T15:40:52.558Z',
					updatedAt: '2023-06-26T15:40:52.558Z',
					role: 'USER',
				},
			},
			{
				id: '6499a110efe4e4de451c7edc',
				userId: '6475af156bad4917456e6e1e',
				productId: '648437b38c44d52b9542e340',
				rating: 5,
				comment: 'I really liked it!!',
				createdDate: '2023-06-26T14:30:40.998Z',
				user: {
					id: '6475af156bad4917456e6e1e',
					name: 'John Doe',
					email: 'example@gmail.com',
					emailVerified: null,
					image:
						'https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c',
					hashedPassword: null,
					createdAt: '2023-05-30T08:08:53.979Z',
					updatedAt: '2023-05-30T08:08:53.979Z',
					role: 'ADMIN',
				},
			},
		],
	},
	{
		id: '64a4e9e77e7299078334019f',
		name: 'Set Booster Box',
		set: 'Wilds of Eldraine',
		brand: '',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente aut earum nobis fuga harum iusto laboriosam eum repellat magni et facilis. Accusamus quos ratione nisi a veniam rem eius neque aut. Iure dolor similique aliquam unde praesentium sapiente!',
		price: 129.99,
		category: 'Sealed',
		inStock: true,
		stock: 26,
		images: [{ image: WoeSet }],
		reviews: [],
	},
	{
		id: '649d775128b6744f0f497040',
		name: "Collector's Booster",
		set: 'Wilds of Eldraine',
		brand: '',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente aut earum nobis fuga harum iusto laboriosam eum repellat magni et facilis. Accusamus quos ratione nisi a veniam rem eius neque aut. Iure dolor similique aliquam unde praesentium sapiente!',
		price: 19.99,
		category: 'Sealed',
		inStock: true,
		stock: 42,
		images: [{ image: WoeCollectorsSingle }],
		reviews: [],
	},
	{
		id: '6497040649d77744f0fb38c4',
		name: "Collector's Booster Box",
		set: 'Wilds of Eldraine',
		brand: '',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente aut earum nobis fuga harum iusto laboriosam eum repellat magni et facilis. Accusamus quos ratione nisi a veniam rem eius neque aut. Iure dolor similique aliquam unde praesentium sapiente!',
		price: 224.99,
		category: 'Sealed',
		inStock: true,
		stock: 3,
		images: [{ image: WoeCollectors }],
		reviews: [],
	},
	{
		id: '63ds4e9e77e727632078334019f',
		name: 'Bastion 100+ XL',
		set: '',
		brand: 'Gamegenic',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente aut earum nobis fuga harum iusto laboriosam eum repellat magni et facilis. Accusamus quos ratione nisi a veniam rem eius neque aut. Iure dolor similique aliquam unde praesentium sapiente!',
		price: 11.99,
		category: 'Accessories',
		inStock: true,
		stock: 2,
		images: [
			{
				color: 'Black',
				colorCode: '#000000',
				image: Bastion100Blk,
			},
			{
				color: 'Cyan',
				colorCode: '#38bdf8',
				image: Bastion100Cya,
			},
			{
				color: 'Green',
				colorCode: '#16a34a',
				image: Bastion100Grn,
			},
			{
				color: 'Pink',
				colorCode: '#db2777',
				image: Bastion100Pnk,
			},
			{
				color: 'Purple',
				colorCode: '#9333ea',
				image: Bastion100Prp,
			},
		],
		reviews: [
			{
				id: '6499b4887402b0efd394d8f3',
				userId: '6499b184b0e9a8c8709821d3',
				productId: '63ds4e9e77e727632078334019f',
				rating: 5,
				comment: 'Amazing!',
				createdDate: '2023-06-26T15:53:44.483Z',
				user: {
					id: '6499b184b0e9a8c8709821d3',
					name: 'Lucas Liedke',
					email: 'example1@gmail.com',
					emailVerified: null,
					image:
						'https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c',
					hashedPassword: null,
					createdAt: '2023-06-26T15:40:52.558Z',
					updatedAt: '2023-06-26T15:40:52.558Z',
					role: 'USER',
				},
			},
			{
				id: '6499a110efe4e4de451c7edc',
				userId: '6475af156bad4917456e6e1e',
				productId: '63ds4e9e77e727632078334019f',
				rating: 5,
				comment: 'An awesome robust deck box for your commander decks.',
				createdDate: '2023-06-26T14:30:40.998Z',
				user: {
					id: '6475af156bad4917456e6e1e',
					name: 'Charles Darwin',
					email: 'example@gmail.com',
					emailVerified: null,
					image:
						'https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c',
					hashedPassword: null,
					createdAt: '2023-05-30T08:08:53.979Z',
					updatedAt: '2023-05-30T08:08:53.979Z',
					role: 'ADMIN',
				},
			},
		],
	},
];
