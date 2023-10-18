import { ILanyard } from "@/types";
import useSWR from "swr";

export const useLanyard = () => {
    const { data, error } = useSWR<ILanyard>("/api/lanyard", (args: string) =>
        fetch(args).then(res => res.json())
    );

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
};
