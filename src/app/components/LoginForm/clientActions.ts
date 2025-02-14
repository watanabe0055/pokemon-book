import { type LoginFormData, loginSchema } from "@/app/lib/validation/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { type MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import type { login, signup } from "./actions";

const clientActions = () => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		mode: "onBlur",
	});

	const onSubmit =
		(action: typeof login | typeof signup) =>
		async (e: MouseEvent<HTMLButtonElement>) => {
			e.preventDefault();
			handleSubmit(async (data) => {
				setIsLoading(true);
				try {
					const formData = new FormData();
					formData.append("email", data.email);
					formData.append("password", data.password);
					await action(formData);
				} catch (error) {
					console.error("認証エラー:", error);
				} finally {
					setIsLoading(false);
				}
			})();
		};

	return {
		isLoading,
		errors,
		register,
		onSubmit,
	};
};

export default clientActions;
