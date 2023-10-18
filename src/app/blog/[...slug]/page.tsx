import { NotionRenderer } from "@/components/notion/NotionRenderer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { getNotionPages } from "@/lib/notion";
import { PageProps } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

export default async function ArticlePage({ params: { slug } }: PageProps<string[]>) {
    const page = await getPage(slug[0]);

    return (
        <main className="flex flex-col">
            <div className="flex flex-col gap-5 pb-2">
                <Avatar className="aspect-[6/2] h-auto w-full rounded-lg">
                    <AvatarImage src={page.image} alt={page.title} className="object-cover" />
                    <AvatarFallback />
                </Avatar>
                <p className="px-4 text-black/80 dark:text-white/80">{page.description}</p>
                <Separator />
            </div>
            <NotionRenderer recordMap={page.recordMap} />
        </main>
    );
}

const getPage = cache(async (slug: string) => {
    try {
        const pages = await getNotionPages();
        return pages.filter(x => x.slug === slug && x.isPublished)[0];
    } catch {
        throw notFound();
    }
});

export async function generateStaticParams() {
    const pages = await getNotionPages();
    return pages.map(({ slug }) => ({ slug: [slug] }));
}

export async function generateMetadata({
    params: { slug }
}: PageProps<string[]>): Promise<Metadata> {
    const pages = await getNotionPages();
    const page = pages.filter(x => x.slug === slug[0])[0];

    return {
        title: {
            absolute: page.title
        },
        description: page.description,
        authors: { name: "noxzym", url: "https://noxzym.my.id" },
        openGraph: {
            type: "article",
            title: {
                absolute: page.title
            },
            description: page.description,
            siteName: "Noxzym",
            url: `https://noxzym.my.id/blog/${page.slug}`,
            tags: page.tags,
            authors: "noxzym",
            images: [{ url: page.image }],
            publishedTime: page.publishedTime
        }
    };
}
