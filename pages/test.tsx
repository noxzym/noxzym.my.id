import { LazyLoading } from "@/components/LazyLoading";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicEditor = dynamic(() => import("@/components/editor"), {
    ssr: false
}) as () => JSX.Element;

export default function MyTest() {
    const [editor, setEditor] = useState([
        false,
        <LazyLoading
            key={0}
            className="mx-auto h-10 w-10 stroke-[#222831] stroke-[4] dark:stroke-[#DDDDDD]"
        />
    ]);
    useEffect(() => {
        if (!editor[0]) {
            setEditor([true, <DynamicEditor key={1} />]);
        }
    }, [editor]);
    return (
        <>
            <section className="w-full py-20 px-[5%] lg:px-[15%]">
                {editor[1]}
            </section>
        </>
    );
}
