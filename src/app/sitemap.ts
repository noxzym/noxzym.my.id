import { getNotionPages } from "@/lib/notion";
import { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
    const pages = await getNotionPages();
    return [
        {
            url: process.env.SITE_URL!,
            lastModified: new Date()
        },
        {
            url: `${process.env.SITE_URL}/blog`,
            lastModified: new Date()
        },
        ...pages.map(page => ({
            url: `${process.env.SITE_URL}/blog/${page.slug}`,
            lastModified: new Date(page.publishedTime)
        }))
    ];
}
