import { TypeName } from "@/app/type/type";
import BugSVG from "./type/bug";
import DarkSVG from "./type/dark";
import DragonSVG from "./type/dragon";
import ElectricSVG from "./type/electric";
import FairySVG from "./type/fairy";
import FightingSVG from "./type/fighting";
import FireSVG from "./type/fire";
import FlyingSVG from "./type/flying";
import GhostSVG from "./type/ghost";
import GrassSVG from "./type/grass";
import GroundSVG from "./type/ground";
import IceSVG from "./type/ice";
import NormalSVG from "./type/normal";
import PoisonSVG from "./type/poison";
import PsychicSVG from "./type/psychic";
import RockSVG from "./type/rock";
import SteelSVG from "./type/steel";
import WaterSVG from "./type/water";

type TypeIconListProps = {
  typeName: TypeName;
};

/**
 * アイコンを表示する
 */
const TypeIconList = ({ typeName }: TypeIconListProps) => {
  switch (typeName) {
    case "bug":
      return <BugSVG />;
    case "dark":
      return <DarkSVG />;
    case "dragon":
      return <DragonSVG />;
    case "electric":
      return <ElectricSVG />;
    case "fairy":
      return <FairySVG />;
    case "fighting":
      return <FightingSVG />;
    case "fire":
      return <FireSVG />;
    case "flying":
      return <FlyingSVG />;
    case "ghost":
      return <GhostSVG />;
    case "grass":
      return <GrassSVG />;
    case "ground":
      return <GroundSVG />;
    case "ice":
      return <IceSVG />;
    case "normal":
      return <NormalSVG />;
    case "poison":
      return <PoisonSVG />;
    case "psychic":
      return <PsychicSVG />;
    case "rock":
      return <RockSVG />;
    case "steel":
      return <SteelSVG />;
    case "water":
      return <WaterSVG />;

    default:
      return null; // または別のデフォルトアイコンを返す
  }
};

export default TypeIconList;
