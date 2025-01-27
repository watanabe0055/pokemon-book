import { convertStatsWord } from "@/app/lib/convert/stats";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";

import Image from "next/image";
import TypeList from "../../atoms/typeList";
import Link from "next/link";
import clsx from "clsx";

type PokemonDetailProps = {
  pokemonData: ConvertPokemonUnionSpeciesType;
};

const PokemonDetail = ({ pokemonData }: PokemonDetailProps) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex-1">
        <div className="p-4 text-center bg-gray-100 rounded-lg">
          <Image
            src={pokemonData.sprites.other.official_artwork.front_default}
            alt={`${pokemonData.name}の画像`}
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            No. {pokemonData.id.toString().padStart(4, "0")}
          </p>
          <h2 className={clsx("mt-2 text-2xl font-bold")}>
            <Link
              href={`/pokemon/${pokemonData.id}`}
              className={clsx("hover:text-gray-500")}
              aria-label={`${pokemonData.name}の詳細を表示`}
            >
              {pokemonData.name}
            </Link>
          </h2>
        </div>
      </div>
      <div className="flex-1">
        <TypeList typeList={pokemonData.types} />
        <div className="space-y-2">
          {pokemonData.stats.map((stat) => (
            <div key={stat.stat.name} className="flex items-center">
              <span className="w-1/3 text-sm font-medium text-gray-500">
                {convertStatsWord(stat)}:
              </span>
              <div className="w-2/3 h-4 overflow-hidden bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm font-medium">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
