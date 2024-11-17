import { DefaultMetadata } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        id: "/",
        name: "Noxzym",
        short_name: "Noxzym",
        theme_color: "#09090b",
        background_color: "#09090b",
        description: DefaultMetadata.description,
        display: "standalone",
        orientation: "portrait",
        display_override: ["window-controls-overlay"],
        scope: "/",
        start_url: "/",
        icons: DefaultMetadata.icons
            .filter(icon => Number(icon.width!) >= 192)
            .map(icon => ({
                src: icon.url.toString(),
                sizes: icon.sizes,
                type: icon.type
            }))
    };
}
