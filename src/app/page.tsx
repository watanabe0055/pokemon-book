import Image from "next/image";
import { fetchAllPokemonData } from "./lib/fetch";

export default async function Home() {
  const pokemonData = await fetchAllPokemonData();

  return (
    <div>
      {pokemonData.pokemonData.map((pokemon) => (
        <div key={pokemon.id}>
          <Image
            src={pokemon.sprites.other.official_artwork.front_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <p>No:{pokemon.id}</p>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}
