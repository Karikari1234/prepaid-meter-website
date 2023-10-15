import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
import Footer from "../components/common/Footer";
import Header from "@/components/common/Header";
import ResponsiveNavbar from "@/components/common/navigation/responsive-navbar";

export const metadata: Metadata = {
  title: "Prepaid Metering System BPDB",
  description: "Prepaid Metering System BPDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>BPDB Prepaid Metering System Website</title>
      </head>
      <body className={`${poppins.className} relative`}>
        <Header />
        {/* <ResponsiveNavbar /> */}
        <main className="w-full px-1 md:mx-auto md:w-5/6 md:p-0 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
