import { XCircle } from "lucide-react";

import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";
import PokemonDetail from "./pokemonDetail";

type ModalContainerProps = {
  isOpen: boolean;
  handleModelClose: () => void;
  pokemonData?: ConvertPokemonUnionSpeciesType;
};

const ModalContainer = ({
  isOpen,
  handleModelClose,
  pokemonData,
}: ModalContainerProps) => {
  if (!pokemonData) return null;

  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 z-50 w-full h-full p-0 m-0 bg-transparent"
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleModelClose}
      />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div
            className="relative w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={handleModelClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <XCircle size={24} />
              </button>
            </div>
            <div className="p-6">
              <PokemonDetail pokemonData={pokemonData} />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModalContainer;
