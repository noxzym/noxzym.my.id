import { ILanyard } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    const lanyard = await fetch(
        `https://api.lanyard.rest/v1/users/${process.env.NEXT_PUBLIC_DISCORD_USER_ID}`
    ).catch(() => null);

    if (!lanyard) {
        return NextResponse.error();
    }

    return NextResponse.json<ILanyard>(await lanyard.json());
}
