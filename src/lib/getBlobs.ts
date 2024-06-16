import { ListBlobResultBlob, list } from "@vercel/blob";
import { parseFrontmatter } from "./utils";

export async function getBlobs<T>(
    prefix?: "articles" | "images" | "projects",
    query?: string
): Promise<T> {
    const { blobs } = await list({ prefix });

    if (["articles", "projects"].includes(prefix ?? "")) {
        const raws = await Promise.all(
            blobs
                .filter(blob => (query?.length ? blob.pathname.includes(query) : true) && blob.size)
                .map(async blob => {
                    const raw = await fetch(blob.url);
                    const text = await raw.text();

                    const data = parseFrontmatter(text);

                    const imageParsed = await list({ prefix: data.metadata.image });
                    const image = imageParsed.blobs[0] as unknown as ListBlobResultBlob | undefined;

                    return {
                        metadata: {
                            ...data.metadata,
                            date: new Date(data.metadata.date!),
                            tags: data.metadata.tags!.split(", "),
                            image: image?.url ?? undefined
                        },
                        content: data.content
                    };
                })
        );
        return raws as T;
    }

    const data = blobs.filter(
        blob => (query?.length ? blob.pathname.includes(query) : true) && blob.size
    );
    return data as unknown as T;
}
