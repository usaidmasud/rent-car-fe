import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NextAuthProvider from "@/libs/nextauth/providers";
import { ReduxProviders } from "@/libs/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ReduxProviders>{children}</ReduxProviders>
        </NextAuthProvider>
      </body>
    </html>
  );
}
