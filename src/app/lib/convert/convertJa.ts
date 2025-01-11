import { namesType } from "@/app/type/pokemonAbility";

export const convertFilterJaAbility = (names: namesType) => {
  const JaWord = names.filter((name) => {
    if (name.language.name === "ja") {
      return name.name;
    }
  });

  return JaWord;
};
