import TypeFilter from "@/app/components/typeFilter";
import { fetchPokemonTypes } from "@/app/lib/fetch/type";
import FilteredPokemonList from "@/app/pageParts/filteredPokemon";

export default async function Home() {
  const pokemonTypes = await fetchPokemonTypes();

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Pokemon Types</h1>
      <TypeFilter typeList={pokemonTypes} />
      <FilteredPokemonList />
    </div>
  );
}
