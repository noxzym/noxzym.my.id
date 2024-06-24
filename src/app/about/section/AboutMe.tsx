import getProfilePicture from "@/lib/getProfilePicture";
import CarouselProfilePicture from "@/components/CarouselProfilePicture";

export default async function AboutMe() {
    const [profilePicture, githubAvatar, discordAvatar] = await getProfilePicture();

    return (
        <section className="flex flex-col gap-4 py-12 md:gap-5">
            <p className="text-4xl font-bold md:text-6xl">About me</p>
            <div className="flex items-start justify-between">
                <div className="flex flex-col gap-3 font-medium md:w-1/2">
                    <p>
                        Hi, I&apos;m Orchit. a tech enthusiast fueled by the latest advancements and
                        eager to contribute to the ever-evolving field.
                    </p>
                    <p>
                        My expertise lies in both back-end and front-end development, wielding tools
                        like Node.js, Golang, TypeScript, Next.js, Tailwind CSS, and more to build
                        impactful applications.
                    </p>
                    <p>
                        Fueled by a desire to solve problems and make a difference, I&apos;m
                        constantly exploring new technologies and collaborating with inspiring teams
                        to bring innovative ideas to life.
                    </p>
                    <p>
                        This website showcases some of my creations, and I&apos;m always open to
                        discussing exciting new projects!
                    </p>
                </div>
                <CarouselProfilePicture
                    pictures={[profilePicture, githubAvatar, discordAvatar]}
                    className="hidden md:block"
                />
            </div>
        </section>
    );
}
