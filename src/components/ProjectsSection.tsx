import { IProject } from "@/types";
import APCard from "./APCard";
import APLayout from "./APLayout";
import MDXRemote from "./MDXRemote";
import ResponsiveDialog from "./ResponsiveDialog";

interface props {
    projects: IProject[];
}

export default async function ProjectsSection({ projects }: props) {
    return (
        <APLayout
            title="Projects"
            description="Here's a glimpse into my project experience."
            href="/projects"
            items={projects
                .sort((a, b) => {
                    const dateA = new Date(a.metadata.date);
                    const dateB = new Date(b.metadata.date);

                    return dateB.getTime() - dateA.getTime();
                })
                .map((item, i) => ({
                    metadata: item.metadata,
                    element: (
                        <ResponsiveDialog<IProject>
                            key={i}
                            obj={item as IProject}
                            trigger={<APCard data={item} />}
                        >
                            <MDXRemote mdx={item} />
                        </ResponsiveDialog>
                    )
                }))}
        />
    );
}
