import TypeFilter from "../components/typeFilter";
import { fetchAllPokemonData } from "../lib/fetch";
import { fetchPokemonTypes } from "../lib/fetch/type";
import PokemonIndexPagePart from "../pageParts/pokemon";

export default async function Home() {
  const pokemonTypes = await fetchPokemonTypes();
  const getPokemonData = await fetchAllPokemonData({ offset: 1 });

  return (
    <main className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Pokemon Types</h1>
      <TypeFilter typeList={pokemonTypes} />
      <PokemonIndexPagePart InitialPokemonData={getPokemonData} />
    </main>
  );
}
