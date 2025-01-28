import { fetchAllPokemonData } from "../../lib/fetch";
import PokemonIndexPagePart from "../../pageParts/pokemon";

export default async function Home() {
  const getPokemonData = await fetchAllPokemonData({ offset: 1 });

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Poke図鑑</h1>
      <PokemonIndexPagePart InitialPokemonData={getPokemonData} />
    </div>
  );
}
