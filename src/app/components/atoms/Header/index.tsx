"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Pokémon
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link
              href="/"
              className="text-gray-600 transition-colors hover:text-indigo-600"
            >
              Pokémon List
            </Link>
            <Link
              href="/search"
              className="text-gray-600 transition-colors hover:text-indigo-600"
            >
              Search
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/search"
              className="text-gray-600 transition-colors hover:text-indigo-600"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              className="text-gray-600 transition-colors md:hidden focus:outline-none hover:text-indigo-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="px-4 py-2 bg-white border-t border-gray-200 md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="py-2 text-gray-600 transition-colors hover:text-indigo-600"
            >
              Pokémon List
            </Link>
            <Link
              href="/search"
              className="py-2 text-gray-600 transition-colors hover:text-indigo-600"
            >
              Search
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
