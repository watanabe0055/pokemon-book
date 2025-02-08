import PokemonSearch from "@/app/components/PokemonSearch";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "pokemon Search",
	description: "pokemon search page",
};

export default async function Home() {
	return (
		<main>
			<PokemonSearch />
		</main>
	);
}
