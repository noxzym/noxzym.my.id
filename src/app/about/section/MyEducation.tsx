export default function MyEducation() {
    return (
        <section className="flex flex-col gap-4">
            <p className="text-4xl font-semibold">Education</p>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <div className="flex w-1/2">
                        <span className="mx-5 mt-1 h-5 w-5 flex-none rounded-full bg-foreground" />
                        <div className="flex flex-col">
                            <p className="line-clamp-1 text-2xl font-medium">
                                Sarjana Teknik Informatika
                            </p>
                            <p className="font-medium">Universitas Gunadarma</p>
                        </div>
                    </div>
                    <p className="font-medium">Okt. 2022 - Present</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex w-1/2">
                        <span className="mx-5 mt-1 h-5 w-5 flex-none rounded-full bg-foreground" />
                        <div className="flex flex-col">
                            <p className="line-clamp-1 text-2xl font-medium">
                                Matematika - Ilmu Pengetahuan Alam
                            </p>
                            <p className="font-medium">SMA Perguruan Rakyat 1</p>
                        </div>
                    </div>
                    <p className="font-medium">Jul. 2019 - Jul. 2022</p>
                </div>
            </div>
        </section>
    );
}
