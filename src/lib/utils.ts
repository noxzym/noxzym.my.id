import { IArticle, IMetadata, IProject } from "@/types";
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
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);
    const frontMatterBlock = match![1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatterBlock.trim().split("\n");
    const metadata: Partial<IMetadata> = {};

    for (const line of frontMatterLines) {
        const [key, ...valueArr] = line.split(": ");
        let value = valueArr.join(": ").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1");
        Object.assign(metadata, { [key.trim()]: value });
    }

    return { metadata, content };
}

export function isProject(obj: IArticle | IProject): boolean {
    const metadata = obj.metadata as IProject["metadata"];
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
