import { useAtom } from "jotai";
import { useEffect } from "react";
import { fetchAllPokemonData } from "./lib/fetch";
import { allGetPokemonAtom } from "./jotai/pokemon/get";

export const useModel = () => {
  const [pokemonData, setPokemonData] = useAtom(allGetPokemonAtom);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllPokemonData();
      setPokemonData(data);
    };
    fetchData();
  }, [setPokemonData]);

  return { pokemonData };
};
