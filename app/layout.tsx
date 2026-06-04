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
  title: "Telpa360 — Immersīvs vizuālais saturs telpām un īpašumiem",
  description:
    "Telpa360 veido 360° virtuālās tūres, 3D tūres, dronu un FPV video, GoPro filmējumus un reklāmas video. Parādi savu telpu, īpašumu vai pasākumu profesionāli un pārliecinoši internetā.",
  keywords: [
    "360 virtuālās tūres",
    "3D tūres",
    "dronu filmēšana",
    "FPV dronu video",
    "GoPro filmējumi",
    "reklāmas video",
    "nekustamais īpašums",
    "Telpa360",
    "Rīga",
    "Latvija",
  ],
  metadataBase: new URL("https://telpa360.lv"),
  openGraph: {
    title: "Telpa360 — Parādi savu telpu tā, lai to gribas redzēt",
    description:
      "Immersīvs vizuālais saturs: 360° virtuālās tūres, 3D tūres, dronu un FPV video, GoPro un reklāmas video. Vairāk uzticamības un kvalitatīvu pieprasījumu.",
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
