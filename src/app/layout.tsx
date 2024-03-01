import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webventure - Agence de développement web",
  description:
    "Webventure vous propose des solutions web sur mesure pour votre entreprise. Ecommerce, site vitrine, application web, nous vous accompagnons dans votre projet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="logos/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-WZP4H2GF" />
    </html>
  );
}
