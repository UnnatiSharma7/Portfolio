import React from 'react'
import logo from '../assets/unnati2.png'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { a } from 'framer-motion/client'
import {motion} from 'framer-motion'


const Footer = () => {
  return (
    <div className="mb-8 mt-20">
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1, delay:0.5}}
    className="flex items-center justify-center">
        <img src={logo} width={200} className="my-20 rounded-full bg-inherit opacity-50" />
    </motion.div>
    <motion.div
    className="flex items-center justify-center gap-8">
      {SOCIAL_MEDIA_LINKS.map((link,index)=>(
        <motion.a 
        initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1, delay:index*0.2}}
        key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
    <p className="mt-8 text-center text-sm tracking-wide 
    text-gray-400 ">
      &copy;Unnati Sharma. All rights are reserved.
    </p>
    </div>
  )
}

export default Footer