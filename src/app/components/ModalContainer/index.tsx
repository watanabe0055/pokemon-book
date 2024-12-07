import clsx from "clsx";
import PokemonDetail from "./pokemonDetail";
import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";

type ModalContainerProps = {
  isOpen: boolean;
  handleModelClose: () => void;
  pokemonData?: ConvertPokemonUnionSpeciesType; // 型を適切に設定してください
};

const ModalContainer = ({
  isOpen,
  handleModelClose,
  pokemonData,
}: ModalContainerProps) => {
  if (!pokemonData) return null;

  return (
    <dialog open={isOpen}>
      <div
        className={clsx(
          "fixed",
          "inset-0",
          "flex",
          "items-center",
          "justify-center",
          "bg-black/30"
        )}
      >
        <div
          className={clsx(
            "bg-white/35",
            "rounded-lg",
            "shadow-md",
            "shadow-black/10",
            "backdrop-blur-lg",
            "border",
            "border-white/5",
            "p-6",
            "w-[80%]"
          )}
        >
          <button onClick={handleModelClose}>
            <h4>閉じる</h4>
          </button>
          <PokemonDetail pokemonData={pokemonData} />
        </div>
      </div>
    </dialog>
  );
};

export default ModalContainer;
