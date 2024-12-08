"use client";

import Image from "next/image";

import useModel from "./useModel";
import ModalContainer from "../ModalContainer";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import clsx from "clsx";

type pokemonDetailType = {
  pokemonData: Array<ConvertPokemonUnionSpeciesType>;
};

const PokemonIndex = ({ pokemonData }: pokemonDetailType) => {
  const { isOpen, modelContent, handleModelOpen, handleModelClose } =
    useModel();

  return (
    <>
      <ModalContainer
        isOpen={isOpen}
        handleModelClose={handleModelClose}
        pokemonData={modelContent}
      />
      <div
        className={clsx(
          "grid",
          "grid-cols-2",
          "gap-4",
          "sm:grid-cols-3",
          "md:grid-cols-6",
          "place-items-center"
        )}
      >
        {pokemonData.map((pokemon) => (
          <div
            key={pokemon.id}
            role="button"
            className={clsx(
              "flex",
              "flex-col",
              "items-center",
              "p-4",
              "bg-white",
              "border",
              "rounded-md",
              "hover:shadow-lg"
            )}
            onClick={() => handleModelOpen(pokemon)}
          >
            <Image
              src={pokemon.sprites.other.official_artwork.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <p className="mt-2 text-gray-600">No:{pokemon.id}</p>
            <p className="text-lg font-semibold">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonIndex;
