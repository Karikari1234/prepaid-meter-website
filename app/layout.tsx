import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { MobileNavbar } from "@/components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });
import Footer from "../components/common/Footer";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "Prepaid Metering System BPDB",
  description: "Prepaid Metering System BPDB",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>BPDB Prepaid Metering System Website</title>
      </head>
      <body className={`${inter.className} relative`}>
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="md:hidden">
          <MobileNavbar></MobileNavbar>
        </div>
        {/* <ResponsiveNavbar /> */}
        <main className="w-full px-1 md:mx-auto md:w-5/6 md:p-0 ">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
