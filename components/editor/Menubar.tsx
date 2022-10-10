import { Editor } from "@tiptap/react";
import { Fragment } from "react";
import MenubarItem from "./MenubarItem";

export default function Menubar({ editor }: { editor: Editor }) {
    const items = [
        {
            icon: "bold",
            title: "Bold",
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive("bold")
        },
        {
            icon: "italic",
            title: "Italic",
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive("italic")
        },
        {
            icon: "strikethrough",
            title: "Strike",
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive("strike")
        },
        {
            icon: "code-view",
            title: "Code",
            action: () => editor.chain().focus().toggleCode().run(),
            isActive: () => editor.isActive("code")
        },
        {
            icon: "mark-pen-line",
            title: "Highlight",
            action: () => editor.chain().focus().toggleHighlight().run(),
            isActive: () => editor.isActive("highlight")
        },
        {
            icon: "h-1",
            title: "Heading 1",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: () => editor.isActive("heading", { level: 1 })
        },
        {
            icon: "h-2",
            title: "Heading 2",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: () => editor.isActive("heading", { level: 2 })
        },
        {
            icon: "paragraph",
            title: "Paragraph",
            action: () => editor.chain().focus().setParagraph().run(),
            isActive: () => editor.isActive("paragraph")
        },
        {
            icon: "code-box-line",
            title: "Code Block",
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive("codeBlock")
        },
        {
            icon: "double-quotes-l",
            title: "Blockquote",
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive("blockquote")
        },
        {
            icon: "separator",
            title: "Horizontal Rule",
            action: () => editor.chain().focus().setHorizontalRule().run()
        }
    ];

    return (
        <div className="flex flex-wrap items-center justify-center">
            {items.map((item, i) => (
                <Fragment key={i}>
                    <MenubarItem {...item} />
                </Fragment>
            ))}
        </div>
    );
}
