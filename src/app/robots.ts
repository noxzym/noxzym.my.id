import { MetadataRoute } from "next";
import { baseURL } from "@/lib/constants";

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `${baseURL}/sitemap.xml`
    };
}
