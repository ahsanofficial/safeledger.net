import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Nav/page';
import { Footer } from "@/components/Footer/page";
import HomeScreen from "@/components/Icon/page";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
            body {
              font-family: 'Inter', sans-serif;
            }
          `}
        </style> */}
      </head>
      <body>
        <div>
          <Navbar />
        </div>
        <main>
          {children}
        </main>
        <HomeScreen/>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
