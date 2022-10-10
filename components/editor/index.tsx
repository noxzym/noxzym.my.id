import { Tab } from "@headlessui/react";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LazyLoading } from "../LazyLoading";
import Menubar from "./Menubar";
import { PanelTabCreate } from "./PanelTabCreate";

function TiptapEditor({
    setRawData
}: {
    setRawData: Dispatch<SetStateAction<string>>;
}): [Editor, JSX.Element, JSX.Element] {
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
    return [
        editor,
        <EditorContent key={0} editor={editor} />,
        <Menubar key={1} {...{ editor }} />
    ];
}

function TabLists() {
    return (
        <Tab.List className="flex h-fit w-full flex-col items-center gap-1 rounded-lg bg-[#C7C7C7] p-3 dark:bg-[#222222] lg:w-1/5">
            {["Create", "Update", "Delete"].map((item, i) => (
                <Tab
                    key={i}
                    className="w-full rounded bg-[#CCCCCC] py-2 shadow hover:bg-[#EEEEEE] ui-selected:bg-[#EEEEEE] dark:bg-[#333333] dark:hover:bg-[#555555] dark:ui-selected:bg-[#555555]"
                >
                    <div className="font-segoe-bold text-[#222831] dark:text-[#DDDDDD]">
                        {item}
                    </div>
                </Tab>
            ))}
        </Tab.List>
    );
}

function TabPanels({
    editor,
    rawData,
    TextEditor,
    Menubar
}: {
    editor: Editor;
    rawData: string;
    TextEditor: () => JSX.Element;
    Menubar: () => JSX.Element;
}) {
    return (
        <Tab.Panels className="w-full lg:w-4/5">
            <PanelTabCreate {...{ editor, rawData, TextEditor, Menubar }} />
            <Tab.Panel className="w-full">
                B
                <div className="flex w-full flex-col overflow-y-auto rounded-lg bg-[#C7C7C7] p-3 dark:bg-[#222222]"></div>
            </Tab.Panel>
            <Tab.Panel className="w-full">
                C
                <div className="flex w-full flex-col overflow-y-auto rounded-lg bg-[#C7C7C7] p-3 dark:bg-[#222222]"></div>
            </Tab.Panel>
        </Tab.Panels>
    );
}

export const TextEditor = function () {
    const [tab, setTab] = useState([
        false,
        [
            <LazyLoading
                key={0}
                className="mx-auto h-20 w-20 stroke-[#222831] stroke-[4] dark:stroke-[#DDDDDD]"
            />
        ]
    ]);
    const [rawData, setRawData] = useState("");
    const [editor, TextEditor, Menubar] = TiptapEditor({ setRawData });

    useEffect(() => {
        if (!tab[0] && editor) {
            setTab([
                true,
                [
                    <TabLists key={0} />,
                    <TabPanels
                        {...{
                            editor,
                            rawData,
                            TextEditor: () => TextEditor,
                            Menubar: () => Menubar
                        }}
                        key={1}
                    />
                ]
            ]);
        }
    }, [editor, TextEditor, rawData, tab, Menubar]);

    return (
        <Tab.Group>
            <div className="flex h-full w-full flex-col justify-center gap-3 lg:flex-row">
                {tab[1]}
            </div>
        </Tab.Group>
    );
};
