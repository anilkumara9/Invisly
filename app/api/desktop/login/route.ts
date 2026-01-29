import { NextResponse } from 'next/server';
import { fetchMutation } from 'convex/nextjs';
import { api } from '@/convex/_generated/api';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const code = body.code;

        if (!code) {
            return NextResponse.json({ error: "Missing code" }, { status: 400 });
        }

        // Call Convex to exchange code
        // The fetchMutation helper handles creating a ConvexHttpClient internally
        // assuming CONVEX_URL is set in environment variables
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await fetchMutation((api as any).desktopAuth.exchangeCodeForToken, { code });

        // result contains { token, userId }
        return NextResponse.json(result);
    } catch (error) {
        console.error("Desktop login error:", error);
        return NextResponse.json({ error: "Invalid or expired code" }, { status: 401 });
    }
}
