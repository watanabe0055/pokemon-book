export type Link = {
	text: string;
	href: string;
};

/**
 * アプリ内のリンクリスト
 */
export const LINK_LIST: Array<Link> = [
	{
		text: "Pokémon List",
		href: "/pokemon",
	},
	{
		text: "Search",
		href: "/pokemon/search",
	},
	{
		text: "Type Filter",
		href: "/pokemon/type",
	},
	{
		text: "Login",
		href: "/login",
	},
	{
		text: "My Page",
		href: "/private",
	},
	{
		text: "Favorite",
		href: "/favorite",
	},
] as const;

export const ROUTES = {
	LOGIN: "/login",
	PRIVATE: "/private",
	FAVORITE: "/favorite",
} as const;
