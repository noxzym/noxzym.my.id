import { fetchNowPlaying } from "@/lib/spotify";
import { GetNowPlayingTransformed } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetchNowPlaying();

        if (!response.isPlaying) {
            return NextResponse.json<GetNowPlayingTransformed>({
                isPlaying: false
            });
        }

        return NextResponse.json<GetNowPlayingTransformed>(response);
    } catch {
        return NextResponse.json<GetNowPlayingTransformed>({
            isPlaying: false
        });
    }
}
