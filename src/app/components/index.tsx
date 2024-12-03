// import Image from "next/image";
// import { fetchPokemonData } from "./lib/fetch";
// import { convertStatsWord } from "./lib/convert/stats";
// import { convertTypeWord } from "./lib/convert/types";

export default function Home() {
  // const data = await fetchAllPokemonData();
  // console.log(data);

  return (
    <div>
      {/* <p>{pokemonData.id}</p>
      <p>{pokemonData.name}</p>
      {pokemonData.types.map((type) => (
        <p key={type.type.name}>{convertTypeWord(type.type)}</p>
      ))}
      {pokemonData.stats.map((stat) => (
        <p key={stat.stat.name + stat.base_stat}>
          {convertStatsWord(stat)}:{stat.base_stat}
        </p>
      ))}
      {pokemonData.sprites.back_default && (
        <Image
          src={pokemonData.sprites.other.official_artwork.front_default}
          alt={pokemonData.sprites.back_default}
          width={100}
          height={100}
        />
      )} */}
    </div>
  );
}
