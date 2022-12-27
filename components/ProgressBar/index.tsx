import dynamic from "next/dynamic";
import { ProgressBar as PB } from "./ProgressBar";

export const ProgressBar = dynamic(() => Promise.resolve(PB), {
    ssr: false
});
