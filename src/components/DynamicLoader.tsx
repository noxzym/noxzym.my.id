import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

export function DynamicLoader({ count, className }: { count?: number; className?: string }) {
    return Array.from(
        {
            length: count ?? 1
        },
        (_, i) => <Skeleton key={i} className={cn("aspect-square h-auto w-full", className)} />
    );
}
