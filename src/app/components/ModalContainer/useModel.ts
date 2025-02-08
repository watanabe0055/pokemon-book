import { useCallback, useState } from "react";

const useModel = () => {
	const [isOpen, setIsOpen] = useState(true);

	const handleModelClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return {
		isOpen,
		handleModelClose,
	};
};

export default useModel;
