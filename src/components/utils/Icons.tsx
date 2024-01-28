import { IconList } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SVGProps, createElement } from "react";

export function Icons(props: SVGProps<SVGSVGElement> & { icon: keyof typeof IconList }) {
    return createElement(IconList[props.icon][1], {
        title: IconList[props.icon][0],
        className: cn("pointer-events-none", props.className)
    });
}
