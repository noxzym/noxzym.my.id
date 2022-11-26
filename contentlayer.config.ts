import {
    ComputedFields,
    defineDocumentType,
    makeSource
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const computedFields: ComputedFields = {
    readingTime: { type: "json", resolve: doc => readingTime(doc.body.raw) },
    slug: {
        type: "string",
        resolve: doc => doc._raw.flattenedPath.replace(/^.+?(\/)/, "")
    }
};

export const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "**/*.mdx",
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        tags: { type: "list", of: { type: "string" } },
        draft: { type: "boolean" },
        summary: { type: "string" },
        images: { type: "list", of: { type: "string" } },
        author: { type: "string", required: true }
    },
    computedFields
}));

export default makeSource({
    contentDirPath: "articles",
    documentTypes: [Blog],
    mdx: {
        cwd: process.cwd(),
        rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            [rehypePrismPlus, { ignoreMissing: true }]
        ]
    }
});
