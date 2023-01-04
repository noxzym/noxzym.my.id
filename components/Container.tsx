import { motion } from "framer-motion";
import { NaviagationBar } from "./NavigationBar";

export const Container = function ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`w-full px-[5%] lg:px-[15%]`}>
            <NaviagationBar />
            <motion.main
                className={`w-full ${className}`}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={{
                    hidden: { opacity: 0, x: -200 },
                    enter: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 0 }
                }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.main>
        </div>
    );
};
