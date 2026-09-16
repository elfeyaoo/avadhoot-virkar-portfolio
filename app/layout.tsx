import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avadhoot Virkar | Data Analyst • BI Analyst • Data Analytics",
  description:
    "Portfolio of Avadhoot Virkar — Data Analyst, BI Analyst and Data Analytics professional.",
  keywords: [
    "Avadhoot Virkar",
    "Data Analyst",
    "BI Analyst",
    "Data Analytics",
    "Python",
    "SQL",
    "Power BI"
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}