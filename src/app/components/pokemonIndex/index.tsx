"use client";

import Image from "next/image";

import useModel from "./useModel";
import ModalContainer from "../ModalContainer";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";

type pokemonDetailType = {
  pokemonData: Array<ConvertPokemonUnionSpeciesType>;
};

const PokemonIndex = ({ pokemonData }: pokemonDetailType) => {
  const { isOpen, modelContent, handleModelOpen, handleModelClose } =
    useModel();

  return (
    <div>
      <ModalContainer
        isOpen={isOpen}
        handleModelClose={handleModelClose}
        pokemonData={modelContent}
      />
      {pokemonData.map((pokemon) => (
        <div
          key={pokemon.id}
          role="button"
          onClick={() => handleModelOpen(pokemon)}
        >
          <Image
            src={pokemon.sprites.other.official_artwork.front_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <p>No:{pokemon.id}</p>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default PokemonIndex;
