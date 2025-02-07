import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 - ページが見つかりません",
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div>
          <h1 className="mb-2 text-6xl font-extrabold text-gray-900">404</h1>
          <h2 className="mb-4 text-3xl font-bold text-gray-700">
            ページが見つかりません
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
        </div>
        <div className="flex justify-center mb-8">
          <Image
            src="/gemini_pokemon_notfound.jpeg"
            alt="困惑したピカチュウ"
            className="object-contain rounded-lg"
            width={128}
            height={128}
          />
        </div>
        <Link
          href="/"
          className="inline-block px-6 py-3 font-bold text-gray-900 transition duration-300 ease-in-out transform bg-yellow-400 rounded-lg hover:bg-yellow-500 hover:-translate-y-1 hover:scale-105"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
