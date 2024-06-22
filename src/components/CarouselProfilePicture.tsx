"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface props {
    pictures: (string | null)[];
}

export default function CarouselProfilePicture({ pictures }: props) {
    const plugin = useRef(Autoplay());

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="order-first mb-20 aspect-square w-56 rounded-xl border-1 md:order-last md:mb-0"
        >
            <CarouselContent>
                {Array.from(pictures)
                    .filter(Boolean)
                    .map((_, index) => (
                        <CarouselItem key={index}>
                            <Image
                                src={_!}
                                alt="Profile Picture"
                                sizes="100vw"
                                width={256}
                                height={256}
                                priority
                                className="aspect-square w-full rounded-xl bg-secondary"
                            />
                        </CarouselItem>
                    ))}
            </CarouselContent>
        </Carousel>
    );
}
