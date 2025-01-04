import clsx from "clsx";
import { tv } from "tailwind-variants";

export const typeCard = tv({
  base: "font-semibold text-white py-1 px-3 rounded-full active:opacity-80",
  variants: {
    type: {
      bug: clsx("bg-green-500", "text-white"),
      dark: clsx("bg-gray-900", "text-gray-100"),
      dragon: clsx("bg-indigo-800", "text-white"),
      electric: clsx("bg-yellow-400", "text-black"),
      fairy: clsx("bg-pink-300", "text-black"),
      fighting: clsx("bg-orange-600", "text-white"),
      fire: clsx("bg-red-600", "text-white"),
      flying: clsx("bg-sky-400", "text-white"),
      ghost: clsx("bg-indigo-700", "text-white"),
      grass: clsx("bg-green-600", "text-white"),
      ground: clsx("bg-yellow-600", "text-white"),
      ice: clsx("bg-cyan-300", "text-black"),
      normal: clsx("bg-gray-200", "text-gray-900"),
      poison: clsx("bg-purple-500", "text-white"),
      psychic: clsx("bg-pink-500", "text-white"),
      rock: clsx("bg-yellow-800", "text-white"),
      steel: clsx("bg-gray-500", "text-white"),
      stellar: clsx("bg-teal-500", "text-white"),
      unknown: clsx("bg-gray-400", "text-black"),
      water: clsx("bg-blue-600", "text-white"),
    },
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
    },
  },
});
