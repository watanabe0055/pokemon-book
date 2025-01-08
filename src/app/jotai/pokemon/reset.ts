import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import { atomWithReset } from "jotai/utils";

/**
 * 選択したタイプを元にデータをゲットしたポケモンリスト
 */
export const selectedTypePokemonListAtom = atomWithReset<
  Array<ConvertPokemonUnionSpeciesType>
>([]);
