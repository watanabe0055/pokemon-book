import { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";
import { typePokemonList } from "@/app/type/type";
import { atom } from "jotai";

export const allGetPokemonAtom = atom<GetPokemonDataUnionSpeciesListType>();

export const typeListPokemonAtom = atom<Array<typePokemonList>>();
