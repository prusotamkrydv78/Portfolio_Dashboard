
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from '@/components/Navbar';
import QueryProvider from "@/utils/Tans-stack-provider";

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
 

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#13151a] min-h-screen`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar/>
                    <main className={`${1 ? "lg:pl-60" : ""} `}>
                        <QueryProvider>
                        {children}
                        </QueryProvider>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
