import { favoritePokemonListAtom } from "@/app/jotai/favorit/get";
import { postFavoritePokemon } from "@/app/lib/fetch/favorite";
import { getClientUserToken } from "@/app/lib/fetch/user/client";
import type { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";

type useModelProps = {
	pokemonData: ConvertPokemonUnionSpeciesType;
};

const useModel = ({ pokemonData }: useModelProps) => {
	const [isFlag, setIsFlag] = useState(false);
	const [favoritePokemonList, setFavoritePokemonList] = useAtom(
		favoritePokemonListAtom,
	);

	const toggleFavorite = useCallback(
		async (id: number) => {
			// 現在の状態を取得
			const willBeFavorite = !isFlag;

			// 状態を更新
			setIsFlag(willBeFavorite);

			// お気に入りに追加する場合のみAPIを呼び出す
			if (willBeFavorite) {
				const { session } = await getClientUserToken();
				if (session) {
					await postFavoritePokemon({
						token: session?.access_token,
						pokemonId: id,
					});
				}
			}

			setFavoritePokemonList((prevList) =>
				prevList.includes(id)
					? prevList.filter((favId) => favId !== id)
					: [...prevList, id],
			);
		},
		[setFavoritePokemonList, isFlag],
	);

	useEffect(() => {
		setIsFlag(favoritePokemonList.includes(pokemonData.id));
	}, [pokemonData]);

	return {
		isFlag,
		toggleFavorite,
	};
};

export default useModel;
