import Link from "next/link";

const CallToSection = () => {
	return (
		<section className="container px-4 mx-auto text-center">
			<h2 className="mb-6 text-3xl font-bold md:text-4xl">
				ポケモンマスターへの道
			</h2>
			<p className="mb-8 text-xl text-gray-600">
				今すぐ冒険を始めよう！何千ものトレーナーが待っています
			</p>
			<Link
				href="/list"
				className="inline-block px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-red-600 rounded-full hover:bg-red-700"
			>
				ポケモン図鑑を見る
			</Link>
		</section>
	);
};

export default CallToSection;
