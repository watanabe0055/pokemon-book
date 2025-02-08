"use client";

import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { isLoginUserAtom } from "@/app/jotai/user/get";

type Props = {
  isLoggedIn: boolean;
};

export default function AuthInitializer({ isLoggedIn }: Props) {
  const setIsLoginUser = useSetAtom(isLoginUserAtom);

  useEffect(() => {
    if (isLoggedIn !== null) {
      setIsLoginUser(isLoggedIn);
    }
  }, [isLoggedIn]);

  return null;
}
