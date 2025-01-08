"use client";

import { selectedTypePokemonListAtom } from "@/app/jotai/pokemon/reset";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import { useAtomValue } from "jotai";
import { useCallback, useState } from "react";

const useModel = () => {
  const selectedTypePokemonList = useAtomValue(selectedTypePokemonListAtom);

  const [isOpen, setIsOpen] = useState(false);
  const [modelContent, setModelContent] =
    useState<ConvertPokemonUnionSpeciesType>();

  const handleModelOpen = useCallback(
    (content: ConvertPokemonUnionSpeciesType) => {
      setModelContent(content);
      setIsOpen(true);
    },
    []
  );

  const handleModelClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    modelContent,
    handleModelOpen,
    handleModelClose,
    selectedTypePokemonList,
  };
};

export default useModel;
