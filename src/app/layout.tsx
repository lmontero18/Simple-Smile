import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ParticlesComponent from "@/components/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple Smile | Joke Generator",
  description: "By Luis Montero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={["tokyo", "light", "dark", "ocean"]}
        >
          <ParticlesComponent id="tsparticles" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
