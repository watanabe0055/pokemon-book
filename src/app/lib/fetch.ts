import {
  GetPokemonDataListType,
  GetPokemonDataType,
  GetPokemonDataUnionSpeciesListType,
  GetPokemonDataUnionSpeciesType,
} from "../type/pokemon";
import { SpeciesListType } from "../type/pokemonSpecies";
import { GetPokemonDataTypeListUnionType } from "../type/type";

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

type fetchAllPokemonDataProps = {
  offset?: number;
};
/**
 * ポケモンの個体単位でのデータをゲットする
 */
export const fetchAllPokemonData = async ({
  offset = 1,
}: fetchAllPokemonDataProps): Promise<GetPokemonDataUnionSpeciesListType> => {
  const path = `http://localhost:8787/v1/pokemon?offset=${offset}`;
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

/**
 * hono version
 * typeに合致するポケモンのデータをゲットする
 */

export const fetchPokemonDataByType = async ({ type }: { type: string }) => {
  const path = `http://localhost:8787/v1/pokemon-type/${type}`;

  const getPokemonTypeList = await fetch(path);
  const data =
    (await getPokemonTypeList.json()) as GetPokemonDataTypeListUnionType;

  return data;
};

export const convertPokemonNameJa = (names: SpeciesListType): string => {
  // 日本語名を持つ最初の要素を検索
  const jaName = names.find((name) => name.language.name === "ja");

  // 見つかった場合はnameを返し、見つからない場合は空文字を返す
  return jaName?.name ?? "";
};
