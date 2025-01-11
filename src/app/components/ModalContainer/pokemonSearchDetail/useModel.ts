import { convertFilterJaAbility } from "@/app/lib/convert/convertJa";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import { AbilityObjectResponseType } from "@/app/type/pokemonAbility";

type PokemonDetailProps = {
  pokemon: ConvertPokemonUnionSpeciesType & AbilityObjectResponseType;
};

const useModel = ({ pokemon }: PokemonDetailProps) => {
  const abilityJaFilter = convertFilterJaAbility(pokemon.abilities.names);
  return {
    abilityJaFilter,
  };
};

export default useModel;
