import type { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";
import type { typePokemonList } from "@/app/type/type";
import { atom } from "jotai";

export const allGetPokemonAtom = atom<GetPokemonDataUnionSpeciesListType>();

/**
 * 選択したタイプ別に名前とurlだけを取得したポケモンリスト
 */
export const typeListPokemonAtom = atom<Array<typePokemonList>>();
