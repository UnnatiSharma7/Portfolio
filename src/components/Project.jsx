import {PROJECTS} from '../constants/Index.jsx'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {motion} from "framer-motion"

const Project = () => {
  return (
    <section className="pt-20" id="projects">
        <motion.h2
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="mb-8 text-center text-3xl
         lg:text-3xl">Projects</motion.h2>
        <div className="grid grid-cols-1 gap-4 
        md:grid-cols-2 lg:grid-cols-3">
             {PROJECTS.map((project)=>(
                <motion.div
                initial={{opacity:0,scale:0.9}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.5}}
                whileHover={{scale:1.05}}
                key={project.id} className="group relative
                overflow-hidden rounded-3xl border-white">
                    <motion.img
                    whileHover={{scale:1.0}}
                     src={project.image} 
                    alt={project.name}
                    className="border-white object-cover
                    transition-transform duration-500
                    group-hover:scale-110" />
                    <motion.div 
                    initial={{opacity:0}}
                    whileHover={{opacity:1}}
                    transition={{duration:0.5}}
                    className="absolute inset-0 flex flex-col items-center justify-center text-purple-700 opacity-0
                     backdrop-blur transition-opacity duration-250 group-hover:opacity-100">
                        <span className="text-xl display-center">{project.title}</span>
            <div className="flex space-x-3 mt-3">
            {/* GitHub Button */}
            <a
              href={project.gitLink}  // pass GitHub URL here
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300 transition"
            >
            <FaGithub size={12} color="voilet" />
            </a>

            {/* Deployed Project Button */}
            <a
            href={project.link}  // pass deployed project URL here
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-300 transition"
            >
            <FaExternalLinkAlt size={12} color="voilet"/>
          </a>
          </div>
                     </motion.div>
                </motion.div>
             ))}
        </div>
    </section>
  )
}

export default Project