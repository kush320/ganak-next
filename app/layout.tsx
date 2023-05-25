"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/component/Navbar";
import { useRouter, usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();

  const noNav = ["/login", "/register"];
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          {router !== "/login" && "/register" ? <Navbar children={children}/>: children}
        </ChakraProvider>
      </body>
    </html>
  );
}
