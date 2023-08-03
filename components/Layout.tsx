import { Container } from "@mui/material";
import { NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { MyFooter } from "./Footer";
import { MyHeader } from "./Header";

export const MyLayout = ({
    children,
    SEO
}: {
    children: ReactNode;
    SEO?: NextSeoProps;
}) => {
    const { pathname } = useRouter();

    return (
        <>
            <MyHeader pathname={pathname} SEO={SEO} />
            <Container
                maxWidth="md"
                className="flex flex-grow flex-col gap-16 px-7 py-16"
            >
                {children}
            </Container>
            <MyFooter />
        </>
    );
};
