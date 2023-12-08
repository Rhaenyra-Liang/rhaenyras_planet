import './globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rhaenyra's Planet",
  description:
    "Welcome to Rhaenyra's Planet! This web is Rhaenyra's official website, If you want to see more information or contact her,You can click to enter the website,I hope you enjoy yourself!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen overflow-hidden h-[100dvh] bg-[#F2E2DB]`}>
        <main>
          <nav className="bg-[#db9d9d]/80 border-b border-gray-400 w-screen flex justify-center fixed z-20">
            <div className="h-20 flex justify-end items-center gap-6 px-6 max-w-7xl">
            <a href="#about" className=" text-[#822820] text-lg font-bold">
              About
            </a>
            <a href="#work" className=" text-[#822820] text-lg font-bold">
              Project
            </a>
            <a href="#certificate" className=" text-[#822820] text-lg font-bold">
             Certificate
            </a>
            <a
              href="#contact"
              className=" text-[#822820] text-lg font-bold"
            >
              Contact
            </a>
            </div>
          </nav>
          
          {children}
        </main>
      </body>
    </html>
  );
}
