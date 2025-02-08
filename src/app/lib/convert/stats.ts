import type { Stat } from "@/app/type/pokemon";

export const convertStatsWord = (stats: Stat) => {
	switch (stats.stat.name) {
		case "hp":
			return "HP";
		case "attack":
			return "攻撃";
		case "defense":
			return "防御";
		case "special-attack":
			return "特攻";
		case "special-defense":
			return "特防";
		case "speed":
			return "素早さ";

		default:
			return "不明なステータス";
	}
};
