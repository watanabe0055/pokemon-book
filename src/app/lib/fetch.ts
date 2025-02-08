import type {
	GetPokemonDataListType,
	GetPokemonDataPickUpType,
	GetPokemonDataType,
	GetPokemonDataUnionSpeciesListType,
	GetPokemonDataUnionSpeciesType,
	GetPokemonDataUnionSpeciesTypeByPickUp,
} from "../type/pokemon";
import type { SpeciesListType } from "../type/pokemonSpecies";
import type { GetPokemonDataTypeListUnionType } from "../type/type";

type fetchPokemonDataProps = {
	id: string;
};

/**
 * ポケモンの個体単位でのデータをゲットする
 */
export const fetchPokemonData = async ({
	id,
}: fetchPokemonDataProps): Promise<GetPokemonDataUnionSpeciesType> => {
	const baseUrl =
		process.env.NEXT_PUBLIC_POKEMON_API_HONO || "http://localhost:8787";
	const path = `${baseUrl}v1/pokemon/${id}`; // パス修正 ("/"を追加)

	try {
		const getData = await fetch(path);

		// HTTPエラーのチェック
		if (!getData.ok) {
			return {
				id,
				message: "Failed to fetch data",
				pokemonData: undefined,
			};
		}

		const data: GetPokemonDataType = await getData.json();

		// 必須データの存在チェック
		if (!data?.pokemonData) {
			return {
				id: data?.id || id,
				message: data?.message,
				pokemonData: undefined,
			};
		}

		return {
			id: data.id,
			message: data.message,
			pokemonData: {
				...data.pokemonData,
				name: convertPokemonNameJa(data.pokemonData.names),
			},
		};
	} catch (error) {
		console.error("ポケモンデータの取得中にエラーが発生しました:", error);
		return {
			id,
			message: "An unexpected error occurred",
			pokemonData: undefined,
		};
	}
};

type fetchAllPokemonDataProps = {
	offset?: number;
};
/**
 * ポケモンの個体単位でのデータをゲットする
 */
export const fetchAllPokemonData = async ({
	offset = 1,
}: fetchAllPokemonDataProps): Promise<GetPokemonDataUnionSpeciesListType> => {
	const baseUrl =
		process.env.NEXT_PUBLIC_POKEMON_API_HONO || "http://localhost:8787";
	const path = `${baseUrl}v1/pokemon?offset=${offset}`;

	try {
		const getData = await fetch(path);
		if (!getData.ok) {
			throw new Error("Pokemon not found");
		}

		const data: GetPokemonDataListType = await getData.json();

		// pokemonData配列内の各要素に対して処理を行い、namesを変換
		const updatedPokemonData = data.pokemonData.map((pokemon) => ({
			...pokemon,
			name: convertPokemonNameJa(pokemon.names), // namesを変換
		}));

		return {
			message: data.message,
			pokemonData: updatedPokemonData,
		};
	} catch (error) {
		console.error("ポケモンデータの取得中にエラーが発生しました:", error);
		throw new Error("Failed to fetch Pokemon data");
	}
};

/**
 * hono version
 * typeに合致するポケモンのデータをゲットする
 */

export const fetchPokemonDataByType = async ({ type }: { type: string }) => {
	const baseUrl =
		process.env.NEXT_PUBLIC_POKEMON_API_HONO || "http://localhost:8787";

	const path = `${baseUrl}v1/pokemon-type/${type}`;

	try {
		const response = await fetch(path);
		if (!response.ok) {
			throw new Error(`API error: ${response.status}`);
		}
		const data = (await response.json()) as GetPokemonDataTypeListUnionType;
		return data;
	} catch (error) {
		console.error("ポケモンデータの取得に失敗しました:", error);
		throw error;
	}
};

export const convertPokemonNameJa = (names: SpeciesListType): string => {
	// 日本語名を持つ最初の要素を検索
	const jaName = names.find((name) => name.language.name === "ja");

	// 見つかった場合はnameを返し、見つからない場合は空文字を返す
	return jaName?.name ?? "";
};

export const fetchPokemonDateByPickUp =
	async (): Promise<GetPokemonDataUnionSpeciesTypeByPickUp> => {
		const baseUrl =
			process.env.NEXT_PUBLIC_POKEMON_API_HONO || "http://localhost:8787";
		const path = `${baseUrl}v1/pickup`; // パス修正 ("/"を追加)

		try {
			const getData = await fetch(path);

			// HTTPエラーのチェック
			if (!getData.ok) {
				throw new Error("Pokemon not found");
			}

			const data: GetPokemonDataPickUpType = await getData.json();

			// pokemonDataを変換し、nameプロパティを設定
			const pokemonPickupList = data.pokemonData.map((pokemon) => ({
				...pokemon,
				name: convertPokemonNameJa(pokemon.names), // 日本語名を設定
			}));

			return {
				message: data.message,
				pokemonPickupList,
			};
		} catch (error) {
			console.error("ポケモンデータの取得中にエラーが発生しました:", error);
			throw new Error("Failed to fetch Pokemon data");
		}
	};
