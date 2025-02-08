import type { TypeName } from "@/app/type/type";
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
	const iconSize = 40;
	switch (typeName) {
		case "bug":
			return <BugSVG size={iconSize} />;
		case "dark":
			return <DarkSVG size={iconSize} />;
		case "dragon":
			return <DragonSVG size={iconSize} />;
		case "electric":
			return <ElectricSVG size={iconSize} />;
		case "fairy":
			return <FairySVG size={iconSize} />;
		case "fighting":
			return <FightingSVG size={iconSize} />;
		case "fire":
			return <FireSVG size={iconSize} />;
		case "flying":
			return <FlyingSVG size={iconSize} />;
		case "ghost":
			return <GhostSVG size={iconSize} />;
		case "grass":
			return <GrassSVG size={iconSize} />;
		case "ground":
			return <GroundSVG size={iconSize} />;
		case "ice":
			return <IceSVG size={iconSize} />;
		case "normal":
			return <NormalSVG size={iconSize} />;
		case "poison":
			return <PoisonSVG size={iconSize} />;
		case "psychic":
			return <PsychicSVG size={iconSize} />;
		case "rock":
			return <RockSVG size={iconSize} />;
		case "steel":
			return <SteelSVG size={iconSize} />;
		case "water":
			return <WaterSVG size={iconSize} />;

		default:
			return null; // または別のデフォルトアイコンを返す
	}
};

export default TypeIconList;
