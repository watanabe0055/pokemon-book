import { fetchAllPokemonData } from "../../lib/fetch";
import PokemonIndexPagePart from "../../pageParts/pokemon";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pokemon List",
  description: "pokemon list page",
};

export default async function Home() {
  const getPokemonDataList = await fetchAllPokemonData({ offset: 1 });

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Poke図鑑</h1>
      <PokemonIndexPagePart InitialPokemonData={getPokemonDataList} />
    </div>
  );
}
