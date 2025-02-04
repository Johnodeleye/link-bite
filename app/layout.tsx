import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Open_Sans } from 'next/font/google';
const inter = Outfit ({ subsets: ['latin'] })
import Navbar from "@/components/Nav";
import DarkModeToggle from "@/components/DarkModeToggle";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            {/* <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
          <h1 className="text-xl font-bold">LinkBite</h1>
          <DarkModeToggle />
        </nav> */}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
