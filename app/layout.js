import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ESYEN FILM GALLERY",
  description: "FILM PHOTOGRAPHY GALLERY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="nord">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
