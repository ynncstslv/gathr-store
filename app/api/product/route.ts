import { NextResponse } from 'next/server';

import getCurrentUser from '@/actions/getCurrentUser';

import prisma from '@/lib/prismadb';

export async function POST(request: Request) {
	const currentUser = await getCurrentUser();
	if (!currentUser || currentUser.role !== 'ADMIN') return NextResponse.error();

	const body = await request.json();
	const {
		name,
		description,
		images,
		category,
		brand,
		set,
		price,
		stock,
		inStock,
	} = body;

	const product = await prisma.product.create({
		data: {
			name,
			description,
			images,
			category,
			brand,
			set,
			price: parseFloat(price),
			stock: parseInt(stock),
			inStock,
		},
	});

	return NextResponse.json(product);
}

export async function PUT(request: Request) {
	const currentUser = await getCurrentUser();
	if (!currentUser || currentUser.role !== 'ADMIN') return NextResponse.error();

	const body = await request.json();
	const { id, inStock } = body;

	const product = await prisma.product.update({
		where: { id: id },
		data: { inStock },
	});

	return NextResponse.json(product);
}
