import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care",
  description: "Dashborde for Care Together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block w-44 ">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:max-w-[calc(100%-11rem)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
