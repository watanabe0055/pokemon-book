"use client";

import { login, signup } from "@/app/components/LoginForm/actions";
import clsx from "clsx";
import clientActions from "./clientActions";

export default function LoginForm() {
	const { isLoading, errors, register, onSubmit } = clientActions();

	return (
		<form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
			<div>
				<label
					htmlFor="email"
					className="block mb-1 text-sm font-medium text-gray-600"
				>
					メールアドレス
				</label>
				<input
					{...register("email")}
					type="email"
					className={`w-full px-3 py-2 text-sm transition duration-150 ease-in-out border rounded-md bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 ${
						errors.email ? "border-red-500" : "border-gray-200"
					}`}
					placeholder="you@example.com"
				/>
				{errors.email && (
					<p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
				)}
			</div>

			<div>
				<label
					htmlFor="password"
					className="block mb-1 text-sm font-medium text-gray-600"
				>
					パスワード
				</label>
				<input
					{...register("password")}
					type="password"
					className={`w-full px-3 py-2 text-sm transition duration-150 ease-in-out border rounded-md bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 ${
						errors.password ? "border-red-500" : "border-gray-200"
					}`}
					placeholder="••••••••"
				/>
				{errors.password && (
					<p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
				)}
			</div>

			<div className="flex flex-col space-y-3">
				<button
					type="button"
					onClick={onSubmit(login)}
					disabled={isLoading || !!errors.email || !!errors.password}
					className={clsx(
						"w-full px-4 py-2 font-medium text-blue-800 transition duration-300 ease-in-out bg-blue-200 rounded-md hover:bg-blue-300 disabled:opacity-50",
						"disabled:cursor-not-allowed",
					)}
				>
					{isLoading ? "処理中..." : "ログイン"}
				</button>
				<button
					type="button"
					onClick={onSubmit(signup)}
					disabled={isLoading || !!errors.email || !!errors.password}
					className={clsx(
						"w-full px-4 py-2 font-medium text-pink-800 transition duration-300 ease-in-out bg-pink-200 rounded-md hover:bg-pink-300 disabled:opacity-50",
						"disabled:cursor-not-allowed",
					)}
				>
					{isLoading ? "処理中..." : "新規登録"}
				</button>
			</div>
		</form>
	);
}
