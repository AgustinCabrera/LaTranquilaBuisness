"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center md:justify-center">
          <div className="hidden md:flex space-x-8 py-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-amber-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/informacion"
              className="text-gray-800 hover:text-amber-600 font-medium"
            >
              Información
            </Link>
            <Link
              href="/ubicacion"
              className="text-gray-800 hover:text-amber-600 font-medium"
            >
              Ubicación
            </Link>
            <Link
              href="/guia-local"
              className="text-gray-800 hover:text-amber-600 font-medium"
            >
              Guía Local
            </Link>
          </div>
          <div className="md:hidden flex items-center py-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-800 hover:text-amber-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/informacion"
              className="block text-gray-800 hover:text-amber-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Información
            </Link>
            <Link
              href="/ubicacion"
              className="block text-gray-800 hover:text-amber-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Ubicación
            </Link>
            <Link
              href="/guia-local"
              className="block text-gray-800 hover:text-amber-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Guía Local
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
