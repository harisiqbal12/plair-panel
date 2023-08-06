import "./globals.css";
import type { Metadata } from "next";
import { AppProvider } from "@components";

export const metadata: Metadata = {
  title: "Admin | Plair Panel",
  description: "Admin control management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
