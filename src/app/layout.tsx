import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import "./style.css";

export const metadata: Metadata = {
  title: "februaar.dev",
  description: "정경진의 개발 블로그. 프론트엔드 개발 관련 기록을 남깁니다.",
  metadataBase: new URL("https://februaar.dev"),
};

const itemsData = [
  {
    pathName: "GitHub",
    path: "https://github.com/Februaar",
  },
  { pathName: "Email", path: "https://github.com" },
];

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

      <body>
        <main className="container px-4 py-14 min-h-[70vh]">
          <Header />
          <div>{children}</div>
        </main>

        <hr className="container separator px-4 mt-24" />

        <div className="container px-4 my-4 mt-8">
          <ul className="flex gap-3">
            {itemsData.map((data) => (
              <li className="sns-item to-light" key={data.path}>
                <Link href={data.path} target="_blank">
                  {data.pathName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </body>
    </html>
  );
}
