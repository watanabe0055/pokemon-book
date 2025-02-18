import Link from "next/link";

import PickUpPokemon from "@/app/components/atoms/PickUpPokemon";
import { fetchPokemonDateByPickUp } from "@/app/lib/fetch";
import { Suspense } from "react";
import CallToSection from "../components/CallToSection";
import HeroSection from "../components/HeroSection";

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
			<HeroSection />

			{/* 注目のポケモンセクション */}
			{pokemonList && pokemonList.length > 0 && (
				<section className="py-16 bg-gray-100">
					<Suspense fallback={"loading..."}>
						<PickUpPokemon pokemonList={pokemonList} />
					</Suspense>
				</section>
			)}

			{/* コールトゥアクション */}
			<CallToSection />
		</div>
	);
}
