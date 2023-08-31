import { NextSeo } from "next-seo";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NextSeo
        title="Boilerplate"
        description="Eu sou um boilerplate para SEO e quero agilizar sua criação de LP para SEO"
      />
      <div className="mx-auto flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Pagina não encontrada</h1>
        <Link
          aria-label="Voltar para a home"
          href="/"
          className="px-4 rounded border"
        >
          Voltar para a pagina inicial
        </Link>
      </div>
    </>
  );
}
