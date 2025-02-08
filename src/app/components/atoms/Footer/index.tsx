import { Github } from "lucide-react";
import LinkItemList from "../LinkItemList";

export default function Footer() {
  return (
    <footer className="text-gray-600 bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-indigo-600">PokeSearch</h3>
            <p className="text-sm">Your Pokémon companion</p>
          </div>
          <nav className="flex flex-wrap justify-center mb-4 space-x-6 md:justify-end md:mb-0">
            <LinkItemList />
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://github.com/watanabe0055/pokemon-book"
              aria-label="GitHubでプロジェクトを見る"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-indigo-600"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-sm text-center">
          © {new Date().getFullYear()} PokeSearch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
