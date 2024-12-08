import {
  GetPokemonDataListType,
  GetPokemonDataType,
  GetPokemonDataUnionSpeciesListType,
  GetPokemonDataUnionSpeciesType,
} from "../type/pokemon";
import { SpeciesListType } from "../type/pokemonSpecies";

/**
 * ポケモンの個体単位でのデータをゲットする
 */
export const fetchPokemonData =
  async (): Promise<GetPokemonDataUnionSpeciesType> => {
    const path = "http://localhost:8787/v1/pokemon/1";
    const getData = await fetch(path);
    const data: GetPokemonDataType = await getData.json();

    return {
      id: data.id,
      message: data.message,
      pokemonData: {
        ...data.pokemonData,
        name: convertPokemonNameJa(data.pokemonData.names),
      },
    };
  };

/**
 * ポケモンの個体単位でのデータをゲットする
 */
export const fetchAllPokemonData =
  async (): Promise<GetPokemonDataUnionSpeciesListType> => {
    const path = "http://localhost:8787/v1/pokemon";
    const getData = await fetch(path);
    const data: GetPokemonDataListType = await getData.json();

    // pokemonData配列内の各要素に対して処理を行い、namesを変換
    const updatedPokemonData = data.pokemonData.map((pokemon) => ({
      ...pokemon,
      name: convertPokemonNameJa(pokemon.names), // namesを変換
    }));

    return {
      message: data.message,
      pokemonData: updatedPokemonData,
    };
  };

export const convertPokemonNameJa = (names: SpeciesListType): string => {
  // 日本語名を持つ最初の要素を検索
  const jaName = names.find((name) => name.language.name === "ja");

  // 見つかった場合はnameを返し、見つからない場合は空文字を返す
  return jaName?.name ?? "";
};
