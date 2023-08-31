import Link from "next/link"
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si"

export const Footer = () => {
  return (
    <div className="w-full flex justify-between">
      <Link aria-label="Veja mais sobre meu github" href="https://github.com/brunooomelo" target="_blank" rel="noopener noreferrer">
        <SiGithub className="md:h-[40px] md:w-[40px]" size={24} />
      </Link>
      <Link aria-label="Veja mais sobre meu linkedin" href="https://www.linkedin.com/in/brunooomelo" target="_blank" rel="noopener noreferrer">
        <SiLinkedin className="md:h-[40px] md:w-[40px]" size={24} />
      </Link>
      <Link aria-label="Veja mais sobre meu twitter" href="https://twitter.com/brunooomelo" target="_blank" rel="noopener noreferrer">
        <SiTwitter className="md:h-[40px] md:w-[40px]" size={24} />
      </Link>
    </div>
  )
}
