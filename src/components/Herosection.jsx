import profilePic from "../assets/UnnatiS.jpg"
import {motion} from "framer-motion";

const Herosection = () => {
  return (
    <section className="flex min-h-full flex-wrap mt-10 items-center" id="about">
        <motion.div
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
        className="w-full md:w-1/2 p-2">
           <h2 className="my-8 p-2 text-4xl
           font-bold md:text-5xl lg:text-[7rem]">
            Unnati Sharma
           </h2>
           <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
           Hello there!
           </p>
           <p className="mb-8 p-2 text-xl">
        I’m, a passionate Fullstack Developer with a knack for turning ideas into reality through code. With expertise in HTML, CSS, JavaScript, and the MERN stack, I craft dynamic, user-focused applications that bring value to every project I undertake. Whether it's designing intuitive interfaces or building scalable backend systems, I love solving problems and pushing the boundaries of what's possible in web development. Let's create something amazing together!
           </p>
           <a href="https://bit.ly/42sFLCb" target='_blank' className="bg-white text-black p-4 rounded-2xl
           transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-300 ...">Get Resume</a>
        </motion.div>
        <motion.div
        initial={{opacity:0, scale:0.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:1}}
         className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <motion.img 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            src={profilePic} 
            width={550} height={550} alt="not me" 
            className="rounded-3xl shadow-2xl" />
        </div>
        </motion.div>
    </section>
  )
}

export default Herosection