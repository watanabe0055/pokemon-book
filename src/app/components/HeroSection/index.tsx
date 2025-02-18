import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
			<Image
				src="/gemini_pokemon_top.jpeg"
				priority
				alt="カラフルなポケモンの背景"
				height={1080}
				width={1920}
				className="absolute z-0"
			/>
			<div className="relative z-10 space-y-6 text-center">
				<h1 className="text-4xl font-bold text-white md:text-6xl drop-shadow-lg">
					ポケモンの世界を探索しよう
				</h1>
				<p className="text-xl text-white md:text-2xl drop-shadow-md">
					お気に入りのポケモンを検索し、学び、冒険しよう
				</p>
				<Link
					href="/search"
					className={clsx(
						"inline-block px-8 py-3 text-lg font-semibold text-white bg-red-600",
						"transition-colors duration-300  rounded-full hover:bg-red-700 animate-bounce",
					)}
				>
					探索を始める
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
