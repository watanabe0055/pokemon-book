"use client";

import useScrollDetection from "@/app/lib/scroll";
import { useModel } from "./useModel";
import { Suspense, useEffect } from "react";
import PokemonIndex from "@/app/components/pokemonIndex";
import { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";
import Loading from "@/app/components/atoms/Loading";

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
      <Suspense fallback={<Loading />}>{isBottom && <Loading />}</Suspense>
    </>
  );
};

export default PokemonIndexPagePart;
