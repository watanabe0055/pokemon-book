"use server";

import PokemonIndex from "@/app/components/pokemonIndex";
import useModel from "./useModel";

const FavoritePage = async () => {
	const { pokemon } = await useModel();

	return (
		<>
			<PokemonIndex pokemonData={pokemon.data} />
		</>
	);
};

export default FavoritePage;
