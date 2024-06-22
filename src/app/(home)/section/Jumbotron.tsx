import Link from "next/link";
import { IGithub, ILanyard } from "@/types";
import { ListBlobResultBlob } from "@vercel/blob";
import { ExternalLinks, NavigationLinks } from "@/lib/constants";
import { getBlobs } from "@/lib/getBlobs";
import { Button } from "@/components/ui/button";
import CarouselProfilePicture from "@/components/CarouselProfilePicture";

export default async function Jumbotron() {
    const blobs = await getBlobs<ListBlobResultBlob[]>("images", "images/profile.png");
    const profilePictureBlob = blobs[0] as unknown as ListBlobResultBlob | undefined;
    const profilePicture = profilePictureBlob?.url ?? null;

    const lanyardRequest = await fetch(
        "https://api.lanyard.rest/v1/users/243728573624614912"
    ).catch(() => null);

    const lanyardData: ILanyard | null = lanyardRequest?.ok
        ? await lanyardRequest?.json().catch(() => null)
        : null;

    const discordAvatar = lanyardData?.success
        ? `https://cdn.discordapp.com/avatars/243728573624614912/${lanyardData?.data.discord_user.avatar}.png?size=512`
        : null;

    const githubResult = await fetch("https://api.github.com/users/noxzym").catch(() => null);

    const githubData: IGithub | null = githubResult?.ok
        ? await githubResult?.json().catch(() => null)
        : null;

    const githubAvatar = githubData?.avatar_url ?? null;

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
