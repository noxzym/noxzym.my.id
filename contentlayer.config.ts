import { Client } from "@notionhq/client";
import { defineDatabase, makeSource } from "contentlayer-source-notion";

const client = new Client({ auth: "secret_9V7EA3GEdW37VJemtujg2vTBfp5bBgliBtYTTgJ6PgV" });

export const Post = defineDatabase(() => ({
    name: "Blog",
    databaseId: "d7dcf04dc0624a8abdd279a6b23ef36d",
    query: {
        filter: {
            property: "Published",
            checkbox: {
                equals: true
            }
        }
    },
    computedFields: {
        url: {
            type: "string",
            resolve: post => `/posts/${post._id}`
        }
    }
}));

export default makeSource({
    client,
    databaseTypes: [Post]
});
