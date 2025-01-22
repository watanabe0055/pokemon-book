import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* ヒーローセクション */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/gemini_pokemon_top.jpeg"
          alt="カラフルなポケモンの背景"
          layout="fill"
          objectFit="cover"
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

      {/* 特徴セクション */}
      <section className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          PokeSearchの魅力
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "高度な検索機能",
              icon: "🔍",
              description: "タイプ、特性、能力値でポケモンを見つけよう",
            },
            {
              title: "充実したデータベース",
              icon: "📚",
              description: "全てのポケモンの詳細情報にアクセス",
            },
            {
              title: "バトル戦略",
              icon: "⚔️",
              description: "効果的な技や最強のチーム編成を学ぼう",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 注目のポケモンセクション */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
            注目のポケモン
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { name: "ピカチュウ", type: "でんき", ability: "せいでんき" },
              {
                name: "ゲンガー",
                type: "ゴースト・どく",
                ability: "のろわれボディ",
              },
              { name: "カビゴン", type: "ノーマル", ability: "あついしぼう" },
              { name: "ミュウツー", type: "エスパー", ability: "プレッシャー" },
            ].map((pokemon, index) => (
              <div
                key={index}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=${pokemon.name}`}
                  alt={`注目のポケモン ${pokemon.name}`}
                  width={200}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">{pokemon.name}</h3>
                  <p className="text-sm text-gray-600">
                    {pokemon.type} • {pokemon.ability}
                  </p>
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
