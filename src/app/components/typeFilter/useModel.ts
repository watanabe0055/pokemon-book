import { ResultsType } from "@/app/type/type";

type pokemonTypesProps = {
  typeList: ResultsType[];
};

const useModel = ({ typeList }: pokemonTypesProps) => {
  const omitTheTypeWithNoIcons = typeList.filter(
    (type) => type.name !== "stellar" && type.name !== "unknown"
  );

  return { omitTheTypeWithNoIcons };
};

export default useModel;
