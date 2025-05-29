'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";
import MobileDrawer from "@/components/MobileDrawer";
import { FiMenu } from "react-icons/fi";

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
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();
    const isAuthRoute = pathname?.includes('/auth');

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#13151a] min-h-screen`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {!isAuthRoute && (
                        <>
                            {
                                !isMobileOpen &&
                                <button
                                    onClick={toggleMobileMenu}
                                    className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 rounded-full backdrop-blur-lg border border-white/10 lg:hidden hover:bg-white/20 transition-all duration-300 animate-slide-in-right"
                                >
                                    <FiMenu className="w-6 h-6 text-white" />
                                </button>
                            }
                            <MobileDrawer
                                isOpen={isMobileOpen}
                                onClose={() => setIsMobileOpen(false)}
                            />
                            <div className="hidden lg:block">
                                <Sidebar />
                            </div>
                        </>
                    )}
                    <main className={`${!isAuthRoute ? "lg:pl-60" : ""} sm:p-4  md:p-8 md:pt-8`}>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
