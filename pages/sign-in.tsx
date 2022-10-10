import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

export default function SignInPage() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status !== "loading") {
            if (!session || status === "unauthenticated") {
                void signIn("discord");
            }
            if (session || status === "authenticated") {
                window.close();
            }
        }
    }, [status, session]);
}
