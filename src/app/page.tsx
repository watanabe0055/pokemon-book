import Image from "next/image";
import { fetchPokemonData } from "./lib/fetch";

export default async function Home() {
  const getPokemonData = await fetchPokemonData();
  const { pokemonData } = getPokemonData;
  console.log(pokemonData);

  // const data = await fetchAllPokemonData();
  // console.log(data);

  return (
    <div>
      {pokemonData.sprites.back_default && (
        <Image
          src={pokemonData.sprites.other.official_artwork.front_default}
          alt={pokemonData.sprites.back_default}
          width={100}
          height={100}
        />
      )}
      <p>No:{pokemonData.id}</p>
      <p>{pokemonData.name}</p>
    </div>
  );
}
