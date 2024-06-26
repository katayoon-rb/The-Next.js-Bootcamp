import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenTable",
  description: "The Next.js Bootcamp Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='bg-gray-100 min-h-screen w-screen'>
          <main className='max-w-screen-2xl m-auto bg-white'>
            <Navbar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
