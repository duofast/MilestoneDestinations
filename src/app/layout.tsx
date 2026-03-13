import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milestone Destinations",
  description: "Airticket | Tours | Transport | Hotels",
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
        {/* Utility Bar - non sticky */}
        <div className="w-full bg-black text-white text-sm py-2 px-4 text-center">
          <p>
            For information please call:{" "}
            <a
              href="tel:+923100050107"
              className="font-bold"
              style={{ color: "#1368a5" }}
            >
              +92 310 0050107
            </a>
          </p>
        </div>

        {children}
      </body>
    </html>
  );
}