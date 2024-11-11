import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { ThemeProvider } from "../components/ThemeProvider";
import LinkItem from "../components/LinkItem";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `,
          }}
        />
      </head>

      <body className={`bg-background text-black dark:text-white`}>
        <section className="mx-auto max-w-2xl xl:mx-w-[50rem] xl:px-8">
          {/* <ThemeProvider> */}
          <div className="h-full">
            <Header />
            <main className="px-4 min-h-[60vh]">{children}</main>
            <hr className="px-4 mt-24" />
            <LinkItem />
            <Footer />
          </div>
          {/* </ThemeProvider> */}
        </section>
      </body>
    </html>
  );
}
