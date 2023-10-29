import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';

export const config = {
	api: {
		bodyParser: false,
	},
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: '2023-10-16',
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const buf = await buffer(req);
	const sig = req.headers['stripe-signature'] as string;

	if (!sig) {
		return res.status(400).send('Missing stripe signature');
	}

	let e: Stripe.Event;

	try {
		e = stripe.webhooks.constructEvent(
			buf,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET as string
		);
	} catch (err: any) {
		return res.status(400).send('Webhook Error' + err);
	}

	switch (e.type) {
		case 'charge.succeeded':
			const charge: any = e.data.object as Stripe.Charge;

			if (typeof charge.payment_intent === 'string') {
				await prisma?.order.update({
					where: { paymentIntentId: charge.payment_intent },
					data: { status: 'paid', address: charge.shipping?.address },
				});
			}

			break;
		default:
			console.log('Unhandled event type ' + e.type);
	}

	res.json({ received: true });
}
