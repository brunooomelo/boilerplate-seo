import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'
import {
  SiEthereum,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'
import { Tooltip } from '@/components/tooltip'

const techs = [{
  label: 'Javascript',
  Icon: SiJavascript,
}, {
  label: 'Typescript',
  Icon: SiTypescript
}, {
  label: 'HTML5',
  Icon: SiHtml5
}, {
  label: 'TailwindCSS',
  Icon: SiTailwindcss
}, {
  label: 'Node.JS',
  Icon: SiNodedotjs
}, {
  label: 'Next.JS',
  Icon: SiNextdotjs
}, {
  label: 'Firebase',
  Icon: SiFirebase
}, {
  label: 'Postgres',
  Icon: SiPostgresql
}, {
  label: 'MongoDB',
  Icon: SiMongodb
}, {
  label: 'Figma',
  Icon: SiFigma
}, {
  label: 'Web3/Ethereum',
  Icon: SiEthereum
}, {
  label: 'Git',
  Icon: SiGit
}]


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export const Technologies = () => (
  <motion.section
    variants={container}
    initial="hidden"
    animate="show"
    className="flex gap-4 flex-wrap justify-center">
    <TooltipPrimitive.Provider>
      {
        techs.map(tech => (
          <Tooltip content={tech.label} key={tech.label}>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 1 }}
              whileFocus={{ scale: 1.15 }}
              tabIndex={0}
              className="w-[90px] min-[514px]:w-[120px] md:w-[90px] h-[100px] bg-[#262626] hover:bg-[#3e3d3d] border border-[#3D3D3D] rounded flex items-center justify-center"
            >
              <tech.Icon size={52} />
            </motion.div>
          </Tooltip>
        ))
      }
    </TooltipPrimitive.Provider>
  </motion.section>
)
