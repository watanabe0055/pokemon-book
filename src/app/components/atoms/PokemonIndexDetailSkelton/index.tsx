import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * ポケモン一覧に表示しているポケモンデータのスケルトンタイプ
 */
const PokemonIndexDetailSkeleton = () => {
	return (
		<div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 h-full border border-gray-200">
			<div className="relative w-32 h-32 mb-4">
				<Skeleton circle height={128} width={128} />
			</div>
			<p className="mb-1 text-sm text-gray-500">
				<Skeleton width={60} />
			</p>
			<p className="text-lg font-semibold text-gray-800">
				<Skeleton width={100} />
			</p>
			<div className="flex gap-2 mt-2">
				<Skeleton width={50} height={20} />
				<Skeleton width={50} height={20} />
			</div>
		</div>
	);
};

export default PokemonIndexDetailSkeleton;
