import { fetcher } from "@/lib/fetcher";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
    const lanyard = await fetcher(
        `https://api.lanyard.rest/v1/users/${process.env.NEXT_PUBLIC_DISCORD_USER_ID}`
    ).catch(() => null);

    if (!lanyard) {
        return Response.error();
    }

    return Response.json(lanyard);
}
