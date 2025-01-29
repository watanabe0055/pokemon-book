import { atom } from "jotai";
type FavoritePokemonList = Array<number>;

/**
 * お気に入りポケモンのidリスト
 */
export const favoritePokemonListAtom = atom<FavoritePokemonList>([]);
