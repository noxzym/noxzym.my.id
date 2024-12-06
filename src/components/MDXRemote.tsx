import { IArticle, IProject } from "@/types";
import { MDXRemote as MDXRemotePrimitive, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";

interface props {
    mdx: IArticle | IProject;
}

export default function MDXRemote({ mdx }: props) {
    const props: MDXRemoteProps = {
        source: mdx.content,
        components: {
            a: props => <Link href={props.href!} target="_blank" {...props} />,
            Cover: _ => (
                <Image
                    src={mdx.metadata.image!}
                    alt={mdx.metadata.title}
                    sizes="100vw"
                    width={400}
                    height={225}
                    priority
                    className="my-0 aspect-video h-auto w-full rounded-xl border-1"
                />
            )
        },
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm]
            }
        }
    };

    return (
        <div className="prose prose-zinc dark:prose-invert max-w-none">
            <MDXRemotePrimitive {...props} />
        </div>
    );
}
