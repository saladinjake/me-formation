import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/GlobalStyles";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Saleem Kudra | Fullstack Developer Portfolio",
    description: "Professional portfolio of Saleem Kudra, a Fullstack Developer with 8 years of experience.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <Providers>
                        <GlobalStyles />
                        {children}
                    </Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
