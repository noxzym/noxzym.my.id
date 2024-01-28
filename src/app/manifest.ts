import { WebIcons } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        id: "/",
        name: "Noxzym",
        short_name: "Noxzym",
        theme_color: "#E8E9E9",
        background_color: "#E8E9E9",
        description: "Noxzym's Personal Website",
        display: "standalone",
        orientation: "portrait",
        display_override: ["window-controls-overlay"],
        scope: "/",
        start_url: "/",
        icons: WebIcons.filter(icon => Number(icon.width!) == 192).map(icon => ({
            src: icon.url.toString(),
            sizes: icon.sizes,
            type: icon.type
        }))
    };
}
