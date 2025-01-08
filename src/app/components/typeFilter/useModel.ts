import { typeListPokemonAtom } from "@/app/jotai/pokemon/get";
import { selectedTypePokemonListAtom } from "@/app/jotai/pokemon/reset";
import { fetchPokemonData, fetchPokemonDataByType } from "@/app/lib/fetch";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import { ResultsType } from "@/app/type/type";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useEffect, useState } from "react";

type pokemonTypesProps = {
  typeList: ResultsType[];
};

const useModel = ({ typeList }: pokemonTypesProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const [typeListPokemon, setTypeListPokemonAtom] =
    useAtom(typeListPokemonAtom);

  const [selectedTypePokemonList, setSelectedTypePokemonList] = useAtom(
    selectedTypePokemonListAtom
  );
  const resetPokemonList = useResetAtom(selectedTypePokemonListAtom);

  const handleTypeChange = (typeName: string) => {
    setSelectedTypes((prev) =>
      prev.includes(typeName)
        ? prev.filter((type) => type !== typeName)
        : [...prev, typeName]
    );
  };
  const omitTheTypeWithNoIcons = typeList.filter(
    (type) => type.name !== "stellar" && type.name !== "unknown"
  );

  useEffect(() => {
    if (!selectedTypes[0]) {
      return;
    }

    const fetchData = async () => {
      const data = await fetchPokemonDataByType({ type: selectedTypes[0] });
      if (data.length === 0) {
        return;
      }

      setTypeListPokemonAtom(data.pokemon);
    };

    fetchData();
  }, [selectedTypes[0]]);

  useEffect(() => {
    if (!typeListPokemon) {
      return;
    }
    resetPokemonList();
    // 各ポケモンデータを非同期で取得する
    const promises = typeListPokemon.map((pokemon) =>
      fetchPokemonData({ id: pokemon.pokemon.name })
    );

    Promise.all(promises).then((results) => {
      // 取得したデータのうち、undefined でないものだけを抽出
      const pokemonDataWithoutUndefined = results
        .map((result) => result.pokemonData)
        .filter(
          (data): data is ConvertPokemonUnionSpeciesType => data !== undefined
        );

      // 既存のリストに追加
      setSelectedTypePokemonList((prevList) => [
        ...prevList,
        ...pokemonDataWithoutUndefined,
      ]);
    });
  }, [typeListPokemon, setSelectedTypePokemonList]);

  return { omitTheTypeWithNoIcons, selectedTypes, handleTypeChange };
};

export default useModel;
