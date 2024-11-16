"use client"; // Ensures client-side rendering

import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Header */}
        <header className="inline-block items-center p-5 bg-white flex items-center p-4" >
          {/* Logo */}
          <div className="logo">
            <img
              src="/principal/logo1.png"
              alt="Logo"
              className="w-48 h-auto"
            />
          </div>

          {/* Navbar */}
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

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="flex items-center justify-center py-5">
          Footer content here
        </footer>
      </body>
    </html>
  );
}
