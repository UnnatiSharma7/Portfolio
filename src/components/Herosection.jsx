import profilePic from "../assets/UnnatiS.jpg"
import {motion} from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const Herosection = () => {
  return (
    <section className="flex min-h-full flex-wrap mt-10 items-center" id="about">
        <motion.div
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
        className="w-full md:w-1/2 p-2">
           {/* <h2 className="my-8 p-2 text-4xl
           font-bold md:text-5xl lg:text-[7rem]">
            Unnati Sharma
           </h2> */}
           <p className="p-2 mt-12 text-3xl tracking-tighter lg:text-4xl">
           Hello there!
           </p>
           <p className="mb-8 p-2 text-md">
        I&apos;m Unnati Sharma — a Fullstack Developer specializing in the MERN stack. I enjoy building user-friendly web applications and solving problems through clean, efficient code.
           </p>
           <button 
          href="https://bit.ly/42sFLCb" 
          target="_blank" 
          className="bg-white text-black px-3 py-2 text-sm rounded-2xl
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 duration-300"
          rel="noopener noreferrer"
          >
          Get Resume
          </button>

        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8 mt-11 relative group" // make parent relative & group for hover
        >
        <div className="flex justify-center relative">
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      src={profilePic}
      width={370}
      height={370}
      alt="Profile"
      className="rounded-3xl shadow-2xl"
    />
  </div>
</motion.div>
    </section>
  )
}

export default Herosection