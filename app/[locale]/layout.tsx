import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "en" }];
}

const inter = Inter({ subsets: ["latin"] });
import Footer from "../../components/common/Footer";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "Prepaid Metering System BPDB",
  description: "Prepaid Metering System BPDB",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages: any;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang="en">
      <head>
        <title>BPDB Prepaid Metering System Website</title>
      </head>
      <body className={`${inter.className} relative`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {/* <ResponsiveNavbar /> */}
          <main className="w-full px-1 md:mx-auto md:w-5/6 md:p-0 ">
            {children}
          </main>
          <Footer />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
