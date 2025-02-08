"use client";

import { ResultsType } from "@/app/type/type";
import TypeText from "../atoms/typeList/typeText";
import TypeIconList from "./TypeIconList";
import useModel from "./useModel";
import clsx from "clsx";

type pokemonTypesProps = {
	typeList: ResultsType[];
};

const TypeFilter = ({ typeList }: pokemonTypesProps) => {
	const { omitTheTypeWithNoIcons, selectedTypes, handleTypeChange } = useModel({
		typeList,
	});

	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
			{omitTheTypeWithNoIcons.map((type) => {
				const isDisabled =
					selectedTypes.length === 2 && !selectedTypes.includes(type.name);

				return (
					<div key={type.name} className="relative">
						<input
							type="checkbox"
							id={type.name}
							name={type.name}
							value={type.name}
							checked={selectedTypes.includes(type.name)}
							onChange={() => handleTypeChange(type.name)}
							disabled={isDisabled}
							className="sr-only"
						/>
						<label
							htmlFor={type.name}
							className={clsx(
								"flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer",
								"hover:shadow-lg hover:scale-105",
								"focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500",
								selectedTypes.includes(type.name)
									? "bg-blue-100 border-blue-500 border-2"
									: "bg-white border-gray-200 border",
								isDisabled && "bg-gray-200 cursor-not-allowed opacity-50",
							)}
						>
							<TypeIconList typeName={type.name} />
							<TypeText type={type.name} />
						</label>
					</div>
				);
			})}
		</div>
	);
};

export default TypeFilter;
