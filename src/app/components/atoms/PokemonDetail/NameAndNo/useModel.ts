import { favoritePokemonListAtom } from "@/app/jotai/favorit/get";
import { useAtom } from "jotai";
import { useCallback, useState } from "react";

const useModel = () => {
  const [isFlag, setIsFlag] = useState(false);
  const [favoritePokemonList, setFavoritePokemonList] = useAtom(
    favoritePokemonListAtom
  );

  const toggleFavorite = useCallback(
    (id: number) => {
      setIsFlag((prev) => !prev);

      setFavoritePokemonList((prevList) =>
        prevList.includes(id)
          ? prevList.filter((favId) => favId !== id)
          : [...prevList, id]
      );
    },
    [setFavoritePokemonList]
  );

  return {
    isFlag,
    toggleFavorite,
  };
};

export default useModel;
