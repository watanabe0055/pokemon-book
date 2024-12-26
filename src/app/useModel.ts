import { useAtom } from "jotai";
import { useEffect, useState, useCallback } from "react";
import { fetchAllPokemonData } from "./lib/fetch";
import { allGetPokemonAtom } from "./jotai/pokemon/get";

export const useModel = () => {
  const [offset, setOffset] = useState(1); // 初期値を1
  const [pokemonData, setPokemonData] = useAtom(allGetPokemonAtom);
  const [isLoading, setIsLoading] = useState(false); // 重複リクエスト防止用

  // ポケモンデータを取得する汎用関数
  const fetchPokemonData = useCallback(
    async (currentOffset: number) => {
      try {
        const data = await fetchAllPokemonData({ offset: currentOffset });

        // データを結合
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
      } catch (error) {
        console.error("Failed to load Pokémon data:", error);
      } finally {
        setIsLoading(false); // ロード終了
      }
    },
    [setPokemonData]
  );

  // 初回ロード
  useEffect(() => {
    fetchPokemonData(offset);
  }, []);

  // 追加ロード
  const loaderGetPokemon = () => {
    if (isLoading) return; // 重複リクエスト防止
    setIsLoading(true);

    const nextOffset = offset + 50; // 最新の offset を計算
    setOffset(nextOffset); // 状態を更新
    fetchPokemonData(nextOffset); // 最新の offset でデータを取得
  };

  return { pokemonData, loaderGetPokemon };
};
