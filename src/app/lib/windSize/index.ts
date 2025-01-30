import { useLayoutEffect, useState } from "react";

type WindowReturnType = {
  width: number;
  height: number;
};
/**
 * windowサイズを取得する
 * @returns
 */
export const useWindowSize = (): WindowReturnType => {
  const [size, setSize] = useState<WindowReturnType>({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
