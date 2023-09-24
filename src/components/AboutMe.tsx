import Link from "next/link";

export function AboutMe() {
    return (
        <div id="about" className="flex flex-col gap-8 pt-16">
            <p className="text-center font-sans text-2xl font-bold text-black/80 dark:text-white/80">
                About Me
            </p>
            <div className="flex flex-col gap-3 font-sans font-medium text-black/60 dark:text-white/60">
                <p>
                    Halo, saya Orchitiadi Ismaulana Putra, seorang mahasiswa informatika di
                    Universitas Gunadarma. Saya terus belajar dalam pemrograman. Saya memiliki
                    beberapa pengalaman dalam pengembangan back-end dan front-end.
                </p>
                <p>
                    Disamping itu, saya juga terlibat dalam membantu berbagai tugas di
                    &quot;Gemilang Hasta Kreasi&quot; yang merupakan usaha konveksi milik keluarga
                    saya.
                </p>
                <p>
                    Dalam pemrograman, saya biasanya menggunakan Typescript karena sistem typingnya
                    sangat membantu dalam mengembangkan aplikasi. Untuk pengembangan web, saya juga
                    menggunakan Typescript React menggunakan framework Next.js dan TailwindCSS.
                </p>
                <p>
                    Feel free to{" "}
                    <Link
                        href="#contact"
                        className="font-bold text-black/80 no-underline dark:text-white/80"
                    >
                        Contact Me
                    </Link>{" "}
                    if you have any questions.
                </p>
            </div>
        </div>
    );
}
