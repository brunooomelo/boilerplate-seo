import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [{
  ariaLabel: "Conheça mais sobre meu orçamento simples",
  url: 'https://orcamentosimples.vercel.app',
  title: 'Orçamentos simples',
  description: 'SaaS para a criação e gerenciamento de orçamentos',
  isArchived: false
}, {
  ariaLabel: 'Conheça mais sobre o Mules Studio, NFT de Mulas na Blockchain da Fantom',
  url: 'https://mulesstudio.vercel.app',
  title: 'Mules Studio',
  description: 'Uma comunidade NFT de Mulas na Blockchain da Fantom',
  isArchived: false
}, {
  ariaLabel: 'Conheça mais sobre um projeto arquivo de uma SDK do PicPay em Javascript',
  url: 'https://github.com/brunooomelo/picpay-js',
  title: 'Picpay-js',
  description: 'Uma SDK em javascript para API Rest do PicPay Ecommerce',
  isArchived: true
}, {
  ariaLabel: 'Conheça mais sobre um projeto arquivado de uma CLI de resultados da loteria brasileira',
  url: 'https://github.com/brunooomelo/lottery',
  title: 'Lottery',
  description: 'CLI para receber resultados da Loteria Brasileira',
  isArchived: true
}]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.24
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const MotionLink = motion(Link)

export const Projects = () => (
  <motion.section
    variants={container}
    initial="hidden"
    animate="show"
    className="flex flex-col gap-4"
  >
    {projects.map(project => (
      <MotionLink
        variants={item}
        whileHover={{ scale: 1.03 }}
        whileFocus={{ scale: 1.03 }}
        key={project.title}
        aria-label={project.ariaLabel}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex p-4 items-center bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded" >
          <div className="flex flex-col justify-between flex-1 gap-8">
            <div className="flex gap-4 flex-1 align-baseline">
              <h2 className="leading-6">
                {project.title}
              </h2>
              {
                project.isArchived && (
                  <span className="border px-2 rounded text-sm">Archived</span>
                )
              }
            </div>
            <p className="leading-6">{project.description}</p>
          </div>
          <FiArrowUpRight size={24} />
        </div>
      </MotionLink>
    ))}
  </motion.section>
)
