import { type VariantProps, tv } from "tailwind-variants";

const glassmorphism = tv({
	base: "backdrop-blur-md bg-white/30 rounded-lg shadow-lg",
	variants: {
		padding: {
			sm: "p-4",
			md: "p-6",
			lg: "p-8",
		},
		blur: {
			light: "backdrop-blur-sm",
			medium: "backdrop-blur-md",
			heavy: "backdrop-blur-lg",
		},
		border: {
			none: "",
			light: "border border-white/20 dark:border-black/20",
			heavy: "border-2 border-white/40 dark:border-black/40",
		},
		color: {
			default: "bg-white/30 dark:bg-black/30",
			white: "bg-white/70",
		},
	},
	defaultVariants: {
		padding: "md",
		blur: "medium",
		border: "light",
		color: "default",
	},
});

export interface GlassmorphismProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof glassmorphism> {
	children: React.ReactNode;
	padding?: "sm" | "md" | "lg";
	blur?: "light" | "medium" | "heavy";
	border?: "none" | "light" | "heavy";
	color?: "default" | "white";
}

export const Glassmorphism: React.FC<GlassmorphismProps> = ({
	children,
	padding,
	blur,
	border,
	color,
	className,
	...props
}) => {
	return (
		<div
			className={glassmorphism({ padding, blur, border, color, className })}
			{...props}
		>
			{children}
		</div>
	);
};
