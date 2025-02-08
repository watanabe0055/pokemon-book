import { favoritePokemonListAtom } from "@/app/jotai/favorit/get";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
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
		(id: number) => {
			setIsFlag((prev) => !prev);

			setFavoritePokemonList((prevList) =>
				prevList.includes(id)
					? prevList.filter((favId) => favId !== id)
					: [...prevList, id],
			);
		},
		[setFavoritePokemonList, setIsFlag],
	);

	useEffect(() => {
		setIsFlag(favoritePokemonList.includes(pokemonData.id));
	}, [pokemonData]);

	console.log(favoritePokemonList);

	return {
		isFlag,
		toggleFavorite,
	};
};

export default useModel;
