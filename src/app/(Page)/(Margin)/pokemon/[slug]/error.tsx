"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PokemonNotFound() {
	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setRotation((prev) => (prev + 1) % 360);
		}, 50);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-b from-red-500 to-yellow-500">
			<motion.div animate={{ rotate: rotation }} className="mb-8">
				<svg width="120" height="120" viewBox="0 0 100 100">
					<title>Pokeball Animation</title>
					<circle cx="50" cy="50" r="45" fill="white" />
					<circle cx="50" cy="50" r="20" fill="red" />
					<rect x="48" y="10" width="4" height="35" fill="black" />
				</svg>
			</motion.div>
			<h1 className="mb-4 text-4xl font-bold">ポケモンが見つかりません！</h1>
			<p className="mb-8 text-xl">お探しのポケモンは野生に帰ったようです...</p>
			<Link
				href="/"
				className="px-6 py-3 font-semibold text-red-500 transition-colors bg-white rounded-full hover:bg-opacity-90"
			>
				ポケモン図鑑に戻る
			</Link>
		</div>
	);
}
