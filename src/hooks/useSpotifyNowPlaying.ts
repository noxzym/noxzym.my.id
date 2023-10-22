import { fetcher } from "@/lib/fetcher";
import { GetNowPlayingTransformed } from "@/types";
import useSWR from "swr";

export const useSpotifyNowplaying = () => {
    const { data, error } = useSWR<GetNowPlayingTransformed>("/api/now-playing", fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
};
