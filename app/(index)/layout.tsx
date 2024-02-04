import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import IndexNavigationBar from "@/components/IndexNavigationBar";
import Providers from "../provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme={"custom1"} lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <IndexNavigationBar>{children}</IndexNavigationBar>
        </Suspense>
      </body>
    </html>
  );
}
