import { atom } from "jotai";

/**
 * ユーザーのログイン状態を管理するatom
 */
export const isLoginUserAtom = atom<boolean>(false);
