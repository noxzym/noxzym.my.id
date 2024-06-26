import Link from "next/link";
import { ExternalLinks, NavigationLinks } from "@/lib/constants";
import getProfilePicture from "@/lib/getProfilePicture";
import { Button } from "@/components/ui/button";
import CarouselProfilePicture from "@/components/CarouselProfilePicture";

export default async function Jumbotron() {
    const [profilePicture, githubAvatar, discordAvatar] = await getProfilePicture();

    return (
        <section className="flex flex-col items-center justify-between py-12 md:mt-12 md:flex-row">
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-xl font-semibold md:text-4xl">Hello, I am</p>
                    <p className="text-4xl font-bold md:text-6xl">Orchitiadi Ismaulana Putra</p>
                    <p className="text-sm font-medium text-foreground/90 md:text-xl">
                        A Full Stack Developer who is familiar with using React and NodeJS.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    {NavigationLinks("About", "Blog", "Projects").map((link, index) => (
                        <Button
                            key={index}
                            asChild
                            className="flex-grow text-base font-semibold md:flex-grow-0"
                        >
                            <Link href={link.url}>{link.text}</Link>
                        </Button>
                    ))}
                </div>
                <div className="flex gap-2">
                    {ExternalLinks("Resume", "Linkedin", "Github").map((link, index) => (
                        <Button key={index} asChild size="sm" variant="link">
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
