import { useWindowSize } from "@/app/lib/windSize";
import { useEffect, useState } from "react";

export const useModel = () => {
	const size = useWindowSize();

	const [skeletons, setSkeletons] = useState<number[]>([]);

	useEffect(() => {
		const validateSize = (width: number) => {
			if (width >= 1280) {
				return 6;
			} else if (width >= 1024) {
				return 5;
			} else if (width >= 768) {
				return 4;
			} else if (width >= 640) {
				return 3;
			} else {
				return 2;
			}
		};

		const num = validateSize(size.width);

		setSkeletons(Array(num * 2).fill(null));
	}, [size.width]);

	return {
		skeletons,
	};
};
