import type { Metadata } from "next";
import { Orbitron, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingLogo from "@/components/FloatingLogo";

// 1. Font Orbitron untuk Heading/Judul
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

// 2. Font Plus Jakarta Sans untuk Teks Isi/Body
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Kukang EV - ITERA",
  description: "Inovasi Kendaraan Listrik ITERA",
  icons: {
    icon: "app/icon.png",
    shortcut: "app/icon.png",
    apple: "app/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${orbitron.variable} ${jakarta.variable}`}>
      {/* Set font-sans (Plus Jakarta Sans) sebagai default di <body> */}
      <body className="font-sans antialiased bg-[#060911] text-gray-100">
        <LoadingScreen />
        {children}
        <FloatingLogo />
      </body>
    </html>
  );
}