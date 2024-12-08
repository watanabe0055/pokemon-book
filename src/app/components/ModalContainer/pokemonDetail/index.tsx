import { convertStatsWord } from "@/app/lib/convert/stats";
import { convertTypeWord } from "@/app/lib/convert/types";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import Image from "next/image";

type pokemonDetailType = {
  pokemonData: ConvertPokemonUnionSpeciesType;
};

const PokemonDetail = ({ pokemonData }: pokemonDetailType) => {
  return (
    <>
      <p>{pokemonData.id}</p>
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
          alt={`${pokemonData.sprites.back_default}の画像`}
          width={100}
          height={100}
        />
      )}
    </>
  );
};

export default PokemonDetail;
