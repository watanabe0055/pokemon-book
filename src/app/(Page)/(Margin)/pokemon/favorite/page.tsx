"use server";

import PokemonIndex from "@/app/components/pokemonIndex";
import { getFavoritePokemon } from "@/app/lib/fetch/favorite";

const favoritePage = async () => {
	const pokemon = await getFavoritePokemon();

	return (
		<>
			<PokemonIndex pokemonData={pokemon.data} />
		</>
	);
};

export default favoritePage;
