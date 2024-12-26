"use client";

import { useModel } from "./useModel";
import PokemonIndex from "./components/pokemonIndex";
import useScrollDetection from "./lib/scroll";
import { useEffect } from "react";

export default function Home() {
  const { pokemonData, loaderGetPokemon } = useModel(); // 追加ロード用関数を仮定
  const isBottom = useScrollDetection();

  useEffect(() => {
    if (isBottom) {
      loaderGetPokemon();
    }
  }, [isBottom, loaderGetPokemon]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <PokemonIndex pokemonData={pokemonData.pokemonData} />
    </main>
  );
}
