import { TypeDetail } from "@/app/type/pokemon";

const TYPE_MAPPING: Record<string, string> = {
  normal: "ノーマル",
  fighting: "かくとう",
  flying: "ひこう",
  poison: "どく",
  ground: "じめん",
  rock: "いわ",
  bug: "むし",
  ghost: "ゴースト",
  steel: "はがね",
  fire: "ほのお",
  water: "みず",
  grass: "くさ",
  electric: "でんき",
  psychic: "エスパー",
  ice: "こおり",
  dragon: "ドラゴン",
  dark: "あく",
  fairy: "フェアリー",
  stellar: "ステラ",
  unknown: "不明",
};

export const convertTypeWord = (type: TypeDetail): string => {
  if (!type?.name) {
    throw new Error("タイプ名が指定されていません");
  }
  return TYPE_MAPPING[type.name] ?? "不明なタイプ";
};
