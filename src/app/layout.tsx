import localFont from "next/font/local";
import "./globals.css";
import 'aos/dist/aos.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  icons: {
    icon: [
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: "/favicon-180x180.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
