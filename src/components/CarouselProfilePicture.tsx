"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

interface props {
    pictures: (string | null)[];
    className?: string;
}

export default function CarouselProfilePicture({ pictures, className }: props) {
    const plugin = useRef(Autoplay());

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className={cn("aspect-square w-56 rounded-xl border-1", className)}
        >
            <CarouselContent>
                {Array.from(pictures)
                    .filter(Boolean)
                    .map((_, i) => (
                        <CarouselItem key={i.toString()}>
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
