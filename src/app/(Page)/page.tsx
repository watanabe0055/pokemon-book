import Link from "next/link";
import Image from "next/image";

import clsx from "clsx";

import { Suspense } from "react";
import { fetchPokemonDateByPickUp } from "@/app/lib/fetch";
import PickUpPokemon from "@/app/components/atoms/PickUpPokemon";

async function getServerPickUpPokemon() {
	try {
		const pickupPokemonList = await fetchPokemonDateByPickUp();

		// 各ポケモンの画像データを整形
		return pickupPokemonList?.pokemonPickupList?.map((pokemon) => ({
			id: pokemon.id,
			name: pokemon.name,
			image: pokemon.sprites.other.official_artwork.front_default,
		}));
	} catch (error) {
		console.error("Failed to fetch Pokemon data:", error);
		return []; // 空配列を返して処理を継続
	}
}

export default async function Home() {
	const pokemonList = await getServerPickUpPokemon();

	return (
		<div className="space-y-16">
			{/* ヒーローセクション */}
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

			{/* 注目のポケモンセクション */}
			{pokemonList && pokemonList.length > 0 && (
				<section className="py-16 bg-gray-100">
					<Suspense fallback={"loading..."}>
						<PickUpPokemon pokemonList={pokemonList} />
					</Suspense>
				</section>
			)}

			{/* コールトゥアクション */}
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
		</div>
	);
}
