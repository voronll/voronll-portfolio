import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voronll | Portfolio",
  description: "Full Stack Developer — projetos, experiência e contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
