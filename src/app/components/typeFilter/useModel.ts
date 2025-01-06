import { typeListPokemonAtom } from "@/app/jotai/pokemon/get";
import { fetchPokemonData, fetchPokemonDataByType } from "@/app/lib/fetch";
import { ResultsType } from "@/app/type/type";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

type pokemonTypesProps = {
  typeList: ResultsType[];
};

const useModel = ({ typeList }: pokemonTypesProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [typeListPokemon, setTypeListPokemonAtom] =
    useAtom(typeListPokemonAtom);

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

    typeListPokemon.map((pokemon) => {
      Promise.all([fetchPokemonData({ id: pokemon.pokemon.name })]).then(
        (res) => {
          // console.log(res);
        }
      );
    });
  }, [typeListPokemon]);

  return { omitTheTypeWithNoIcons, selectedTypes, handleTypeChange };
};

export default useModel;
