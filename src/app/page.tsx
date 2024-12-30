"use client";

import { useModel } from "./useModel";
import PokemonIndex from "./components/pokemonIndex";
import useScrollDetection from "./lib/scroll";
import { useEffect } from "react";

export default function Home() {
  const { pokemonData, loaderGetPokemon } = useModel();
  const isBottom = useScrollDetection();

  useEffect(() => {
    if (isBottom) {
      loaderGetPokemon();
    }
  }, [isBottom]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <PokemonIndex pokemonData={pokemonData.pokemonData} />
    </main>
  );
}
