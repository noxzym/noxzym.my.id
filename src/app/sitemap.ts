import { MetadataRoute } from "next";
import { baseURL } from "@/lib/constants";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
    const path = ["/", "/about", "/blog", "/projects"];

    return path.map(url => ({
        url: `${baseURL}${url}`,
        lastModified: new Date(),
        priority: url === "/" ? 1 : 0.8
    }));
}
