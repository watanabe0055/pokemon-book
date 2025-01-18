import PokemonSearchDetail from "@/app/components/ModalContainer/pokemonSearchDetail";
import { fetchPokemonData } from "@/app/lib/fetch";

async function getServerPokemonData(params: { slug: string }) {
  const pokemon = await fetchPokemonData({ id: params.slug });

  return { pokemon: pokemon.pokemonData };
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
