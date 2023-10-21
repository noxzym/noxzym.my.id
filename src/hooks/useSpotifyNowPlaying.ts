import { fetcher } from "@/lib/fetcher";
import { GetNowPlayingTransformed } from "@/types";
import useSWR from "swr";

export const useSpotifyNowplaying = () => {
    const { data, error } = useSWR<GetNowPlayingTransformed>(
        "/api/now-playing",
        (args: string) =>
            fetcher<GetNowPlayingTransformed>(args, {
                cache: "no-cache"
            }),
        {
            refreshInterval: 10000
        }
    );

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
};
