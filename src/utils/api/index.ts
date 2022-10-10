import matter from "gray-matter";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import readingTime from "reading-time";
import { IArticleComponent } from "@/types";

const ArticlePath = join(process.cwd(), "articles");

function readdirRecursive(directory: string): string[] {
    const results: string[] = [];
    function read(path: string): void {
        const files = readdirSync(path);
        for (const file of files) {
            const dir = join(path, file);
            if (statSync(dir).isDirectory()) {
                read(dir);
            } else {
                results.push(dir);
            }
        }
    }
    read(directory);
    return results;
}

export const getSlugs = function (): string[] {
    const paths = readdirRecursive(ArticlePath);
    return paths
        .filter(path => path.endsWith(".mdx"))
        .map(path => {
            const parts = path.split(/\/|\\/g);
            const fileName = parts[parts.length - 1];
            const [slug, _ext] = fileName.split(".");
            return slug;
        });
};

export const getAllArticles = function (): IArticleComponent[] {
    const slugs = getSlugs();
    return slugs
        .map(slug => getArticleFromSlug(slug))
        .sort((a, b) => {
            if (a.meta.date > b.meta.date) return 1;
            if (a.meta.date < b.meta.date) return -1;
            return 0;
        })
        .reverse();
};

export const getArticleFromSlug = function (slug: string): IArticleComponent {
    const path = join(ArticlePath, `${slug}.mdx`);
    const source = readFileSync(path, "utf8");
    const { data, content } = matter(source);
    return {
        meta: {
            slug,
            author: data.author,
            title: data.title,
            description: data.description,
            date: new Date(data.date).getTime(),
            thumbnail: data.thumbnail,
            authorImage: data.authorImage,
            readingTime: readingTime(content).text
        },
        content
    };
};
