import { fetcher } from "@/lib/fetcher";
import { getAccessToken, nowPlayingDataSelector } from "@/lib/spotify";
import { GetNowPlayingResponse } from "@/types";

const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
export async function GET() {
    const { access_token: accessToken } = await getAccessToken();
    const response = await fetcher<GetNowPlayingResponse>(SPOTIFY_NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        cache: "no-cache"
    }).catch(() => null);

    const data = response ? nowPlayingDataSelector(response) : null;

    if (!data || !data.isPlaying) {
        return Response.json({
            isPlaying: false
        });
    }

    return Response.json(data);
}
