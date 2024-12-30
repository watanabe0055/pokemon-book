"use client";

import { useModel } from "./useModel";
import PokemonIndex from "./components/pokemonIndex";
import useScrollDetection from "./lib/scroll";
import { Suspense, useEffect } from "react";

function Loader() {
  return <div className="py-4 text-center">Loading more Pokémon...</div>;
}

export default function Home() {
  const { pokemonData, loaderGetPokemon } = useModel();
  const isBottom = useScrollDetection();

  useEffect(() => {
    if (isBottom) {
      loaderGetPokemon();
    }
  }, [isBottom]);

  return (
    <main>
      <PokemonIndex pokemonData={pokemonData?.pokemonData} />
      <Suspense fallback={<Loader />}>{isBottom && <Loader />}</Suspense>
    </main>
  );
}
