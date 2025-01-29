import { useState } from "react";

const useModel = () => {
  const [isFlag, setIsFlag] = useState(false);
  return {
    isFlag,
    setIsFlag,
  };
};

export default useModel;
