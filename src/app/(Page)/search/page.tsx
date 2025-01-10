import PokemonSearch from "@/app/components/PokemonSearch";

export default async function Home() {
  return (
    <main className="container px-4 py-8 mx-auto">
      <PokemonSearch />
    </main>
  );
}
