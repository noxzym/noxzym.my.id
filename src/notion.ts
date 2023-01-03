import { Client } from "@notionhq/client";
import { isFullPage } from "@notionhq/client/build/src/helpers";
import { NotionToMarkdown } from "notion-to-md";
import readingTime from "reading-time";

const notionClient = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN
});

const notionToMarkdown = new NotionToMarkdown({
    notionClient
});

export const getDatabaseQuery = () => {
    return notionClient.databases.query({
        database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID
    });
};

export const getAllArticles = async () => {
    const response = await getDatabaseQuery();

    const articles = response.results.map(async article => {
        const markdownedPage = await notionToMarkdown.pageToMarkdown(
            article.id
        );
        const markdown = notionToMarkdown.toMarkdownString(markdownedPage);
        if (isFullPage(article)) {
            return {
                id: article.id,
                slug:
                    article.properties.Name.type === "title"
                        ? article.properties.Name.title[0].plain_text
                              .split(" ")
                              .join("-")
                              .toLowerCase()
                        : "",
                title:
                    article.properties.Name.type === "title"
                        ? article.properties.Name.title[0].plain_text
                        : "",
                date:
                    article.properties.Created.type === "created_time"
                        ? article.properties.Created.created_time
                        : "",
                tags:
                    article.properties.Tags.type === "multi_select"
                        ? article.properties.Tags.multi_select.map(
                              tag => tag.name
                          )
                        : [],
                description:
                    article.properties.Description.type === "rich_text"
                        ? article.properties.Description.rich_text[0].plain_text
                        : "",
                published:
                    article.properties.Published.type === "checkbox"
                        ? article.properties.Published.checkbox
                        : false,
                readingTime: readingTime(markdown).text,
                markdown
            };
        }
    });

    return Promise.all(articles);
};
