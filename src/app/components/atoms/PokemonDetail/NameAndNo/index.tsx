import clsx from "clsx";

import type { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import Link from "next/link";
import HeartSvg from "../../HeartSvg/HeartSvg";
import useModel from "./useModel";

type NameAndNoProps = {
	pokemonData: ConvertPokemonUnionSpeciesType;
};

const NameAndNo = ({ pokemonData }: NameAndNoProps) => {
	const { isFlag, toggleFavorite } = useModel({ pokemonData });

	return (
		<div className="flex items-center justify-center gap-2 mt-4">
			<div className="text-center">
				<p className="text-sm text-gray-500">
					No. {pokemonData.id.toString().padStart(4, "0")}
				</p>
				<h2 className={clsx("text-2xl font-bold")}>
					<Link
						replace
						href={`/pokemon/${pokemonData.id}`}
						className={clsx("hover:text-gray-500")}
						aria-label={`${pokemonData.name}の詳細を表示`}
					>
						{pokemonData.name}
					</Link>
				</h2>
			</div>
			<button
				type="button"
				onClick={() => toggleFavorite(pokemonData.id)}
				className={clsx("cursor-pointer", isFlag && "animate-jello-vertical")}
				aria-label={`${pokemonData.name}をお気に入り${
					isFlag ? "から削除" : "に追加"
				}`}
			>
				<HeartSvg isFavorite={isFlag} />
			</button>
		</div>
	);
};

export default NameAndNo;
