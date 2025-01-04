import TypeFilter from "./components/typeFilter";
import { fetchPokemonTypes } from "./lib/fetch/type";
import PokemonIndexPagePart from "./pageParts/pokemon";

export default async function Home() {
  const pokemonTypes = await fetchPokemonTypes();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Pokemon Types</h1>
      <TypeFilter typeList={pokemonTypes} />
      <PokemonIndexPagePart />
    </main>
  );
}
