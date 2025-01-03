import { ResultsType } from "@/app/type/type";
import TypeText from "../atoms/typeList/typeText";

type pokemonTypesProps = {
  typeList: ResultsType[];
};
const TypeFilter = ({ typeList }: pokemonTypesProps) => {
  console.log(typeList);
  return (
    <>
      {typeList.map((type) => (
        <div key={type.name}>
          <input
            type="checkbox"
            id={type.name}
            name={type.name}
            value={type.name}
          />
          <label key={type.name} htmlFor={type.name}>
            <TypeText type={type.name} />
          </label>
        </div>
      ))}
    </>
  );
};

export default TypeFilter;
