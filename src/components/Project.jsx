import React from 'react'
import {PROJECTS} from '../constants'
import { MdArrowOutward } from 'react-icons/md'
import {motion} from "framer-motion"

const Project = () => {
  return (
    <section className="pt-20" id="projects">
        <motion.h2
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="mb-8 text-center text-3xl
         lg:text-4xl">Projects</motion.h2>
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
                    whileHover={{scale:1.1}}
                     src={project.image} 
                    alt={project.name}
                    className="border-white object-cover
                    transition-transform duration-500
                    group-hover:scale-110" />
                    <motion.div 
                    initial={{opacity:0}}
                    whileHover={{opacity:1}}
                    transition={{duration:0.5}}
                    className="absolute inset-0 flex flex-col items-center justify-center text-blue-700 opacity-0
                     backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                        <h3 className="text-xl display-center">{project.title}</h3>
                        <p className=" display-center p-3">{project.subtitle}</p>
                        <a href={`https://github.com/UnnatiSharma7/${project.title}`} target="_blank" rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 mt-4 text-black hover:bg-gray-300" >
                            <div className="flex items-center" >
                                <span>View on Github</span>
                                <MdArrowOutward></MdArrowOutward>
                            </div>
                        </a>
                     </motion.div>
                </motion.div>
             ))}
        </div>
    </section>
  )
}

export default Project