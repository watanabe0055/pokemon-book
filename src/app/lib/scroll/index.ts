"use client";

import { useEffect, useState } from "react";

function useScrollDetection() {
	const [isBottom, setIsBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.innerHeight + window.scrollY;
			const documentHeight = document.documentElement.offsetHeight;

			if (scrollPosition >= documentHeight) {
				setIsBottom(true);
			} else {
				setIsBottom(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return isBottom;
}

export default useScrollDetection;
