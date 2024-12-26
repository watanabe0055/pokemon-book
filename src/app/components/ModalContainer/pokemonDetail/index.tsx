import { convertStatsWord } from "@/app/lib/convert/stats";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";

import Image from "next/image";
import TypeList from "../../atoms/typeList";

type PokemonDetailProps = {
  pokemonData: ConvertPokemonUnionSpeciesType;
};

const PokemonDetail = ({ pokemonData }: PokemonDetailProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
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
          <h2 className="text-2xl font-bold mt-2">{pokemonData.name}</h2>
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
              <div className="w-2/3 h-4 bg-gray-200 rounded-full overflow-hidden">
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
