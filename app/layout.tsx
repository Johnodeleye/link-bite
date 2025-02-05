import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Open_Sans } from 'next/font/google';
const inter = Outfit ({ subsets: ['latin'] })
import Navbar from "@/components/Nav";
import DarkModeToggle from "@/components/DarkModeToggle";

export const metadata: Metadata = {
  title: "LinkBite - URL Shortener | Built by Odeleye John Perspicacious | P.Dev",
  description: "LinkBite is the ultimate URL shortener that makes sharing links effortless. Built by Odeleye John (P.DEV), it offers fast, secure, and customizable short links for everyone. Try it now!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
