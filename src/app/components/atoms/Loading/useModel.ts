import { useWindowSize } from "@/app/lib/windSize";
import { useEffect, useState } from "react";

export const useModel = () => {
	const size = useWindowSize();

	const [skeletons, setSkeletons] = useState<
		Array<{ id: string; value: number }>
	>([]);

	useEffect(() => {
		const validateSize = (width: number) => {
			if (width >= 1280) {
				return 6;
			}
			if (width >= 1024) {
				return 5;
			}
			if (width >= 768) {
				return 4;
			}
			if (width >= 640) {
				return 3;
			}
			return 2;
		};

		const num = validateSize(size.width);

		setSkeletons(
			Array.from({ length: num * 2 }, (_, index) => ({
				id: `${num}-${index}`, // 一意なキーを生成
				value: num,
			})),
		);
	}, [size.width]);

	return {
		skeletons,
	};
};
