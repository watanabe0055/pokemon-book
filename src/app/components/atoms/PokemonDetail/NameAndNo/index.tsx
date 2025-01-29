import clsx from "clsx";

import HeartSvg from "../../HeartSvg/HeartSvg";
import Link from "next/link";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import useModel from "./useModel";

type NameAndNoProps = {
  pokemonData: ConvertPokemonUnionSpeciesType;
};

const NameAndNo = ({ pokemonData }: NameAndNoProps) => {
  const { isFlag, toggleFavorite } = useModel();

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <div className="text-center">
        <p className="text-sm text-gray-500">
          No. {pokemonData.id.toString().padStart(4, "0")}
        </p>
        <h2 className={clsx("text-2xl font-bold")}>
          <Link
            replace
            href={`${pokemonData.id}`}
            className={clsx("hover:text-gray-500")}
            aria-label={`${pokemonData.name}の詳細を表示`}
          >
            {pokemonData.name}
          </Link>
        </h2>
      </div>
      <div
        onClick={() => toggleFavorite(pokemonData.id)}
        className={clsx("cursor-pointer", isFlag && "animate-jello-vertical")}
      >
        <HeartSvg isFavorite={isFlag} />
      </div>
    </div>
  );
};

export default NameAndNo;
