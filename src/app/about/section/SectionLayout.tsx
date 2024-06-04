export default function SectionLayout({
    title,
    description,
    items
}: {
    title: string;
    description: string;
    items: IItem[];
}) {
    return (
        <section className="flex flex-col gap-4 py-12 md:gap-5">
            <div className="flex flex-col">
                <p className="text-3xl font-bold">{title}</p>
                <p className="text-foreground/85 text-xl font-medium">{description}</p>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col justify-between md:flex-row">
                        <div className="flex md:w-1/2">
                            <span className="bg-foreground mx-5 mt-1 hidden h-5 w-5 flex-none rounded-full md:block" />
                            <div className="flex flex-col">
                                <p className="line-clamp-1 text-2xl font-medium">{item.title}</p>
                                <p className="text-foreground/85 font-medium">{item.provider}</p>
                            </div>
                        </div>
                        <p className="text-foreground/85 font-medium">{item.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

interface IItem {
    title: string;
    provider: string;
    duration: string;
}
