import { createClient } from "../supabase/server";

/**
 * userのsessionを取得
 * @returns  session
 */
export const getUserToken = async () => {
	const supabase = await createClient();

	// ユーザー認証情報の取得
	const {
		data: { session },
		error: authError,
	} = await supabase.auth.getSession();

	return { session };
};

type UserInfo = {
	message: string;
	isLoginUser: boolean;
};

/**
 * ユーザー情報の取得
 */
export const fetchUserProfile = async (
	accessToken: string,
): Promise<UserInfo> => {
	console.log(accessToken);
	const baseUrl =
		process.env.NEXT_PUBLIC_POKEMON_API_HONO || "http://localhost:8787";
	const path = `${baseUrl}v1/auth/private/profile`;
	const headers = {
		Authorization: `Bearer ${accessToken}`,
	};

	try {
		const response = await fetch(path, { headers });

		if (!response.ok) {
			if (response.status === 401) {
				throw new Error("認証エラー：ログインが必要です");
			}
			throw new Error("プロフィールの取得に失敗しました");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching profile:", error);
		throw error;
	}
};
