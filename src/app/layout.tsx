import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/atoms/Header";
import Footer from "./components/atoms/Footer";

import { Providers } from "./components/Providers";
import AuthInitializer from "./components/AuthInitializer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <AuthInitializer />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
