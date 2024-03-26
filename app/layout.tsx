import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hidrovibes",
  description: "Página sobre Hidrovibes, empres enfocada en traer un jardin hidroponico compacto y sencillo para uso domestico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
