"use client";

import { isLoginUserAtom } from "@/app/jotai/user/get";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

type Props = {
	isLoggedIn: boolean;
};

export default function AuthInitializer({ isLoggedIn }: Props) {
	const setIsLoginUser = useSetAtom(isLoginUserAtom);

	useEffect(() => {
		if (isLoggedIn !== null) {
			setIsLoginUser(isLoggedIn);
		}
	}, [isLoggedIn, setIsLoginUser]);

	return null;
}
