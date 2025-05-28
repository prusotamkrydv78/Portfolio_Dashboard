'use client';

import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Portfolio",
//   description: "Personal portfolio website",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuthRoute = pathname?.includes('/auth');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {!isAuthRoute && <Sidebar />}
          <div className={!isAuthRoute ? "md:pl-60" : ""}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
