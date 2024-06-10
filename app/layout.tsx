import Providers from "@/components/layout/providers";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["cyrillic"] });

const birthYear = 2000;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

export const metadata: Metadata = {
  title: "Zuna Dev",
  description: `${age} YO software engineer`,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
