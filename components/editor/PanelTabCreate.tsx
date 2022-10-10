import { Tab } from "@headlessui/react";
import { Editor } from "@tiptap/react";
import { Fragment, useEffect, useState } from "react";
import { LazyLoading } from "../LazyLoading";

function PartInformation() {
    return (
        <>
            <div className="pl-3 font-segoe-bold text-lg text-[#222831] dark:text-[#DDDDDD]">
                Article Information
            </div>
            <input
                type="date"
                required
                className="form-input w-full rounded-md border-0 font-serif font-bold outline-0 ring-0 placeholder:font-serif focus:border-0 focus:outline-0 focus:ring-0 dark:bg-[#666666] dark:text-[#DDDDDD] dark:placeholder:text-[#DDDDDD] lg:w-fit"
            />
            <input
                placeholder="Title"
                required
                className="form-input w-full rounded-md border-0 font-serif font-bold outline-0 ring-0 placeholder:font-serif focus:border-0 focus:outline-0 focus:ring-0 focus:placeholder:opacity-0 dark:bg-[#666666] dark:text-[#DDDDDD] dark:placeholder:text-[#DDDDDD] lg:w-2/3"
            />
            <input
                placeholder="Description"
                required
                className="form-input w-full rounded-md border-0 font-serif font-bold outline-0 ring-0 placeholder:font-serif focus:border-0 focus:outline-0 focus:ring-0 focus:placeholder:opacity-0 dark:bg-[#666666] dark:text-[#DDDDDD] dark:placeholder:text-[#DDDDDD] lg:w-2/3"
            />
            <input
                placeholder="Thumbnail"
                required
                className="form-input w-full rounded-md border-0 font-serif font-bold outline-0 ring-0 placeholder:font-serif focus:border-0 focus:outline-0 focus:ring-0 focus:placeholder:opacity-0 dark:bg-[#666666] dark:text-[#DDDDDD] dark:placeholder:text-[#DDDDDD] lg:w-2/3"
            />
        </>
    );
}

function PartContent({
    editor,
    TextEditor,
    Menubar
}: {
    editor: Editor;
    TextEditor: () => JSX.Element;
    Menubar: () => JSX.Element;
}) {
    const [menubar, setMenubar] = useState([
        false,
        <LazyLoading
            key={0}
            className="h-8 w-8 stroke-[#222831] stroke-[4] dark:stroke-[#DDDDDD]"
        />
    ]);

    useEffect(() => {
        if (!menubar[0]) {
            setMenubar([true, <Menubar key={0} />]);
        }
    }, [Menubar, editor, menubar]);

    function TabList() {
        return (
            <Tab.List className="flex flex-row rounded-md">
                {["Write", "Preview"].map((item, i) => (
                    <Tab key={i} as={Fragment}>
                        {({ selected }) => (
                            <button
                                key={i}
                                className={`px-3 py-2 ${
                                    selected
                                        ? "rounded-t-lg bg-[#EEEEEE] dark:bg-[#555555]"
                                        : "rounded-0 bg-[#CCCCCC] dark:bg-[#333333]"
                                }`}
                            >
                                <div className="font-serif font-bold text-[#222831] dark:text-[#DDDDDD]">
                                    {item}
                                </div>
                            </button>
                        )}
                    </Tab>
                ))}
            </Tab.List>
        );
    }

    function TabPanels({ TextEditor }: { TextEditor: () => JSX.Element }) {
        return (
            <Tab.Panels>
                <Tab.Panel className="flex h-64 w-full overflow-y-auto rounded-b-xl bg-[#EEEEEE] p-3 dark:bg-[#555555]">
                    <div className="h-full w-full overflow-y-auto rounded bg-[#CCCCCC] p-1 dark:bg-[#333333]">
                        <TextEditor />
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        );
    }

    return (
        <>
            <div className="pl-3 font-segoe-bold text-lg text-[#222831] dark:text-[#DDDDDD]">
                Article Content
            </div>
            <div className="flex w-full rounded-md bg-[#C7C7C7] dark:bg-[#222222]">
                <Tab.Group>
                    <div className="flex w-full flex-col">
                        <div className="flex w-full flex-row justify-between rounded-t-xl bg-[#CCCCCC] px-3 pt-3 dark:bg-[#333333]">
                            <TabList />
                            {menubar[1]}
                        </div>
                        <TabPanels {...{ TextEditor }} />
                    </div>
                </Tab.Group>
            </div>
        </>
    );
}

export const PanelTabCreate = function ({
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
        <Tab.Panel className="flex w-full flex-col gap-2">
            <PartInformation />
            <PartContent {...{ editor, TextEditor, Menubar }} />
        </Tab.Panel>
    );
};
