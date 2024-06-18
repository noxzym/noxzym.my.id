import { IMetadata } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateDateFormat(date: Date) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}

export function parseFrontmatter(fileContent: string) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    let frontMatterBlock = match![1];
    let content = fileContent.replace(frontmatterRegex, "").trim();
    let frontMatterLines = frontMatterBlock.trim().split("\n");
    let metadata: Partial<IMetadata> = {};

    frontMatterLines.forEach(line => {
        let [key, ...valueArr] = line.split(": ");
        let value = valueArr.join(": ").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1");
        Object.assign(metadata, { [key.trim()]: value });
    });

    return { metadata, content };
}

export function isArticle(obj: any): boolean {
    const metadata = obj.metadata;
    const content = obj.content;

    const isArticleMetadata =
        typeof metadata === "object" &&
        typeof metadata.date === "object" &&
        typeof Array.isArray(metadata.tags);

    const isArticleContent = typeof content === "string";

    return isArticleMetadata && isArticleContent;
}

export function isProject(obj: any): boolean {
    const metadata = obj.metadata;
    const content = obj.content;

    const isProjectMetadata =
        typeof metadata === "object" &&
        typeof metadata.date === "object" &&
        typeof Array.isArray(metadata.tags) &&
        typeof metadata.role === "string" &&
        typeof metadata.discontinued === "string" &&
        typeof metadata.url === "string";

    const isProjectContent = typeof content === "string";

    return isProjectMetadata && isProjectContent;
}
