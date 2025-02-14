// import { useAtomValue } from "jotai";

import type { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";

// /**
//  * ポケモンもお気に入り追加
//  */
// export const postFavoritePokemon = async () => {
// 	const favoritePokemonList = useAtomValue(favoritePokemonListAtom);

// 	const url = `${process.env.NEXT_PUBLIC_POKEMON_API_PUBLIC}/favorite`;

// 	const res = await fetch(url, {
// 		method: "post",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ favoritePokemonList }),
// 	});
// 	const data = await res.json();
// 	console.log(data);
// };

/**
 * ポケモンもお気に入り取得
 */
export const getFavoritePokemon = async () => {
	const url = `${process.env.NEXT_PUBLIC_POKEMON_API_HONO}v1/favorite`;

	const res = await fetch(url, {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InAxNHRXdU00Wk5wNk9NVEkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2tzaGpjZ2pienZ3a2ZmdWNxeHVmLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI2NTdmM2Y3MS1lY2NmLTQ4YzctODM3Yy1iYmZhMDEzY2IzODIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM5NTc2MTcyLCJpYXQiOjE3Mzk1NzI1NzIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiNjU3ZjNmNzEtZWNjZi00OGM3LTgzN2MtYmJmYTAxM2NiMzgyIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3Mzg3NDE0NjN9XSwic2Vzc2lvbl9pZCI6IjNjOTRkZGMyLTUwMTAtNGJjNS05ODZmLWY1NDYwYTE3MGJiOSIsImlzX2Fub255bW91cyI6ZmFsc2V9.iJE6prmXb1xMaUk679ZfMWEw4G6WtNqT8aMAWE3-pDE",
		},
	});

	// ステータスコードをチェック
	if (!res.ok) {
		console.error(`Error: ${res.status} - ${res.statusText}`);
		const text = await res.text(); // レスポンスの内容を確認
		console.error("Response Text:", text);
		throw new Error(`Failed to fetch: ${res.status} - ${text}`);
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
