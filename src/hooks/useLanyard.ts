import { fetcher } from "@/lib/fetcher";
import { ILanyard } from "@/types";
import useSWR from "swr";

export const useLanyard = () => {
    const { data, error } = useSWR<ILanyard>("/api/lanyard", fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
};
