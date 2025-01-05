"use client";

import useScrollDetection from "@/app/lib/scroll";
import { useModel } from "./useModel";
import { Suspense, useEffect } from "react";
import PokemonIndex from "@/app/components/pokemonIndex";
import { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";

const Loader = () => {
  return <div className="py-4 text-center">Loading more Pokémon...</div>;
};

type PokemonIndexPagePartProps = {
  InitialPokemonData: GetPokemonDataUnionSpeciesListType;
};

const PokemonIndexPagePart = ({
  InitialPokemonData,
}: PokemonIndexPagePartProps) => {
  const { pokemonData, loaderGetPokemon } = useModel({ InitialPokemonData });
  const isBottom = useScrollDetection();

  useEffect(() => {
    if (isBottom) {
      loaderGetPokemon();
    }
  }, [isBottom]);

  return (
    <>
      <PokemonIndex pokemonData={pokemonData?.pokemonData} />
      <Suspense fallback={<Loader />}>{isBottom && <Loader />}</Suspense>
    </>
  );
};

export default PokemonIndexPagePart;
