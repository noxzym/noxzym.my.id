import { GetNowPlayingResponse, GetNowPlayingTransformed } from "@/types";
import { fetcher } from "./fetcher";

const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const basic = btoa(
    `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
);

const basicHeaders = {
    Authorization: `Basic ${basic}`,
    "Content-Type": "application/x-www-form-urlencoded"
};

const getAccessToken = () =>
    fetcher<{ access_token: string }>(SPOTIFY_TOKEN_ENDPOINT, {
        method: "POST",
        headers: basicHeaders,
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!
        })
    });

const nowPlayingDataSelector = (response: GetNowPlayingResponse): GetNowPlayingTransformed => {
    return {
        isPlaying: response.is_playing,
        artist: response.item.album.artists.map(({ name }) => name).join(", "),
        album: response.item.album.name,
        title: response.item.name,
        url: response.item.external_urls.spotify,
        artworkUrl: response.item.album.images[0].url
    };
};

export const fetchNowPlaying = async () => {
    const { access_token: accessToken } = await getAccessToken();
    const data = await fetcher<GetNowPlayingResponse>(SPOTIFY_NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        cache: "no-cache"
    });

    return nowPlayingDataSelector(data);
};
