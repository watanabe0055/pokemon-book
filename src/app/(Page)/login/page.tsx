import LoginForm from "@/app/components/LoginForm";

export default function LoginPage() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
			<div className="w-full max-w-md p-8 bg-white shadow-md rounded-2xl">
				<h1 className="mb-6 text-3xl font-semibold text-center text-gray-700">
					Welcome
				</h1>
				<LoginForm />
			</div>
		</div>
	);
}
