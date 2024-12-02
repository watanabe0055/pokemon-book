import { GetPokemonDataType } from "../type/pokemon";

/**
 * ポケモンの個体単位でのデータをゲットする
 */
export const fetchPokemonData = async (): Promise<GetPokemonDataType> => {
  const path = "http://localhost:8787/v1/pokemon?id=1&status=1";
  const getData = await fetch(path);
  const data: GetPokemonDataType = await getData.json();

  return data;
};
