import { fetchPokemonData } from "./lib/fetch";

export default async function Home() {
  await fetchPokemonData();
  return <div></div>;
}
