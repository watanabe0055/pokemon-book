import Image from "next/image";
import { convertStatsWord } from "@/app/lib/convert/stats";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import TypeList from "../../atoms/typeList";
import { AbilityObjectResponseType } from "@/app/type/pokemonAbility";
import useModel from "./useModel";
import { Typography } from "../../atoms/Typography";
import { Glassmorphism } from "../../atoms/Glassmorphism";

type PokemonDetailProps = {
  pokemonData: ConvertPokemonUnionSpeciesType & AbilityObjectResponseType;
};

const PokemonSearchDetail = ({ pokemonData }: PokemonDetailProps) => {
  const { abilityJaFilter } = useModel({ pokemon: pokemonData });

  return (
    <div className="w-full max-w-4xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <div className="p-8 text-center rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100">
            <Image
              src={pokemonData.sprites.other.official_artwork.front_default}
              alt={`${pokemonData.name}の画像`}
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-gray-500">
              No. {pokemonData.id.toString().padStart(4, "0")}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-800 capitalize">
              {pokemonData.name}
            </h2>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <TypeList typeList={pokemonData.types} />
          </div>
        </div>
      </div>
      <Glassmorphism padding="sm" color="white" border="none">
        <div className="flex-1">
          <div className="mb-4">
            <Typography color="black" weight="bold" variant="h3">
              ステータス
            </Typography>
          </div>
          <div className="space-y-4">
            {pokemonData.stats.map((stat) => (
              <div key={stat.stat.name}>
                <div className="flex items-center justify-between mb-1">
                  <span>
                    <Typography color="muted" variant="p">
                      {convertStatsWord(stat)}
                    </Typography>
                  </span>
                  <span>
                    <Typography color="black" variant="p">
                      {stat.base_stat}
                    </Typography>
                  </span>
                </div>
                <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Glassmorphism>

      <Glassmorphism padding="sm" color="white" border="none">
        <div className="flex-1">
          <Typography color="black" weight="bold" variant="h3">
            特性
          </Typography>
          <ul className="list-none">
            {abilityJaFilter &&
              abilityJaFilter.map((ability) => (
                <li key={ability.name}>
                  <Typography color="black" variant="p">
                    {ability.name}
                  </Typography>
                </li>
              ))}
          </ul>
        </div>
      </Glassmorphism>
    </div>
  );
};

export default PokemonSearchDetail;
