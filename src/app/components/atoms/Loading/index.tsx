import PokemonIndexDetail from "../pokemonIndexDetail";
import { useModel } from "./useModel";

const Loading = () => {
  const { skeletons } = useModel();

  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {skeletons.map((skeleton, index) => (
            <PokemonIndexDetail
              key={index}
              pokemon={{
                id: 0,
                name: "?????",
                names: undefined,
                sprites: {
                  dream_world: {},
                  home: {},
                  other: {
                    official_artwork: {
                      front_default: "/ball.svg",
                      front_shiny: "",
                    },
                  },
                  back_default: null,
                  back_female: null,
                  back_shiny: null,
                  back_shiny_female: null,
                  front_default: null,
                  front_female: null,
                  front_shiny: null,
                  front_shiny_female: null,
                },
                stats: [],
                types: [],
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Loading;
