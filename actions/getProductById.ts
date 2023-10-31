import prisma from '@/lib/prismadb';

interface IParams {
	productId?: string;
}

export default async function getProductById(params: IParams) {
	try {
		const { productId } = params;

		const product = await prisma.product.findUnique({
			where: {
				id: productId,
			},
			include: {
				reviews: {
					include: {
						user: true,
					},
					orderBy: {
						createdAt: 'desc',
					},
				},
			},
		});

		if (!product) return null;

		return product;
	} catch (err: any) {
		throw new Error(err);
	}
}
