import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import "../../public/font/stylesheet.css";
import Header from "./components/ui/Header/Header";

export const metadata: Metadata = {
  title: "Farkhan's Portfolio",
  description: "Portfolio of Farkhan, a Frontend Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
