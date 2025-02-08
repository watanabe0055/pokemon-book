"use client";

import { ConvertPokemonUnionSpeciesType } from "@/app/type/pokemon";

import { useCallback, useState } from "react";

const useModel = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [modelContent, setModelContent] =
		useState<ConvertPokemonUnionSpeciesType>();

	const handleModelOpen = useCallback(
		(content: ConvertPokemonUnionSpeciesType) => {
			setModelContent(content);
			setIsOpen(true);
		},
		[],
	);

	const handleModelClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return {
		isOpen,
		modelContent,
		handleModelOpen,
		handleModelClose,
	};
};

export default useModel;
