import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "februaar.dev",
  description: "정경진의 개발 블로그. 프론트엔드 개발 관련 기록을 남깁니다.",
  metadataBase: new URL("https://februaar.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script />
      </head>
      <body className={"bg-background text-black antialiased"}>
        <section className="mx-auto max-w-3xl xl:mx-w-[50rem] xl:px-8">
          <div className="box-border flex h-full flex-col justify-between">
            <Header />
            <div className="pb-6 px-4">{children}</div>
            <Footer />
          </div>
        </section>
      </body>
    </html>
  );
}
