import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/UserAuth.jsx";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <AuthContextProvider>
        <Navbar/>
        {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
