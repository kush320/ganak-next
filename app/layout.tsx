"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useRouter, usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = usePathname();

	if (typeof document !== "undefined") {
		if (!document.cookie && router !== "/login") {
			location.href = "/login";
		}
	}

	return (
		<html lang="en">
			<body className={inter.className}>
				<ChakraProvider>
					<Toaster />
					{router !== "/register" && router !== "/login" ? (
						<Navbar>{children}</Navbar>
					) : (
						children
					)}
				</ChakraProvider>
			</body>
		</html>
	);
}
