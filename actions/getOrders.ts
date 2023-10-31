import prisma from '@/lib/prismadb';

export default async function getOrders() {
	try {
		const orders = await prisma.order.findMany({
			include: {
				user: true,
			},
			orderBy: {
				createDate: 'desc',
			},
		});

		return orders;
	} catch (err: any) {
		throw new Error(err);
	}
}
