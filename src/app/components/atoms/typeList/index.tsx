import { Types } from "@/app/type/pokemon";
import clsx from "clsx";
import TypeText from "./typeText";

type TypeListProps = {
  typeList: Types;
  fontSize?: "xs" | "sm";
};

const TypeList = ({ typeList, fontSize }: TypeListProps) => {
  return (
    <div className={clsx("flex flex-wrap gap-2 mb-4")}>
      {typeList.map((type) => (
        <span key={type.type.name}>
          <TypeText type={type.type.name} fontSize={fontSize} />
        </span>
      ))}
    </div>
  );
};

export default TypeList;
