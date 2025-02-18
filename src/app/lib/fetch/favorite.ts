import type { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";

/**
 * ポケモンもお気に入り取得
 */
export const getFavoritePokemon = async (
	token: string,
): Promise<GetPokemonDataUnionSpeciesListType> => {
	const url = `${process.env.NEXT_PUBLIC_POKEMON_API_HONO}v1/favorite`;

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	// ステータスコードをチェック
	if (!res.ok) {
		console.error(`Error: ${res.status} - ${res.statusText}`);
		const text = await res.text(); // レスポンスの内容を確認
		console.error("Response Text:", text);
		return { message: "", pokemonData: [] };
	}

	// JSON 形式でなければエラー
	const contentType = res.headers.get("content-type");
	if (!contentType || !contentType.includes("application/json")) {
		const text = await res.text();
		console.error("Unexpected response:", text);
		throw new Error("Response is not in JSON format");
	}

	const data = (await res.json()) as GetPokemonDataUnionSpeciesListType;

	return data;
};

type postFavoritePokemonObject = {
	token: string;
	pokemonId: number;
};
/**
 * ポケモンのお気に入りを追加する
 */
export const postFavoritePokemon = async ({
	token,
	pokemonId,
}: postFavoritePokemonObject) => {
	const url = `${process.env.NEXT_PUBLIC_POKEMON_API_HONO}v1/favorite`;

	const res = await fetch(url, {
		method: "post",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ pokemonId: pokemonId }),
	});
	const data = await res.json();
	console.log(data);
};
