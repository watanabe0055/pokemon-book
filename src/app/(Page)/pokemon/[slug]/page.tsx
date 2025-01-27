import PokemonSearchDetail from "@/app/components/ModalContainer/pokemonSearchDetail";
import { fetchPokemonData } from "@/app/lib/fetch";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getServerPokemonData(slug: string) {
  try {
    const pokemon = await fetchPokemonData({ id: slug });
    if (!pokemon?.pokemonData) {
      throw new Error("Pokemon not found");
    }
    return { pokemon: pokemon.pokemonData };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Pokemon data");
  }
}

export default async function Article({ params }: Props) {
  const { slug } = await params;
  // getData を呼び出してデータを取得
  const { pokemon } = await getServerPokemonData(slug);

  return (
    <main>
      <PokemonSearchDetail pokemonData={pokemon} />
    </main>
  );
}
