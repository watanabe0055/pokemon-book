"use server";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/atoms/Header";
import Footer from "./components/atoms/Footer";

import { Providers } from "./components/Providers";
import AuthInitializer from "./components/AuthInitializer";
import { fetchAuthState } from "./components/AuthInitializer/useModel";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = await fetchAuthState();

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="ball.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
        <Providers>
          <AuthInitializer isLoggedIn={isLoggedIn} />
          <Header isLogin={isLoggedIn} />
          <main className="flex-grow">{children}</main>
          <Footer isLogin={isLoggedIn} />
        </Providers>
      </body>
    </html>
  );
}
