import Link from "next/link";
import Image from "next/image";

type PickUpPokemonProps = {
  pokemonList: {
    id?: number;
    name?: string;
    image?: string;
  }[]; // 配列として定義
};

const PickUpPokemon = ({ pokemonList }: PickUpPokemonProps) => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
        注目のポケモン
      </h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {pokemonList.map((pokemon) => (
          <Link href={`pokemon/${pokemon.id}`} key={pokemon.id}>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
              <Image
                src={pokemon.image || ""}
                alt={`注目のポケモン ${pokemon.name}`}
                width={200}
                height={200}
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">{pokemon.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PickUpPokemon;
