import PokemonIndexDetail, {
  PokemonIndexDetailProps,
} from "@/app/components/atoms/pokemonIndexDetail";
import type { Meta, StoryObj } from "@storybook/react";

// デフォルトエクスポートの設定
const meta: Meta<typeof PokemonIndexDetail> = {
  title: "Pokemon/PokemonDetail",
  component: PokemonIndexDetail,
  parameters: {
    layout: "centered",
  },
};

export default meta;

// Story の型
type Story = StoryObj<typeof PokemonIndexDetail>;

// モックデータを定義
const modelPokemonData: PokemonIndexDetailProps = {
  pokemon: {
    id: 1,
    names: [
      {
        language: {
          name: "ja-Hrkt",
          url: "https://pokeapi.co/api/v2/language/1/",
        },
        name: "フシギダネ",
      },
      {
        language: {
          name: "roomaji",
          url: "https://pokeapi.co/api/v2/language/2/",
        },
        name: "Fushigidane",
      },
      {
        language: {
          name: "ko",
          url: "https://pokeapi.co/api/v2/language/3/",
        },
        name: "이상해씨",
      },
      {
        language: {
          name: "zh-Hant",
          url: "https://pokeapi.co/api/v2/language/4/",
        },
        name: "妙蛙種子",
      },
      {
        language: {
          name: "fr",
          url: "https://pokeapi.co/api/v2/language/5/",
        },
        name: "Bulbizarre",
      },
      {
        language: {
          name: "de",
          url: "https://pokeapi.co/api/v2/language/6/",
        },
        name: "Bisasam",
      },
      {
        language: {
          name: "es",
          url: "https://pokeapi.co/api/v2/language/7/",
        },
        name: "Bulbasaur",
      },
      {
        language: {
          name: "it",
          url: "https://pokeapi.co/api/v2/language/8/",
        },
        name: "Bulbasaur",
      },
      {
        language: {
          name: "en",
          url: "https://pokeapi.co/api/v2/language/9/",
        },
        name: "Bulbasaur",
      },
      {
        language: {
          name: "ja",
          url: "https://pokeapi.co/api/v2/language/11/",
        },
        name: "フシギダネ",
      },
      {
        language: {
          name: "zh-Hans",
          url: "https://pokeapi.co/api/v2/language/12/",
        },
        name: "妙蛙种子",
      },
    ],
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_female: null,
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      back_shiny_female: null,
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female: null,
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      front_shiny_female: null,
      other: {
        official_artwork: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
        },
      },
      dream_world: {},
      home: {},
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    name: "フシギダネ",
  },
  hoveredPokemon: null,
  handleModelOpen: () => console.log("open"),
  setHoveredPokemon: () => console.log("hover"),
};

const modelNotFoundPokemonData: PokemonIndexDetailProps = {
  pokemon: {
    id: 0,
    names: [
      {
        language: {
          name: "ja-Hrkt",
          url: "https://pokeapi.co/api/v2/language/1/",
        },
        name: "?????",
      },
    ],
    sprites: {
      back_default: "",
      back_female: null,
      back_shiny: "",
      back_shiny_female: null,
      front_default: "",
      front_female: null,
      front_shiny: "",
      front_shiny_female: null,
      other: {
        official_artwork: {
          front_default: "/ball.svg",
          front_shiny: "",
        },
      },
      dream_world: {},
      home: {},
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "unknown",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "unknown",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    name: "?????",
  },
  hoveredPokemon: null,
  handleModelOpen: () => console.log("open"),
  setHoveredPokemon: () => console.log("hover"),
};

// Story の定義
export const Pokemon: Story = {
  args: {
    ...modelPokemonData,
  },
};

export const NotPokemon: Story = {
  args: {
    ...modelNotFoundPokemonData,
  },
};
