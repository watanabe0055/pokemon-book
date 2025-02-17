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
			setIsFlag((prev) => !prev);

			setFavoritePokemonList((prevList) =>
				prevList.includes(id)
					? prevList.filter((favId) => favId !== id)
					: [...prevList, id],
			);
			if (isFlag) {
				console.log("aaa");
				const { session } = await getClientUserToken();
				if (session) {
					postFavoritePokemon({
						token: session?.access_token,
						pokemonId: id,
					});
				}
			}
		},
		[setFavoritePokemonList, setIsFlag],
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
