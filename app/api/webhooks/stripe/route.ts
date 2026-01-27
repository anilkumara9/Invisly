import Stripe from 'stripe';
import stripe from '@/lib/stripe';

export async function POST(req: Request) {
    const body = await req.text();
    const signature = req.headers.get('Stripe-Signature') as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error(`Error constructing event:`, error);
        }
        return new Response(`Error constructing event: ${error}`, { status: 400 });
    }

    try {
        switch (event.type) {
            case "checkout.session.completed":
                await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
                break;
            default:
                if (process.env.NODE_ENV === 'development') {
                    console.log(`Unhandled event type: ${event.type}`);
                }
                break;
        }
        return new Response('Webhook received', { status: 200 });
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error(`Error processing webhook:`, error);
        }
        return new Response('Webhook processing error', { status: 500 });
    }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
    if (process.env.NODE_ENV === 'development') {
        console.log(`Checkout session completed: ${session.id}`);
    }
    // TODO: Add user upgrade logic here
}
