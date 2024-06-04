
"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/UserAuth.jsx";
import Navbar from "./components/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/theme-provider"
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark"  enableSystem
            disableTransitionOnChange>
        <AuthContextProvider>
        <Navbar/>
        {children}
        </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
