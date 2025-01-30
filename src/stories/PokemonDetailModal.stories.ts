import type { Meta, StoryObj } from "@storybook/react";
import ModalContainer, {
  ModalContainerProps,
} from "@/app/components/ModalContainer";

// デフォルトエクスポートの設定
const meta: Meta<typeof ModalContainer> = {
  title: "Pokemon/PokemonDetailModal",
  component: ModalContainer,
  parameters: {
    layout: "centered",
  },
};

export default meta;

// Story の型
type Story = StoryObj<typeof ModalContainer>;

// モックデータを定義
const modelPokemonData: ModalContainerProps = {
  isOpen: true,
  handleModelClose: () => console.log("close"),
  pokemonData: {
    id: 1,
    name: "Bulbasaur",
    sprites: {
      other: {
        official_artwork: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          front_shiny: "",
        },
      },
      dream_world: {},
      home: {},
      back_default: null,
      back_female: null,
      back_shiny: null,
      back_shiny_female: null,
      front_default: null,
      front_female: null,
      front_shiny: null,
      front_shiny_female: null,
    },
    stats: [
      { base_stat: 45, effort: 0, stat: { name: "hp", url: "" } },
      { base_stat: 49, effort: 0, stat: { name: "attack", url: "" } },
      { base_stat: 49, effort: 0, stat: { name: "defense", url: "" } },
      { base_stat: 65, effort: 1, stat: { name: "special-attack", url: "" } },
      { base_stat: 65, effort: 0, stat: { name: "special-defense", url: "" } },
      { base_stat: 45, effort: 0, stat: { name: "speed", url: "" } },
    ],
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
    names: undefined,
  },
};

// Story の定義
export const Primary: Story = {
  args: {
    ...modelPokemonData,
  },
};
