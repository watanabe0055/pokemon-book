import { GetTypeListResponse } from "@/app/type/type";

export async function fetchPokemonTypes() {
	const url = process.env.NEXT_PUBLIC_POKEMON_API_PUBLIC + "/type";
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	const getResponseTypeList = res.json() as Promise<GetTypeListResponse>;

	return (await getResponseTypeList).results;
}
