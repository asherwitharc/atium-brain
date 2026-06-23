import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atium Brain – Lawfund",
  description: "AI-powered law firm relationship intelligence for Lawfund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" style={{ background: '#0A0A0A' }}>{children}</body>
    </html>
  );
}
