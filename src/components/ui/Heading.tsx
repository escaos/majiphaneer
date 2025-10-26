import type * as React from "react";
import { twMerge } from "tailwind-merge";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	display?: boolean; // massive display size per design
};

export function Heading({ level = 2, display = false, className, ...props }: HeadingProps) {
	const Tag = `h${level}` as unknown as keyof JSX.IntrinsicElements;
	return (
		<Tag
			className={twMerge(
				"font-semibold tracking-tight text-balance",
				display && "text-[18vw] leading-[0.9] md:text-[14vw] lg:text-[12vw]",
				!display && level === 1 && "text-4xl md:text-6xl",
				!display && level === 2 && "text-3xl md:text-5xl",
				!display && level === 3 && "text-2xl md:text-4xl",
				!display && typeof level === "number" && level >= 4 && "text-xl md:text-2xl",
				className,
			)}
			{...props}
		/>
	);
}
