"use client"; 
import "./globals.css";

import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="inline-block items-center p-5 bg-white flex items-center p-4" >
          <div className="logo">
            <img
              src="/principal/logo1.png"
              alt="Logo"
              className="w-48 h-auto"
            />
          </div>
          <nav className="nav bg-white">
            <div className="links flex gap-5">
              <Link
                href="/"
                className="text-black text-lg no-underline pb-1 border-b-2 border-transparent hover:border-orange-500 transition ease-in-out"
              >
                Home
              </Link>
              <Link
                href="/pages/information"
                className="text-black text-lg no-underline pb-1 border-b-2 border-transparent hover:border-orange-500 transition ease-in-out"
              >
                Información
              </Link>
              <Link
                href="/pages/location"
                className="text-black text-lg no-underline pb-1 border-b-2 border-transparent hover:border-orange-500 transition ease-in-out"
              >
                Ubicación
              </Link>
              <Link
                href="/pages/localguide"
                className="text-black text-lg no-underline pb-1 border-b-2 border-transparent hover:border-orange-500 transition ease-in-out"
              >
                Guía Local
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="flex items-center justify-center py-5">
          Footer content here
        </footer>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    </div>
      </body>
    </html>
  );
}
