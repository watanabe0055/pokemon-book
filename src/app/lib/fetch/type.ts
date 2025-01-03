import { GetTypeListResponse } from "@/app/type/type";

export async function fetchPokemonTypes() {
  const res = await fetch("https://pokeapi.co/api/v2/type");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const getResponseTypeList = res.json() as Promise<GetTypeListResponse>;

  return (await getResponseTypeList).results;
}
