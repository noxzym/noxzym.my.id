import { IArticle } from "@/types";
import { Client } from "@notionhq/client";
import { isFullBlock, isFullPage } from "@notionhq/client/build/src/helpers";
import { NotionToMarkdown } from "notion-to-md";
import readingTime from "reading-time";

const notionClient = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN
});

const notionToMarkdown = new NotionToMarkdown({
    notionClient
})
    .setCustomTransformer("paragraph", block => {
        if (isFullBlock(block) && block.type === "paragraph") {
            if (
                block.paragraph.rich_text.filter(x =>
                    x.plain_text.includes("\n")
                ).length
            ) {
                const texts = block.paragraph.rich_text.map(x =>
                    x.plain_text.split("\n")
                );
                return `<p>${texts[0].map(x => `${x}<br />`).join("")}</p>`;
            }
            return block.paragraph.rich_text.map(x => x.plain_text).join("");
        }
    })

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
            const metadata = {} as IArticle;

            const propertiesValues = Object.values(article.properties);
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
                        metadata.date = propertiesValue.created_time;
                        break;
                }
            }

            if (metadata.title && metadata.description && metadata.date) {
                return {
                    id: article.id,
                    slug: metadata.title.split(" ").join("-").toLowerCase(),
                    readingTime: readingTime(markdown).text,
                    markdown,
                    ...metadata
                };
            }
        }
    });
    return Promise.all(articles);
};

export const getPublishedArticles = async () => {
    const articles = await getAllArticles();
    const publishedArticles = articles.filter(Boolean).filter(x => x.published);
    return publishedArticles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
};
