import { fetchAllPokemonData } from "../../lib/fetch";
import PokemonIndexPagePart from "../../pageParts/pokemon";

export default async function Home() {
  const getPokemonData = await fetchAllPokemonData({ offset: 1 });

  return (
    <div className="container px-4 py-8 mx-auto">
      <PokemonIndexPagePart InitialPokemonData={getPokemonData} />
    </div>
  );
}
