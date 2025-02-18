"use client";

import type { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import type { AbilityListHonoResponseType } from "@/app/type/pokemonAbility";
import { useState } from "react";
import PokemonSearchDetail from "../ModalContainer/pokemonSearchDetail";
import PokemonSearchForm from "../PokemonSearchForm";
import { Typography } from "../atoms/Typography";
import { searchPokemon } from "./action";

export default function PokemonSearch() {
	const [pokemon, setPokemon] = useState<
		ConvertPokemonUnionSpeciesType & AbilityListHonoResponseType
	>();
	const [loading, setLoading] = useState(false);

	async function handleSubmit(formData: FormData) {
		setLoading(true);
		const result = await searchPokemon(formData);
		console.log(result);
		if (result?.pokemonData) {
			setPokemon(result.pokemonData);
		}
		setLoading(false);
	}

	return (
		<div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-400 to-indigo-600">
			<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
				<Typography color="black" weight="medium" variant="h3" align="center">
					<span className="mb-6">Pokémon Search</span>
				</Typography>

				<PokemonSearchForm handleSubmit={handleSubmit} loading={loading} />

				{pokemon && <PokemonSearchDetail pokemonData={pokemon} />}

				{pokemon === null && (
					<p className="mt-4 text-center text-gray-600">
						No Pokémon found. Try another name or ID.
					</p>
				)}
			</div>
		</div>
	);
}
