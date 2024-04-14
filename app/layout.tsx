import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Navbar from "./(components)/Navbar";
import AuthProvider from "./auth/Provider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Ticketing 501",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.variable}>
				<AuthProvider>
					<Theme>
						<Navbar />
						<main>{children}</main>
					</Theme>
				</AuthProvider>
			</body>
		</html>
	);
}
