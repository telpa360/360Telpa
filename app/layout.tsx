import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Telpa360 — 360° virtuālās tūres un Google Maps skati | Rīga",
  description:
    "Telpa360 veido 360° virtuālās tūres nekustamajiem īpašumiem, 360° skatus Google Maps profilam un vizuālu uzņēmumu telpu prezentāciju. Ļauj klientiem apskatīt telpu attālināti. Rīga, Latvija.",
  keywords: [
    "360 tūres",
    "virtuālās tūres",
    "360 virtuālās tūres",
    "Google Maps 360 skati",
    "Street View uzņēmumam",
    "3D tūres",
    "nekustamais īpašums",
    "uzņēmumu telpu prezentācija",
    "dronu filmēšana",
    "Telpa360",
    "Rīga",
    "Latvija",
  ],
  metadataBase: new URL("https://telpa360.lv"),
  openGraph: {
    title: "Telpa360 — Parādi savu īpašumu vai uzņēmumu 360° skatā",
    description:
      "360° virtuālās tūres nekustamajiem īpašumiem, Google Maps 360° skati un uzņēmumu telpu prezentācija. Ļauj klientiem iepazīt vietu pirms apmeklējuma. Rīga, Latvija.",
    locale: "lv_LV",
    type: "website",
    siteName: "Telpa360",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
