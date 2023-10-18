"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { ExtendedRecordMap } from "notion-types";
import { FC } from "react";
import { NotionRenderer as Renderer } from "react-notion-x";

export interface NotionRendererProps {
    recordMap: ExtendedRecordMap;
}

export const NotionRenderer: FC<NotionRendererProps> = ({ recordMap }) => {
    const [isDarkMode] = useDarkMode();

    return (
        <Renderer
            darkMode={isDarkMode}
            recordMap={recordMap}
            showCollectionViewDropdown={false}
            showTableOfContents={false}
            linkTableTitleProperties={false}
            hideBlockId
            previewImages
            components={{
                Collection: () => null
            }}
            className="m-0 p-0 font-sans"
        />
    );
};
