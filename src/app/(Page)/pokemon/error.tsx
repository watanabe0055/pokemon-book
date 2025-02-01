"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Ball from "@/app/components/atoms/Svg/Ball";
import clsx from "clsx";

export default function PokemonNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black">
      <motion.svg
        animate={{ rotate: [-20, 20, -20] }} // 左右に振り子運動
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 100%" }} // 下側中央を基点に回転
        className={"mb-8"}
      >
        <Ball />
      </motion.svg>
      <h1 className="mb-4 text-4xl font-bold">ポケモンが見つかりません！</h1>
      <p className="mb-8 text-xl">お探しのポケモンは野生に帰ったようです...</p>
      <Link
        href="/"
        className={clsx(
          "px-6 py-3 font-semibold bg-red-500 transition-colors text-white rounded-full",
          "hover:bg-opacity-50"
        )}
      >
        ポケモン図鑑に戻る
      </Link>
    </div>
  );
}
