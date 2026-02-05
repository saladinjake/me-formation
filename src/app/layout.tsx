import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/GlobalStyles";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "Victor Juwa ((Saladin Jake) | Fullstack Engineer Portfolio",
    description: "Project showcase portfolio of Victor AJuwa,  Fullstack Engineer with 6 years of experience.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
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
