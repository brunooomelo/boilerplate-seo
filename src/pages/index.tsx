import Link from "next/link";
import { NextSeo } from "next-seo";

import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Boilerplate"
        description="Eu sou um boilerplate para SEO e quero agilizar sua criação de LP para SEO"
      />
      <Header />
      <h2 className="leading-6">Landing page</h2>
    </>
  );
}
