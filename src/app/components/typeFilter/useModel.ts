import { typeListPokemonAtom } from "@/app/jotai/pokemon/get";
import { selectedTypePokemonListAtom } from "@/app/jotai/pokemon/reset";
import { fetchPokemonData, fetchPokemonDataByType } from "@/app/lib/fetch";
import { ConvertPokemonUnionSpeciesType, TypeName } from "@/app/type/pokemon";
import { AbilityListHonoResponseType } from "@/app/type/pokemonAbility";
import { ResultsType } from "@/app/type/type";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useEffect, useMemo, useState } from "react";

type pokemonTypesProps = {
  typeList: ResultsType[];
};

const useModel = ({ typeList }: pokemonTypesProps) => {
  const [selectedTypes, setSelectedTypes] = useState<TypeName[]>([]);

  const [typeListPokemon, setTypeListPokemonAtom] =
    useAtom(typeListPokemonAtom);

  const [selectedTypePokemonList, setSelectedTypePokemonList] = useAtom(
    selectedTypePokemonListAtom
  );
  const resetPokemonList = useResetAtom(selectedTypePokemonListAtom);

  // waterだけも服見たい時はこっち
  // const filteredPokemonList = useMemo(() => {
  //   return selectedTypePokemonList.filter((poke) => {
  //     // poke.types が selectedTypes のみ含む場合にフィルター
  //     const typeNames = poke.types.map((type) => type.type.name);
  //     return typeNames.every((typeName) => selectedTypes.includes(typeName));
  //   });
  // }, [selectedTypePokemonList, selectedTypes]);

  const filteredPokemonList = useMemo(() => {
    return selectedTypePokemonList.filter((poke) => {
      const typeNames = poke.types.map((type) => type.type.name);

      // selectedTypes と完全一致するかチェック
      const hasAllSelectedTypes =
        typeNames.length === selectedTypes.length && // タイプ数が一致
        selectedTypes.every((type) => typeNames.includes(type)); // 全て含む

      return hasAllSelectedTypes;
    });
  }, [selectedTypePokemonList, selectedTypes]);

  // useEffect(() => {
  //   setSelectedTypePokemonList(filteredPokemonList);
  // }, [selectedTypes[1]]);

  const handleTypeChange = (typeName: TypeName) => {
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
      resetPokemonList();
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
          (
            data
          ): data is ConvertPokemonUnionSpeciesType &
            AbilityListHonoResponseType => data !== undefined
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
