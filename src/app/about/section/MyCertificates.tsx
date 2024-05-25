export default function MyCertificates() {
    return (
        <section className="flex flex-col gap-4">
            <p className="text-4xl font-semibold">Certificates</p>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <div className="flex w-1/2">
                        <span className="mx-5 mt-1 h-5 w-5 flex-none rounded-full bg-foreground" />
                        <div className="flex flex-col">
                            <p className="line-clamp-1 text-2xl font-medium">
                                Belajar Membuat Aplikasi Back-End untuk Pemula
                            </p>
                            <p className="font-medium">Dicoding Indonesia</p>
                        </div>
                    </div>
                    <p className="flex-none font-medium">Jul. 2023 - Jul. 2026</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex w-1/2">
                        <span className="mx-5 mt-1 h-5 w-5 flex-none rounded-full bg-foreground" />
                        <div className="flex flex-col">
                            <p className="line-clamp-1 text-2xl font-medium">
                                Belajar Dasar Pemrograman JavaScript
                            </p>
                            <p className="font-medium">Dicoding Indonesia</p>
                        </div>
                    </div>
                    <p className="flex-none font-medium">Jul. 2023 - Jul. 2026</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex w-1/2">
                        <span className="mx-5 mt-1 h-5 w-5 flex-none rounded-full bg-foreground" />
                        <div className="flex flex-col">
                            <p className="line-clamp-1 text-2xl font-medium">
                                Belajar Dasar Structured Query Language (SQL) Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Vero quod perferendis ipsum
                                eveniet corporis molestiae est natus dolorem, corrupti doloribus!
                            </p>
                            <p className="font-medium">Dicoding Indonesia</p>
                        </div>
                    </div>
                    <p className="flex-none font-medium">Okt. 2023 - Okt. 2026</p>
                </div>
            </div>
        </section>
    );
}
