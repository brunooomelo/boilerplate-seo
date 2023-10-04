import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Space_Mono } from "next/font/google";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@/components/analytics";

import SEO from "../../next-seo.config";

const font = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>{/* // META TAGS ABOVE */}</Head>
      <DefaultSeo {...SEO} />
      <main
        className={`max-w-3xl mx-auto ${font.className} p-6 flex flex-col gap-8`}
      >
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
