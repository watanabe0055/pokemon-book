import type { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import clsx from "clsx";
import Image from "next/image";
import TypeList from "../typeList";

export type PokemonIndexDetailProps = {
	pokemon: ConvertPokemonUnionSpeciesType;
	hoveredPokemon?: number | null;
	handleModelOpen?: (pokemon: ConvertPokemonUnionSpeciesType) => void;
	setHoveredPokemon?: (pokemon: number | null) => void;
};
const PokemonIndexDetail = ({
	pokemon,
	hoveredPokemon,
	handleModelOpen,
	setHoveredPokemon,
}: PokemonIndexDetailProps) => {
	return (
		<div
			role="button"
			tabIndex={0}
			className={clsx(
				"flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300",
				"hover:shadow-xl hover:scale-105",
				"cursor-pointer",
				"border border-gray-200",
				hoveredPokemon === pokemon.id && "bg-gray-100",
				"h-full",
			)}
			onClick={() => handleModelOpen?.(pokemon)}
			onMouseEnter={() => setHoveredPokemon?.(pokemon.id)}
			onMouseLeave={() => setHoveredPokemon?.(null)}
		>
			<div className="relative w-32 h-32 mb-4">
				<Image
					src={pokemon.sprites.other.official_artwork.front_default}
					alt={`${pokemon.name}の画像`}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
					className="transition-transform duration-300 hover:scale-110"
				/>
			</div>
			<p className="mb-1 text-sm text-gray-500">
				No. {pokemon.id.toString().padStart(4, "0")}
			</p>
			<p className="text-lg font-semibold text-gray-800 capitalize">
				{pokemon.name}
			</p>
			<TypeList typeList={pokemon.types} fontSize="xs" />
		</div>
	);
};

export default PokemonIndexDetail;
