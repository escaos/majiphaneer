import type * as React from "react";
import { twMerge } from "tailwind-merge";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={twMerge(
				"rounded-[var(--radius-lg)] border border-foreground/20 bg-white/40 backdrop-blur p-6",
				className,
			)}
			{...props}
		/>
	);
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return <h3 className={twMerge("text-xl font-semibold", className)} {...props} />;
}

export function CardDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return <p className={twMerge("text-sm text-foreground/70", className)} {...props} />;
}
