"use client";

import useScrollDetection from "@/app/lib/scroll";
import { Suspense, useEffect } from "react";
import { lazy } from "react";
import { useModel } from "./useModel";
const PokemonIndex = lazy(() => import("@/app/components/pokemonIndex"));
import Loading from "@/app/components/atoms/Loading";
import type { GetPokemonDataUnionSpeciesListType } from "@/app/type/pokemon";

type PokemonIndexPagePartProps = {
	InitialPokemonData: GetPokemonDataUnionSpeciesListType;
};

const PokemonIndexPagePart = ({
	InitialPokemonData,
}: PokemonIndexPagePartProps) => {
	const { pokemonData, loaderGetPokemon, isLoading } = useModel({
		InitialPokemonData,
	});
	const isBottom = useScrollDetection();

	useEffect(() => {
		if (isBottom) {
			loaderGetPokemon();
		}
	}, [isBottom, loaderGetPokemon]);

	return (
		<>
			<div className="container px-4 py-8 mx-auto">
				<Suspense fallback={<Loading />}>
					<PokemonIndex pokemonData={pokemonData?.pokemonData} />
				</Suspense>
				{isLoading && <Loading />}
			</div>
		</>
	);
};

export default PokemonIndexPagePart;
