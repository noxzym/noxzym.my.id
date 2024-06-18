"use client";

import React from "react";
import Link from "next/link";
import { IArticle, IProject } from "@/types";
import { isProject } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "./ui/button";
import {
    Dialog,
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
            <Drawer>
                <DrawerTrigger>{trigger}</DrawerTrigger>
                <DrawerContent className="max-h-[80%]">
                    <div className="container overflow-y-auto">
                        <DrawerHeader className="px-0 text-left">
                            <DrawerTitle>{obj.metadata.title}</DrawerTitle>
                            <DrawerDescription>{obj.metadata.description}</DrawerDescription>
                        </DrawerHeader>
                        {children}
                        <DrawerFooter className="px-0">
                            {visitProjectButton}
                            <DrawerClose asChild>
                                <Button>Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent className="max-w-screen-sm overflow-auto md:max-h-[calc(80vh)]">
                <DialogHeader>
                    <DialogTitle>{obj.metadata.title}</DialogTitle>
                    <DialogDescription>{obj.metadata.description}</DialogDescription>
                </DialogHeader>
                {children}
                <DialogFooter>{visitProjectButton}</DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
