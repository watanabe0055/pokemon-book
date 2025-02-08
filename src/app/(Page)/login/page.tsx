import { login, signup } from "./actions";

export default function LoginPage() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
			<div className="w-full max-w-md p-8 bg-white shadow-md rounded-2xl">
				<h1 className="mb-6 text-3xl font-semibold text-center text-gray-700">
					Welcome
				</h1>
				<form className="space-y-5">
					<div>
						<label
							htmlFor="email"
							className="block mb-1 text-sm font-medium text-gray-600"
						>
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							className="w-full px-3 py-2 text-sm transition duration-150 ease-in-out border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
							placeholder="you@example.com"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-1 text-sm font-medium text-gray-600"
						>
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							required
							className="w-full px-3 py-2 text-sm transition duration-150 ease-in-out border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
							placeholder="••••••••"
						/>
					</div>
					<div className="flex flex-col space-y-3">
						<button
							formAction={login}
							className="w-full px-4 py-2 font-medium text-blue-800 transition duration-300 ease-in-out bg-blue-200 rounded-md hover:bg-blue-300"
						>
							Log in
						</button>
						<button
							formAction={signup}
							className="w-full px-4 py-2 font-medium text-pink-800 transition duration-300 ease-in-out bg-pink-200 rounded-md hover:bg-pink-300"
						>
							Sign up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
