export type TypeName =
	| "normal"
	| "fighting"
	| "flying"
	| "poison"
	| "ground"
	| "rock"
	| "bug"
	| "ghost"
	| "steel"
	| "fire"
	| "water"
	| "grass"
	| "electric"
	| "psychic"
	| "ice"
	| "dragon"
	| "dark"
	| "fairy"
	| "stellar"
	| "unknown";

/**
 * typeの型定義
 */
type ResultsType = {
	/**
	 * "normal"
	 */
	name: TypeName;
	/**
	 * "https://pokeapi.co/api/v2/type/1/"
	 */
	url: string;
};

/**
 * @url https://pokeapi.co/api/v2/type
 * typeの型定義
 */
export type GetTypeListResponse = {
	count: number;
	next: string | null;
	previous: string | null;
	results: Array<ResultsType>;
};

/**
 * pokemonの型定義
 */
type PokemonType = {
	name: string;
	url: string;
};
/**
 * ポケモンをタイプをキーにしとくした時
 */
export type typePokemonList = {
	pokemon: PokemonType;
	slot: number;
};

/**
 * タイプをキーにしたポケモンのデータを取得する時の型
 */
export type GetPokemonDataTypeListUnionType = {
	length: number;
	pokemon: Array<typePokemonList>;
};
