import { IArticle } from "@/types";
import { Client, isFullPage } from "@notionhq/client";
import { format } from "date-fns";
import { NotionCompatAPI } from "notion-compat";

const notionClient = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN
});
const notionCompat = new NotionCompatAPI(notionClient);

const getDatabase = () => notionClient.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID
});

export const getArticles = async () => Promise.all((await getDatabase()).results.map(async page => {
    if (isFullPage(page)) {
        const metadata = {} as IArticle;
        switch (page.cover.type) {
            case "external":
                metadata.cover = page.cover.external.url;
                break;

            case "file":
                metadata.cover = page.cover.file.url;
                break;
        }
        const propertiesValues = Object.values(page.properties);
        for (const propertiesValue of propertiesValues) {
            switch (propertiesValue.type) {
                case "title":
                    if (propertiesValue.title.length) {
                        metadata.title =
                            propertiesValue.title[0].plain_text;
                    }
                    break;

                case "rich_text":
                    if (propertiesValue.rich_text.length) {
                        metadata.description =
                            propertiesValue.rich_text[0].plain_text;
                    }
                    break;

                case "multi_select":
                    metadata.tags = propertiesValue.multi_select.map(
                        tag => tag.name
                    );
                    break;

                case "checkbox":
                    metadata.published = propertiesValue.checkbox;
                    break;

                case "created_time":
                    metadata.date = format(new Date(propertiesValue.created_time), "MMM dd, yyyy");
                    break;
            }
        }

        return {
            id: page.id,
            slug: metadata.title.split(" ").join("-").toLowerCase(),
            recordMap: await notionCompat.getPage(page.id),
            ...metadata
        }
    }
}))