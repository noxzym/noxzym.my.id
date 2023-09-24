import { MyAvatar } from "./MyAvatar";

export function Jumbotron() {
    return (
        <div className="flex flex-col items-center justify-center gap-16">
            <div className="aspect-square w-36">
                <MyAvatar />
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p className="text-center font-sans text-2xl font-bold text-black/80 dark:text-white/80">
                            Orchitiadi
                            <br />
                            Ismaulana Putra
                        </p>
                    </div>
                    <p className="text-center font-sans text-sm font-semibold text-black/80 dark:text-white/80">
                        Student | Back-end Developer
                    </p>
                </div>
                <p className="text-center font-sans text-sm font-semibold text-black/60 dark:text-white/60">
                    19 years old student who is interested in technology-related things
                </p>
            </div>
        </div>
    );
}
