import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "",
    siteName: "Boilerplate SEO",
    description:
      "Eu sou um boilerplate para SEO e quero agilizar sua criação de LP para SEO",
    images: [
      {
        url: "/home/cover.png",
        width: 1280,
        height: 720,
        alt: "",
      },
    ],
  },
  twitter: {
    handle: "@twitter_user",
    site: "@website",
    cardType: "summary_large_image",
  },
};

export default config;
