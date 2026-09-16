import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avadhoot Virkar | Data Analyst • AI/ML • Data Engineering",
  description:
    "Portfolio of Avadhoot Virkar — Data Analytics, Business Intelligence, AI/ML and Data Engineering.",
  keywords: [
    "Avadhoot Virkar",
    "Data Analyst",
    "AI ML",
    "Data Engineering",
    "Power BI",
    "Python",
    "SQL"
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