import { ResultsType } from "@/app/type/type";
import TypeText from "../atoms/typeList/typeText";
import TypeIconList from "./TypeIconList";
import useModel from "./useModel";

type pokemonTypesProps = {
  typeList: ResultsType[];
};
const TypeFilter = ({ typeList }: pokemonTypesProps) => {
  const { omitTheTypeWithNoIcons } = useModel({ typeList });

  return (
    <>
      {omitTheTypeWithNoIcons.map((type) => (
        <div key={type.name}>
          <input
            type="checkbox"
            id={type.name}
            name={type.name}
            value={type.name}
          />
          <label key={type.name} htmlFor={type.name}>
            <TypeIconList typeName={type.name} />
            <TypeText type={type.name} />
          </label>
        </div>
      ))}
    </>
  );
};

export default TypeFilter;
