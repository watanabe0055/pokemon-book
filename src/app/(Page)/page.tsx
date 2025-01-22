import Link from "next/link";
import Image from "next/image";
import { fetchPokemonData } from "../lib/fetch";

async function getServerPokemonImage() {
  try {
    // ランダムなIDを4つ生成
    const randomIds = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 1025).toString()
    );

    // 並列でポケモンデータを取得
    const pokemonList = await Promise.all(
      randomIds.map((id) => fetchPokemonData({ id }))
    );

    // 各ポケモンの画像データを整形
    return pokemonList.map((pokemon) => ({
      id: pokemon.pokemonData?.id,
      name: pokemon.pokemonData?.name,
      image: pokemon.pokemonData?.sprites.other.official_artwork.front_default,
    }));
  } catch (error) {
    console.error("Failed to fetch Pokemon data:", error);
    return []; // 空配列を返して処理を継続
  }
}

export default async function Home() {
  const pokemonList = await getServerPokemonImage();

  return (
    <div className="space-y-16">
      {/* ヒーローセクション */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/gemini_pokemon_top.jpeg"
          alt="カラフルなポケモンの背景"
          height={1080}
          width={1920}
          className="absolute z-0"
        />
        <div className="relative z-10 space-y-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl drop-shadow-lg">
            ポケモンの世界を探索しよう
          </h1>
          <p className="text-xl text-white md:text-2xl drop-shadow-md">
            お気に入りのポケモンを検索し、学び、冒険しよう
          </p>
          <Link
            href="/search"
            className="inline-block px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-red-600 rounded-full hover:bg-red-700 animate-bounce"
          >
            探索を始める
          </Link>
        </div>
      </section>

      {/* 注目のポケモンセクション */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
            注目のポケモン
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {pokemonList.map((pokemon) => (
              <div
                key={pokemon.id}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
              >
                <Image
                  src={pokemon.image || ""}
                  alt={`注目のポケモン ${pokemon.name}`}
                  width={200}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">{pokemon.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* コールトゥアクション */}
      <section className="container px-4 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          ポケモンマスターへの道
        </h2>
        <p className="mb-8 text-xl text-gray-600">
          今すぐ冒険を始めよう！何千ものトレーナーが待っています
        </p>
        <Link
          href="/list"
          className="inline-block px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-red-600 rounded-full hover:bg-red-700"
        >
          ポケモン図鑑を見る
        </Link>
      </section>
    </div>
  );
}
