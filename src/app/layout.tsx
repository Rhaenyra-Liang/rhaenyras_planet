import "./globals.css";
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
      <body className="h-screen  bg-[#F2E2DB] ">
        <main>
          <nav className=" h-20 bg-[#db9d9d]/80  border-b border-gray-400 flex justify-end items-center pr-6 fixed w-screen">
            <a href="#about" className=" text-[#822820] text-xl font-bold pr-6">
              About
            </a>
            <a href="#work" className=" text-[#822820] text-xl font-bold pr-6">
              Work
            </a>
            <a href="#notes" className=" text-[#822820] text-xl font-bold pr-6">
              Notes
            </a>
            <a
              href="#contact"
              className=" text-[#822820] text-xl font-bold pr-6"
            >
              Contact
            </a>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
