import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import getCurrentUser from '@/actions/getCurrentUser';

export async function POST(request: Request) {
	const currentUser = await getCurrentUser();

	if (!currentUser || currentUser.role !== 'ADMIN') {
		return NextResponse.error();
	}

	const body = await request.json();
	const { name, description, image, category, brand, price, stock, inStock } =
		body;

	const product = await prisma.product.create({
		data: {
			name,
			description,
			image,
			category,
			brand,
			price: parseFloat(price),
			stock,
			inStock,
		},
	});

	return NextResponse.json(product);
}
