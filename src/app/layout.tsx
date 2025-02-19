import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./providers/reactQueryProvider";
import Searchbar from "./components/Searchbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "React Query App Movies",
    description: "Aplication using React Query to get Movies from TMDB",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReactQueryProvider>
                    <Searchbar />
                    <main>{children}</main>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
