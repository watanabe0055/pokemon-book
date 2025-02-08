"use server";

import { POKEMON_JAPANESE_NAMES } from "@/app/constants/pokemon";
import { fetchPokemonData } from "@/app/lib/fetch";

// import { fetchPokemon } from "./lib/pokemon";

export async function searchPokemon(formData: FormData) {
	const query = formData.get("query");
	if (!query || typeof query !== "string" || query.trim() === "") {
		throw new Error("検索クエリが無効です");
	}

	// 正しい検索処理
	const searchWordConversion = (query: string) => {
		const pokemon = POKEMON_JAPANESE_NAMES.find(
			(pokemon) => pokemon.name === query,
		);
		return pokemon ? pokemon.id : null; // 該当しない場合はnullを返す
	};

	const convertedId = searchWordConversion(query);
	if (!convertedId) return null;

	return await fetchPokemonData({ id: convertedId.toString() });
}
