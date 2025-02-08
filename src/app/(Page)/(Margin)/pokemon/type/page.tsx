import TypeFilter from "@/app/components/typeFilter";
import { fetchPokemonTypes } from "@/app/lib/fetch/type";
import FilteredPokemonList from "@/app/pageParts/filteredPokemon";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "pokemon Type Filter",
	description: "pokemon type filter page",
};

export default async function Home() {
	const pokemonTypes = await fetchPokemonTypes();

	return (
		<>
			<h1 className="mb-8 text-4xl font-bold text-center">Pokemon Types</h1>
			<TypeFilter typeList={pokemonTypes} />
			<FilteredPokemonList />
		</>
	);
}
