import { IArticle } from "@/types";
import { format } from "date-fns";
import { NotionAPI } from "notion-client";

const notionClient = new NotionAPI({
    activeUser: process.env.NEXT_PUBLIC_NOTION_ACTIVE_USER,
    authToken: process.env.NEXT_PUBLIC_NOTION_TOKEN
});

export const getArticles = async () => {
    const databasePage = await notionClient.getPage(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID);
    const articleIds = Object.values(databasePage.collection_query)
        .map(collection => Object.values(collection)[0].collection_group_results.blockIds.map(blockId => [blockId]))[0];

    return Promise.all(articleIds.map(async articleId => {
        const articlePage = await notionClient.getBlocks(articleId);
        const articleMetadata = {} as IArticle;
        for (const [, { value }] of Object.entries(articlePage.recordMap.block)) {
            if (value.type === "page") {
                articleMetadata.id = value.id;
                articleMetadata.slug = value.properties.title[0][0].toLowerCase().split(" ").join("-");
                articleMetadata.title = value.properties.title[0][0];
                articleMetadata.description = value.properties["eW[E"] ? value.properties["eW[E"][0][0] : "";
                articleMetadata.tags = value.properties["^`\\B"] ? value.properties["^`\\B"][0][0].split(",") : [];
                articleMetadata.published = !!value.properties["PAP="];
                articleMetadata.cover = value.format?.page_cover;
                articleMetadata.date = format(new Date(value.created_time), "MMM dd, yyyy");
            }
        }
        const recordMap = await notionClient.getPage(articleMetadata.id);
        return { recordMap, ...articleMetadata };
    }));
}
