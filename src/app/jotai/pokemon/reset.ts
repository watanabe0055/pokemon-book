import type { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import { atomWithReset } from "jotai/utils";

/**
 * 選択したタイプを元にデータをゲットしたポケモンリスト
 */
export const selectedTypePokemonListAtom = atomWithReset<
	Array<ConvertPokemonUnionSpeciesType>
>([]);

/**
 * 選択したタイプを元にデータをゲットしたポケモンリスト
 */
export const selectedTypePokemonFilterListAtom = atomWithReset<
	Array<ConvertPokemonUnionSpeciesType>
>([]);
