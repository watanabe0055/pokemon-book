"use client";

import { useModel } from "./useModel";
import PokemonIndex from "./components/pokemonIndex";

export default function Home() {
  const { pokemonData } = useModel();

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <PokemonIndex pokemonData={pokemonData.pokemonData} />
    </main>
  );
}
