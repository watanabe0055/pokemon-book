"use server";

import { createClient } from "@/app/lib/supabase/server";
import { loginSchema } from "@/app/lib/validation/login";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// 共通の認証ロジック
async function handleAuth(
	formData: FormData,
	authAction: "login" | "signup",
): Promise<void> {
	const supabase = await createClient();

	const data = {
		email: String(formData.get("email")),
		password: String(formData.get("password")),
	};

	const result = loginSchema.safeParse(data);
	if (!result.success) {
		redirect("/error?reason=validation");
	}

	const { error } = await (authAction === "login"
		? supabase.auth.signInWithPassword({
				email: data.email,
				password: data.password,
			})
		: supabase.auth.signUp({
				email: data.email,
				password: data.password,
			}));

	if (error) {
		redirect(`/error?reason=${authAction}&message=${error.message}`);
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function login(formData: FormData) {
	return handleAuth(formData, "login");
}

export async function signup(formData: FormData) {
	return handleAuth(formData, "signup");
}
