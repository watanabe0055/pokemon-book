import PokemonIndex from "./components/pokemonIndex";
import { fetchAllPokemonData } from "./lib/fetch";

export default async function Home() {
  const pokemonData = await fetchAllPokemonData();

  return (
    <main>
      <PokemonIndex pokemonData={pokemonData.pokemonData} />
    </main>
  );
}
