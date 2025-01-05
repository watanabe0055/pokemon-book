import { useAtom } from "jotai";
import { useEffect, useState, useCallback } from "react";
import { fetchAllPokemonData } from "../../lib/fetch";
import { allGetPokemonAtom } from "../../jotai/pokemon/get";
import { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";

type UseModelProps = {
  InitialPokemonData: GetPokemonDataUnionSpeciesListType;
};

export const useModel = ({ InitialPokemonData }: UseModelProps) => {
  const [offset, setOffset] = useState(1);
  const [pokemonData, setPokemonData] = useAtom(allGetPokemonAtom);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemonData = useCallback(
    async (currentOffset: number) => {
      const data = await fetchAllPokemonData({ offset: currentOffset });

      setPokemonData((prevData) => {
        if (!prevData) {
          return data;
        }

        if (Array.isArray(prevData.pokemonData)) {
          return {
            ...prevData,
            pokemonData: [...prevData.pokemonData, ...data.pokemonData],
          };
        }

        return prevData;
      });
    },
    [setPokemonData]
  );

  //最初の50件だけはseverサイドで取得してるので、ここでセット
  useEffect(() => {
    setPokemonData(InitialPokemonData);
  }, []);

  const loaderGetPokemon = async () => {
    if (isLoading) return;
    setIsLoading(true);

    const nextOffset = offset + 50;
    setOffset(nextOffset);

    try {
      await fetchPokemonData(nextOffset);
    } finally {
      setIsLoading(false);
    }
  };

  return { pokemonData, loaderGetPokemon };
};
