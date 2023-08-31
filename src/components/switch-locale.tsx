import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/router";

export const SwitchLocale = () => {
  const { locale, query, pathname } = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="h-6 border px-2 rounded text-sm">
          {locale === "pt" ? "Portugues" : "English"}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className=" bg-[#111010] border rounded-md p-2  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="group text-sm leading-none text-white rounded flex items-center h-[25px] px-2 relative select-none outline-none data-[disabled]:text-zinc-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-cyan-500 data-[highlighted]:text-white"
            asChild
          >
            <Link
              href={{
                pathname,
              }}
              locale="pt"
            >
              Portugues
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="group text-sm leading-none text-white rounded flex items-center h-[25px] px-2 relative select-none outline-none data-[disabled]:text-zinc-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-cyan-500 data-[highlighted]:text-white"
            asChild
          >
            <Link
              href={{
                pathname,
              }}
              locale="en"
            >
              English
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
