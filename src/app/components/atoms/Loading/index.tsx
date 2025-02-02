import PokemonIndexDetailSkeleton from "../PokemonIndexDetailSkelton";
import { useModel } from "./useModel";

const Loading = () => {
  const { skeletons } = useModel();

  return (
    <>
      <div className="py-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {skeletons.map((skeleton, index) => (
            <PokemonIndexDetailSkeleton key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Loading;
