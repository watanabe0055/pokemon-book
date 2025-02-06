import { createClient } from "@/app/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const handleLogout = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-2xl">
        <h1 className="mb-6 text-3xl font-semibold text-center text-gray-700">
          Welcome Back
        </h1>
        <div className="mb-6 text-center">
          <p className="text-lg text-gray-600">
            Hello,{" "}
            <span className="font-medium text-blue-600">{data.user.email}</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            We re glad to see you here!
          </p>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-gray-50">
            <h2 className="mb-2 text-lg font-medium text-gray-700">
              Your Profile
            </h2>
            <p className="text-sm text-gray-600">
              <strong>ID:</strong> {data.user.id}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Last Sign In:</strong>{" "}
              {data.user.last_sign_in_at
                ? new Date(data.user.last_sign_in_at).toLocaleString()
                : "N/A"}
            </p>
          </div>
          <form action={handleLogout}>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-pink-800 transition duration-300 ease-in-out bg-pink-200 rounded-md hover:bg-pink-300"
            >
              Log out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
