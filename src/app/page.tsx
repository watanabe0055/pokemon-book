import TypeFilter from "./components/typeFilter";
import { fetchAllPokemonData } from "./lib/fetch";
import { fetchPokemonTypes } from "./lib/fetch/type";
import PokemonIndexPagePart from "./pageParts/pokemon";

export default async function Home() {
  const pokemonTypes = await fetchPokemonTypes();
  const getPokemonData = await fetchAllPokemonData({ offset: 1 });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Pokemon Types</h1>
      <TypeFilter typeList={pokemonTypes} />
      <PokemonIndexPagePart InitialPokemonData={getPokemonData} />
    </main>
  );
}
