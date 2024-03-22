import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import "../../public/font/stylesheet.css";
import Header from "./components/ui/Header/Header";
import Contact from "./components/ui/Contact/Contact";
import Footer from "./components/ui/Footer/Footer";

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
      <body className="bg-black text-white antialiased">
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
