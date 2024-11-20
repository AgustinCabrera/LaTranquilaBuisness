"use client";
import Navbar from "./lib/navbar/navbar";
import Footer from "./lib/footer/footer";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        
        <header className="flex items-center justify-between p-5 bg-white border-b border-gray-300">
          <div className="flex flex-col  w-screen items-center">
            <div className="flex items-center">
              <img
                src="/principal/logo1.png"
                alt="Logo"
                className="w-48 h-auto"
              />
            </div>

            <nav>
              <Navbar />
            </nav>
          </div>
        </header>

        <main className="flex-grow px-10">{children}</main>
        <footer className="bg-orange-500 text-white py-5">
          <Footer />
        </footer>
      </body>
    </html>
  );
}