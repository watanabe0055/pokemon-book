import PokemonSearchDetail from "@/app/components/ModalContainer/pokemonSearchDetail";
import { fetchPokemonData } from "@/app/lib/fetch";

async function getServerPokemonData(params: { slug: string }) {
  try {
    const pokemon = await fetchPokemonData({ id: params.slug });
    if (!pokemon?.pokemonData) {
      throw new Error("Pokemon not found");
    }
    return { pokemon: pokemon.pokemonData };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Pokemon data");
  }
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  // getData を呼び出してデータを取得
  const { pokemon } = await getServerPokemonData(params);

  return (
    <main>
      <PokemonSearchDetail pokemonData={pokemon} />
    </main>
  );
}
