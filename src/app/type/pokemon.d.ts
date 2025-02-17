import type { AbilityListHonoResponseType } from "@/app/type/pokemonAbility";
// 定義: 通常のスプライトの型
type Sprite = string | null;

// 定義: official-artwork の型
interface OfficialArtwork {
	front_default: string;
	front_shiny: string;
}

// 定義: other の型
interface SpritesType {
	dream_world: Record<string, unknown>;
	home: Record<string, unknown>;
	other: { official_artwork: OfficialArtwork };
	back_default: Sprite;
	back_female: Sprite;
	back_shiny: Sprite;
	back_shiny_female: Sprite;
	front_default: Sprite;
	front_female: Sprite;
	front_shiny: Sprite;
	front_shiny_female: Sprite;
}

// 定義: 各statの詳細型
interface StatDetail {
	name: string;
	url: string;
}

// 定義: stats配列内の要素型
export interface Stat {
	base_stat: number;
	effort: number;
	stat: StatDetail;
}

// 定義: stats配列全体型
export type StatsType = Stat[];

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

// 定義: 各typeの詳細型
interface TypeDetail {
	name: TypeName;
	url: string;
}

// 定義: types配列内の要素型
interface PokemonType {
	slot: number;
	type: TypeDetail;
}

// 定義: types配列全体型
type Types = PokemonType[];

// TODO: 不足部分がある（オブジェクト系）
export type PokemonDataType = {
	id: number;
	weight: number;
	height: number;
	baseExperience: number;
	is_default: boolean;
	name: string;
	order: number;
	locationAreaEncounters: string;
	sprites: SpritesType;
	stats: StatsType;
	types: Types;
};

/**
 * コンバートして必要なところだけ抽出した型定義
 */
export type ConvertPokemonDataType = {
	id: number;
	names: PokemonSpecies;
	sprites: SpritesType;
	stats: StatsType;
	types: Types;
};

type ResponseMessage = string;
type RequestId = string;

export type GetPokemonDataPickUpType = {
	message: ResponseMessage;
	pokemonData: Array<ConvertPokemonDataType & AbilityListHonoResponseType>;
};

export type GetPokemonDataType = {
	id: RequestId;
	message: ResponseMessage;
	pokemonData: ConvertPokemonDataType & AbilityListHonoResponseType;
};

export type GetPokemonDataListType = {
	id: RequestId;
	message: ResponseMessage;
	pokemonData: Array<ConvertPokemonDataType>;
};

export type GetPokemonDataUnionSpeciesType = {
	id: RequestId;
	message: ResponseMessage;
	pokemonData?: ConvertPokemonUnionSpeciesType & AbilityListHonoResponseType;
};

export type GetPokemonDataUnionSpeciesTypeByPickUp = {
	message: ResponseMessage;
	pokemonPickupList?: Array<
		ConvertPokemonUnionSpeciesType & AbilityListHonoResponseType
	>;
};

/**
 * ポケモンの名前を取得して、日本語名だけ追加した型定義（フロントエンドでコンバートしたもの）
 */
export type ConvertPokemonUnionSpeciesType = {
	id: number;
	name: string;
	names: PokemonSpecies;
	sprites: SpritesType;
	stats: StatsType;
	types: Types;
};

/**
 * ポケモン一覧を取得した型定義
 * TODO: NewGetPokemonDataUnionSpeciesListTypeが正しい
 */
export type GetPokemonDataUnionSpeciesListType = {
	message: ResponseMessage;
	pokemonData: Array<ConvertPokemonUnionSpeciesType>;
};
