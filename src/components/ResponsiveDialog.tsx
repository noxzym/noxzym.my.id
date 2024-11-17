"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import { isProject } from "@/lib/utils";
import { IArticle, IProject } from "@/types";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "./ui/drawer";

interface props<T extends IProject | IArticle> {
    obj: T;
    trigger: React.ReactNode;
    children: React.ReactNode;
}

export default function ResponsiveDialog<T extends IProject | IArticle>({
    obj,
    trigger,
    children
}: props<T>) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const visitProjectButton = isProject(obj) && (
        <Button asChild className="flex-grow">
            <Link href={(obj as IProject).metadata.url} target="_blank">
                View Project
            </Link>
        </Button>
    );

    if (!isDesktop) {
        return (
            <Drawer noBodyStyles shouldScaleBackground={false}>
                <DrawerTrigger>{trigger}</DrawerTrigger>
                <DrawerContent className="max-h-[80%] min-h-[80%]">
                    <div className="container overflow-y-auto">
                        <DrawerHeader className="px-0 text-left">
                            <DrawerTitle>{obj.metadata.title}</DrawerTitle>
                            <DrawerDescription>{obj.metadata.description}</DrawerDescription>
                        </DrawerHeader>
                        {children}
                    </div>
                    <DrawerFooter>
                        {visitProjectButton}
                        <DrawerClose asChild>
                            <Button>Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-w-screen-sm overflow-auto md:max-h-[calc(80vh)]">
                <DialogHeader>
                    <DialogTitle>{obj.metadata.title}</DialogTitle>
                    <DialogDescription>{obj.metadata.description}</DialogDescription>
                </DialogHeader>
                {children}
                <DialogFooter className="!grid grid-cols-2">
                    {visitProjectButton}
                    <DialogClose asChild>
                        <Button className="flex-grow">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
