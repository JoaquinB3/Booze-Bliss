import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/header/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Booze Bliss",
  description: "Aplicacion paara crear cocktails de autor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const links = [
    {
      name: "Inicio",
      href: "/"
    },
    {
      name: "Vehiculo",
      href: "/vehiculo"
    },
    {
      name: "Cliente",
      href: "#"
    },
    {
      name: "API",
      href: "#"
    }
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header links={links} ></Header>
        {children}
      </body>
    </html>
  );
}
