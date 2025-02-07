"use client";

import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { isLoginUserAtom } from "@/app/jotai/user/get";
import { fetchAuthState } from "./useModel";

export default function AuthInitializer() {
  const setIsLoginUser = useSetAtom(isLoginUserAtom);

  useEffect(() => {
    const initAuth = async () => {
      const isLoggedIn = await fetchAuthState();
      if (isLoggedIn !== null) {
        setIsLoginUser(isLoggedIn);
      }
    };

    initAuth();
  }, [setIsLoginUser]);

  return null;
}
