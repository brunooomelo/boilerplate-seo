import { pageview } from "@/utils/gtag";
import Link from "next/link";
import { useRouter } from "next/router";
import { SwitchLocale } from "./switch-locale";

const pages = [
  {
    label: "home",
    ariaLabel: "Ir para a página inicial",
    url: "/",
  },
  {
    label: "blog",
    ariaLabel: "Ir para a página do blog",
    url: "/blog",
  },
  {
    label: "guestbook",
    ariaLabel: "Ir para a página do guestbook",
    url: "/guestbook",
  },
  {
    label: "uses",
    ariaLabel: "Ir para a página de setup",
    url: "/uses",
  },
];

export const Header = () => {
  const { route, locale } = useRouter();

  return (
    <header className="w-full h-14 flex items-center justify-between">
      <ul className="flex gap-4">
        {pages.map((page) => (
          <li
            className={`${
              route === page.url ||
              (route.includes(page.url) && page.url !== "/")
                ? "underline"
                : ""
            } uppercase`}
            key={page.label}
          >
            <Link
              aria-label={page.ariaLabel}
              href={page.url}
              as={page.url}
              onClick={() => pageview(page.url)}
              locale={locale}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
      <SwitchLocale locale={locale} />
    </header>
  );
};
