import { TypeDetail } from "@/app/type/pokemon";

export const convertTypeWord = (type: TypeDetail) => {
  switch (type.name) {
    case "normal":
      return "ノーマル";
    case "fighting":
      return "かくとう";
    case "flying":
      return "ひこう";
    case "poison":
      return "どく";
    case "ground":
      return "じめん";
    case "rock":
      return "いわ";
    case "bug":
      return "むし";
    case "ghost":
      return "ゴースト";
    case "steel":
      return "はがね";
    case "fire":
      return "ほのお";
    case "water":
      return "みず";
    case "grass":
      return "くさ";
    case "electric":
      return "でんき";
    case "psychic":
      return "エスパー";
    case "ice":
      return "こおり";
    case "dragon":
      return "ドラゴン";
    case "dark":
      return "あく";
    case "fairy":
      return "フェアリー";
    case "stellar":
      return "ステラ";
    case "unknown":
      return "不明";

    default:
      break;
  }
};
