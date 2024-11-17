import { baseURL } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `${baseURL}/sitemap.xml`
    };
}
