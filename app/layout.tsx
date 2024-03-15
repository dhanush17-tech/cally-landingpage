import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/navbar";
import Background from "./components/section/herosection/background";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Cally",
  description: "AI powered calendar. 10X your productivty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-page-gradient `}>
        <Head>
          <title>Shopwise</title>{" "}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@geeky_dan" />
          <meta name="twitter:title" content="Dhanush Vardhan" />
          <meta
            name="twitter:description"
            content="18 y/o self taught flutter dev • full time indie hacker 👨‍💻•  freelancer(helping startups soar) 🚀🚀."
          />
          <meta
            name="twitter:image"
            content="https://www.geekydan.dev/assets/memoji.png"
          />
          <meta
            name="description"
            content="18 y/o self taught dev • full time indie hacker 👨‍💻 • building http://shopwise.tech  •  freelancer(helping startups soar) 🚀🚀"
          />
          <meta
            name="keywords"
            content="18 y/o self taught dev • full time indie hacker 👨‍💻 • building http://shopwise.tech  •  freelancer(helping startups soar) 🚀🚀  •  flutter developer  • mobile app developer  • software developer "
          />
          <link rel="canonical" href="http://www.geekydan.dev/" />
        </Head>
        <Header />
        {children}
      </body>
    </html>
  );
}
