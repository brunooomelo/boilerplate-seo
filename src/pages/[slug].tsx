import { NextSeo } from "next-seo";
import { GetStaticPaths, GetStaticProps } from "next";

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

const posts = [
  {
    seo: {
      title: "Boilerplate 1",
      description:
        "Eu sou um boilerplate para SEO e quero agilizar sua criação de LP para SEO",
    },
    title: "Landing Page 1",
    slug: "page-1",
  },
  {
    seo: {
      title: "Boilerplate 2",
      description:
        "Eu sou um boilerplate para SEO e quero agilizar sua criação de LP para SEO",
    },
    title: "Landing Page 2",
    slug: "page-2",
  },
];

export const getStaticPaths: GetStaticPaths = () => {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Page> = (context) => {
  const post = posts.find((post) => post.slug === context.params?.slug);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: post,
  };
};
