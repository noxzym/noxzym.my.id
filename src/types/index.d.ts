import type { DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        user?: DefaultUser & {
            id: string;
        };
    }
}

export interface IArticleComponent {
    meta: {
        slug: string;
        author: string;
        title: string;
        description: string;
        date: number;
        thumbnail: string;
        authorImage: string;
        readingTime: string;
    };
    content: string;
}
