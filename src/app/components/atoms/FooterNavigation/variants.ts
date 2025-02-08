import clsx from "clsx";
import { tv } from "tailwind-variants";

export const Navigation = tv({
	variants: {
		isSpView: {
			false: clsx(
				"flex flex-wrap",
				"justify-center",
				"mb-4",
				"space-x-6 md:justify-end md:mb-0",
			),
			true: clsx("flex flex-col space-y-2"),
		},
	},
});
