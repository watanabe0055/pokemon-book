"use client";

import { useState } from "react";
import { searchPokemon } from "./action";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import PokemonSearchDetail from "../ModalContainer/pokemonSearchDetail";

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState<ConvertPokemonUnionSpeciesType>();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await searchPokemon(formData);
    setPokemon(result?.pokemonData);
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-400 to-indigo-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Pokémon Search
        </h1>
        <form action={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="query"
              placeholder="Enter Pokémon name or ID"
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
