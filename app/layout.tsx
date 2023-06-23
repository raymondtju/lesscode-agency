import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "LessCode Agency",
  description: "LessCode Agency",
};

const ralewayFont = localFont({
  src: "../assets/font/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ralewayFont.variable}`}>
        <div className="container mx-auto font-rale">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
