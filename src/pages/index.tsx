import { NextSeo } from "next-seo";

import { GetStaticProps } from "next";
type Page = {
  seo: {
    title: string;
    description: string;
  };
  title: string;
  slug: string;
};

export default function Home({ title, seo }: Page) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.description} />
      <h2 className="leading-6">{title}</h2>
    </>
  );
}

export const getStaticProps: GetStaticProps<Page> = () => {
  return {
    props: {
      seo: {
        title: "Boilerplate initial",
        description:
          "Eu sou um boilerplate para SEO e quero agilizar sua criação de LP para SEO",
      },
      title: "Landing Page Initial",
      slug: "meu-slug",
    },
  };
};
