"use client"

import Navbar from "./lib/navbar/navbar";
import Footer from "./lib/footer/footer";
import "./globals.css";
import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";


const poppinsFont = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--poppins",
  weight: "100 900",

});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${poppinsFont.variable} antialiased`}
      >

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

