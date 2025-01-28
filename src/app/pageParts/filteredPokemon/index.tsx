"use client";

import PokemonIndex from "@/app/components/pokemonIndex";
import { selectedTypePokemonFilterListAtom } from "@/app/jotai/pokemon/reset";
import { useAtomValue } from "jotai";

const FilteredPokemonList = () => {
  const selectedTypePokemonList = useAtomValue(
    selectedTypePokemonFilterListAtom
  );

  return <PokemonIndex pokemonData={selectedTypePokemonList} />;
};

export default FilteredPokemonList;
