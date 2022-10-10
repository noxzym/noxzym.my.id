import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Dispatch, SetStateAction } from "react";

export const Tiptap = function ({
    setRawData
}: {
    setRawData: Dispatch<SetStateAction<string>>;
}): [Editor, JSX.Element] {
    const editor = useEditor({
        extensions: [StarterKit, Highlight, Typography, TextAlign],
        editorProps: {
            attributes: {
                class: "prose max-w-none dark:prose-invert focus:outline-none m-3"
            }
        },
        onUpdate: ({ editor }) => {
            setRawData(editor.getHTML());
        }
    });
    return [editor, <EditorContent key={0} editor={editor} />];
};
