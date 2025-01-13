"use client";

import { useState } from "react";
import { searchPokemon } from "./action";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import PokemonSearchDetail from "../ModalContainer/pokemonSearchDetail";
import { AbilityListHonoResponseType } from "@/app/type/pokemonAbility";
import { Typography } from "../atoms/Typography";

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState<
    ConvertPokemonUnionSpeciesType & AbilityListHonoResponseType
  >();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await searchPokemon(formData);
    setPokemon(
      result?.pokemonData as ConvertPokemonUnionSpeciesType &
        AbilityListHonoResponseType
    );
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-400 to-indigo-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <Typography color="black" weight="medium" variant="h3" align="center">
          <span className="mb-6">Pokémon Search</span>
        </Typography>

        <form action={handleSubmit} className="space-y-4">
          <div className="relative">
            <label htmlFor="pokemon-search" className="sr-only">
              ポケモンの名前またはID
            </label>
            <input
              type="text"
              id="pokemon-search"
              name="query"
              placeholder="ピカチュウ"
              className="w-full px-4 py-2 transition-colors border-2 border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
              required
            />
            <button
              type="submit"
              className="absolute px-4 py-1 text-white transition-colors transform -translate-y-1/2 bg-purple-500 rounded-full right-2 top-1/2 hover:bg-purple-600"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

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
