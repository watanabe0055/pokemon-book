"use client";

import PokemonIndexDetail from "@/app/components/atoms/pokemonIndexDetail";
import type { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import { useState } from "react";
import ModalContainer from "../ModalContainer";
import useModel from "./useModel";

type PokemonIndexProps = {
	pokemonData?: Array<ConvertPokemonUnionSpeciesType>;
};

const PokemonIndex = ({ pokemonData }: PokemonIndexProps) => {
	const { isOpen, modelContent, handleModelOpen, handleModelClose } =
		useModel();
	const [hoveredPokemon, setHoveredPokemon] = useState<number | null>(null);

	if (!pokemonData) {
		return null;
	}

	return (
		<>
			<ModalContainer
				isOpen={isOpen}
				handleModelClose={handleModelClose}
				pokemonData={modelContent}
			/>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{pokemonData.map((pokemon) => (
					<div key={pokemon.id} className="h-full">
						<PokemonIndexDetail
							pokemon={pokemon}
							hoveredPokemon={hoveredPokemon}
							handleModelOpen={handleModelOpen}
							setHoveredPokemon={setHoveredPokemon}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default PokemonIndex;
