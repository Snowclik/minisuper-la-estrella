import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "MiniSuper La Estrella",
    description: "Tu supermercado de confianza",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
