import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your font
import "./globals.css";
import StoreProvider from "./StoreProvider"; // Import this!

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Axiom Pulse",
  description: "Token discovery dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* WRAP CHILDREN HERE */}
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}