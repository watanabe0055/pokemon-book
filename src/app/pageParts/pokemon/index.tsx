"use client";

import useScrollDetection from "@/app/lib/scroll";
import { useModel } from "./useModel";
import { Suspense, useEffect } from "react";
import { lazy } from "react";
const PokemonIndex = lazy(() => import("@/app/components/pokemonIndex"));
import { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";
import Loading from "@/app/components/atoms/Loading";

type PokemonIndexPagePartProps = {
  InitialPokemonData: GetPokemonDataUnionSpeciesListType;
};

const PokemonIndexPagePart = ({
  InitialPokemonData,
}: PokemonIndexPagePartProps) => {
  const { pokemonData, loaderGetPokemon, isLoading } = useModel({
    InitialPokemonData,
  });
  const isBottom = useScrollDetection();

  useEffect(() => {
    if (isBottom) {
      loaderGetPokemon();
    }
  }, [isBottom]);

  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <Suspense fallback={<Loading />}>
          <PokemonIndex pokemonData={pokemonData?.pokemonData} />
        </Suspense>
        {isLoading && <Loading />}
      </div>
    </>
  );
};

export default PokemonIndexPagePart;
