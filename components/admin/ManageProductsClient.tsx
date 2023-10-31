'use client';

import { Product } from '@prisma/client';
import { FC, useCallback } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Status from './Status';
import {
	MdCached,
	MdClose,
	MdDelete,
	MdDone,
	MdRemoveRedEye,
} from 'react-icons/md';
import Actions from './Actions';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import firebaseApp from '@/lib/firebase';

interface ManageProductsClientProps {
	products: Product[];
}

const ManageProductsClient: FC<ManageProductsClientProps> = ({ products }) => {
	const router = useRouter();
	const storage = getStorage(firebaseApp);

	let rows: any = [];
	if (products) {
		rows = products.map((product) => {
			return {
				id: product.id,
				category: product.category,
				name: product.name,
				description: product.description,
				brand: product.brand,
				set: product.set,
				price: product.price,
				stock: product.stock,
				inStock: product.inStock,
				images: product.images,
			};
		});
	}
	const cols: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 80 },
		{ field: 'category', headerName: 'Category', width: 100 },
		{ field: 'name', headerName: 'Name', width: 200 },
		{ field: 'description', headerName: 'Description', width: 200 },
		{ field: 'brand', headerName: 'Brand', width: 100 },
		{ field: 'set', headerName: 'Set', width: 100 },
		{ field: 'price', headerName: 'Price (USD)', width: 80 },
		{ field: 'stock', headerName: 'Stock', width: 80 },
		{
			field: 'inStock',
			headerName: 'In Stock',
			width: 120,
			renderCell: (params) => {
				return (
					<div className="">
						{params.row.inStock ? (
							<Status
								text="In Stock"
								icon={MdDone}
								color="text-teal-950"
								bgColor="bg-teal-400"
							/>
						) : (
							<Status
								text="Out of Stock"
								icon={MdClose}
								color="text-rose-950"
								bgColor="bg-rose-400"
							/>
						)}
					</div>
				);
			},
		},
		{
			field: 'actions',
			headerName: 'Actions',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="w-full flex items-center justify-between gap-4">
						<Actions
							icon={MdCached}
							onClick={() => {
								handleToggleStock(params.row.id, params.row.inStock);
							}}
						/>
						<Actions
							icon={MdDelete}
							onClick={() => {
								handleDelete(params.row.id, params.row.images);
							}}
						/>
						<Actions
							icon={MdRemoveRedEye}
							onClick={() => router.push(`/product/${params.row.id}`)}
						/>
					</div>
				);
			},
		},
	];

	const handleToggleStock = useCallback(
		(id: string, inStock: boolean) => {
			axios
				.put('/api/product', { id, inStock: !inStock })
				.then((res) => {
					toast.success('Status changed!');
					router.refresh();
				})
				.catch((err) => {
					toast.error('Something went wrong!');
				});
		},
		[router]
	);

	const handleDelete = useCallback(
		async (id: string, images: any[]) => {
			toast('Deleting product, please wait!');

			const handleImageDelete = async () => {
				try {
					for (const item of images) {
						if (item.image) {
							const imageRef = ref(storage, item.image);

							await deleteObject(imageRef);

							console.log('image deleted', item.image);
						}
					}
				} catch (error) {
					return console.log('Error deleting image!', error);
				}
			};

			await handleImageDelete();

			axios
				.delete(`/api/product/${id}`)
				.then((res) => {
					toast.success('Product deleted!');
					router.refresh();
				})
				.catch((err) => {
					toast.error('Something went wrong!');
				});
		},
		[storage, router]
	);

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={cols}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</div>
	);
};

export default ManageProductsClient;
