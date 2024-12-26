"use client";

import Image from "next/image";
import { useState } from "react";
import useModel from "./useModel";
import ModalContainer from "../ModalContainer";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import clsx from "clsx";
import TypeList from "../atoms/typeList";

type PokemonIndexProps = {
  pokemonData: Array<ConvertPokemonUnionSpeciesType>;
};

const PokemonIndex = ({ pokemonData }: PokemonIndexProps) => {
  const { isOpen, modelContent, handleModelOpen, handleModelClose } =
    useModel();
  const [hoveredPokemon, setHoveredPokemon] = useState<number | null>(null);

  return (
    <>
      <ModalContainer
        isOpen={isOpen}
        handleModelClose={handleModelClose}
        pokemonData={modelContent}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Pokédex</h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {pokemonData.map((pokemon) => (
            <div
              key={pokemon.id}
              role="button"
              className={clsx(
                "flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300",
                "hover:shadow-xl hover:scale-105",
                "cursor-pointer",
                "border border-gray-200",
                hoveredPokemon === pokemon.id && "bg-gray-100"
              )}
              onClick={() => handleModelOpen(pokemon)}
              onMouseEnter={() => setHoveredPokemon(pokemon.id)}
              onMouseLeave={() => setHoveredPokemon(null)}
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={pokemon.sprites.other.official_artwork.front_default}
                  alt={`${pokemon.name}の画像`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <p className="text-sm text-gray-500 mb-1">
                No. {pokemon.id.toString().padStart(4, "0")}
              </p>
              <p className="text-lg font-semibold text-gray-800 capitalize">
                {pokemon.name}
              </p>
              <TypeList typeList={pokemon.types} fontSize="xs" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonIndex;
