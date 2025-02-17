"use client";

import { createClient } from "../../supabase/client";

/**
 * userのsessionを取得
 * @returns  session
 */
export const getClientUserToken = async () => {
	const supabase = createClient();

	// ユーザー認証情報の取得
	const {
		data: { session },
		error: authError,
	} = await supabase.auth.getSession();

	return { session };
};
