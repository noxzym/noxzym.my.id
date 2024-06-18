export interface IMetadata {
    title: string;
    description: string;
    date: string;
    tags: string;
    image?: string;
}

export interface IArticle {
    metadata: IMetadata & {
        date: Date;
        tags: string[];
    };
    content: string;
}

export interface IProject extends IArticle {
    metadata: IMetadata & {
        date: Date;
        tags: string[];
        role: string;
        discontinued: string;
        url: string;
    };
}
