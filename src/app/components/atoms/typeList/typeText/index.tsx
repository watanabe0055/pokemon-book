import clsx from "clsx";
import React from "react";
import { typeCard } from "../../../ModalContainer/pokemonDetail/variants";
import { convertTypeWord } from "@/app/lib/convert/types";
import { TypeName } from "@/app/type/pokemon";

type TypeNameProps = {
	type: TypeName;
	fontSize?: "xs" | "sm";
};

const TypeText = ({ type, fontSize = "sm" }: TypeNameProps) => {
	return (
		<span
			key={type}
			className={clsx(
				"px-3 py-1 rounded-full  font-medium",
				typeCard({ type: type, fontSize: fontSize }),
			)}
		>
			{convertTypeWord(type)}
		</span>
	);
};

export default TypeText;
