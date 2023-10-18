import { IArticle } from "@/types";
import { NotionAPI as NotionAPIClient } from "notion-client";
import { CollectionInstance } from "notion-types";
import { formatDate, estimatePageReadTimeAsHumanizedString } from "notion-utils";

const NotionAPI = new NotionAPIClient({
    activeUser: process.env.NEXT_PUBLIC_NOTION_ACTIVE_USER,
    authToken: process.env.NEXT_PUBLIC_NOTION_TOKENV2
});

export async function getNotionPages() {
    const database = await NotionAPI.getPageRaw(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID!);
    const collectionId = Object.keys(database.recordMap.collection!)[0];
    const collectionViewId = Object.keys(database.recordMap.collection_view!)[0];

    const collectionData = (await NotionAPI.getCollectionData(
        collectionId,
        collectionViewId,
        undefined
    )) as unknown as CollectionInstance & { allBlockIds: string[] };

    const blocks = await NotionAPI.getBlocks(collectionData.allBlockIds);
    const pages = [] as IArticle[];

    for await (const { value } of Object.values(blocks.recordMap.block)) {
        const properties = {} as IArticle;
        properties.image = value.format?.page_cover ?? null;
        properties.recordMap = await NotionAPI.getPage(value.id);
        properties.readTime = estimatePageReadTimeAsHumanizedString(
            value,
            properties.recordMap,
            {}
        );

        Object.keys(value.properties).forEach(key => {
            switch (key) {
                case "=MW{":
                    properties.slug = value.properties[key][0][0];
                    break;
                case "title":
                    properties.title = value.properties[key][0][0];
                    break;
                case "hhea":
                    properties.description = value.properties[key][0][0];
                    break;
                case "^`\\B":
                    properties.tags = value.properties[key][0][0].split(",");
                    break;
                case "PAP=":
                    properties.isPublished = !!value.properties[key][0][0];
                    break;
                case "}lib":
                    properties.publishedTime = formatDate(
                        value.properties[key][0][1][0][1].start_date
                    );
                    break;
            }
        });

        pages.push(properties);
    }

    return pages;
}
