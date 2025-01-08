import {
  ConvertPokemonUnionSpeciesType,
  GetPokemonDataUnionSpeciesListType,
} from "@/app/type/pokemon";
import { typePokemonList } from "@/app/type/type";
import { atom } from "jotai";

export const allGetPokemonAtom = atom<GetPokemonDataUnionSpeciesListType>();
export const selectedTypePokemonListAtom = atom<
  Array<ConvertPokemonUnionSpeciesType>
>([]);

export const typeListPokemonAtom = atom<Array<typePokemonList>>();
