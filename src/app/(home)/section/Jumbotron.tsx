import CarouselProfilePicture from "@/components/CarouselProfilePicture";
import { Button } from "@/components/ui/button";
import { ExternalLinks, NavigationLinks } from "@/lib/constants";
import getProfilePicture from "@/lib/getProfilePicture";
import Link from "next/link";

export default async function Jumbotron() {
    const [profilePicture, githubAvatar, discordAvatar] = await getProfilePicture();

    return (
        <section className="flex flex-col items-center justify-between py-12 md:mt-12 md:flex-row">
            <div className="flex flex-col gap-4">
                <div>
                    <p className="font-semibold text-xl md:text-4xl">Hello, I am</p>
                    <p className="font-bold text-4xl md:text-6xl">Orchitiadi Ismaulana Putra</p>
                    <p className="font-medium text-foreground/90 text-sm md:text-xl">
                        A Full Stack Developer who is familiar with using React and NodeJS.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {NavigationLinks("About", "Blog", "Projects").map((link, i) => (
                        <Button
                            key={i.toString()}
                            asChild
                            className="flex-grow font-semibold text-base md:flex-grow-0"
                        >
                            <Link href={link.url}>{link.text}</Link>
                        </Button>
                    ))}
                </div>
                <div className="flex gap-2">
                    {ExternalLinks("Resume", "Linkedin", "Github").map((link, i) => (
                        <Button key={i.toString()} asChild size="sm" variant="link">
                            <Link
                                href={link.url}
                                prefetch={false}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="text-foreground/85"
                            >
                                <link.icon size="20px" className="mr-2" />
                                {link.to}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
            <CarouselProfilePicture
                pictures={[profilePicture, githubAvatar, discordAvatar]}
                className="order-first mb-20 md:order-last md:mb-0"
            />
        </section>
    );
}
