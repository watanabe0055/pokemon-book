import TypeFilter from "./components/typeFilter";
import { fetchPokemonTypes } from "./lib/fetch/type";
import PokemonIndexPagePart from "./pageParts/pokemon";

export default async function Home() {
  const pokemonTypes = await fetchPokemonTypes();

  return (
    <>
      <main>
        <TypeFilter typeList={pokemonTypes} />
        <PokemonIndexPagePart />
      </main>
    </>
  );
}
