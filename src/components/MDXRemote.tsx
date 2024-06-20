import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/types";
import { MDXRemote as MDXRemotePrimitive, MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

interface props {
    project: IProject;
}

export default function MDXRemote({ project }: props) {
    const props: MDXRemoteProps = {
        source: project.content,
        components: {
            a: props => <Link href={props.href!} target="_blank" {...props} />,
            Cover: _ => (
                <Image
                    src={project.metadata.image!}
                    alt={project.metadata.title}
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
        <div className="prose prose-zinc max-w-none dark:prose-invert">
            <MDXRemotePrimitive {...props} />
        </div>
    );
}
