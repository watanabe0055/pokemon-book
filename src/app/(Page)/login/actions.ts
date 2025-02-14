"use server";

import { createClient } from "@/app/lib/supabase/server";
import { loginSchema } from "@/app/lib/validation/login";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
	const supabase = await createClient();

	const data = {
		email: String(formData.get("email")),
		password: String(formData.get("password")),
	};

	// サーバーサイドでもバリデーションを行う
	const result = loginSchema.safeParse(data);
	if (!result.success) {
		redirect("/error");
	}

	const { error } = await supabase.auth.signInWithPassword({
		email: data.email,
		password: data.password,
	});

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signup(formData: FormData) {
	const supabase = await createClient();

	const data = {
		email: String(formData.get("email")),
		password: String(formData.get("password")),
	};

	// サーバーサイドでもバリデーションを行う
	const result = loginSchema.safeParse(data);
	if (!result.success) {
		redirect("/error");
	}

	const { error } = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
	});

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}
