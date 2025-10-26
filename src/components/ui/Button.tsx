import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
	"inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary: "bg-primary text-primary-foreground hover:bg-primary/90",
				secondary: "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-700",
				ghost: "bg-transparent text-white hover:bg-white/10 border border-white/10",
				inverted: "bg-white text-black hover:bg-white/90",
				link: "bg-transparent underline-offset-4 hover:underline text-primary",
			},
			size: {
				sm: "h-9 px-3 text-sm",
				md: "h-10 px-4",
				lg: "h-11 px-5 text-lg",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonStyles> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => (
		<button ref={ref} className={twMerge(buttonStyles({ variant, size }), className)} {...props} />
	),
);
Button.displayName = "Button";
