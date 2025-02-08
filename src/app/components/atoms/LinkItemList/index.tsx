import { LINK_LIST } from "@/app/constants";
import Link from "next/link";

const LinkItemList = () => {
  return (
    <>
      {LINK_LIST.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-colors hover:text-indigo-600"
        >
          {item.text}
        </Link>
      ))}
    </>
  );
};

export default LinkItemList;
