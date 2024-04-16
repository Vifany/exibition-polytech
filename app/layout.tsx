import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

export const metadata: Metadata = {
  title: "ПолитехЭкспо-2024",
  description: "ПолитехЭкспо-2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
