import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";

import image1 from "../assets/colouredCow.png";
import image2 from "../assets/chatAI.png";
import image3 from "../assets/TodoApp.png";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Rustamji Institute of Technology, BSF Academy",
    duration: "October 2021-2025",
    description:
      "Graduated with a CGPA of 8.52. Experienced as a Frontend Developer Instructor at the Innovators Club, with hands-on experience in building MERN Stack applications and strong skills in problem-solving, DSA, and C++.",
  },
  {
    degree: "PCM",
    institution: "Sister Nivedita Higher Secondary School",
    duration: "October 2019-2020",
    description:
      "Secured 2nd position in district Gwalior with 95%.",
  }
];

export const PROJECTS = [
  { id:1,
    title: "ColouredCow-CareerConnect",
    subtitle:
      "CareerConnect is an in-house hiring dashboard for ColoredCow that streamlines the recruitment process.",
    image: image1,
    link:"https://coloured-cow-career-connect.vercel.app/",
    gitLink:"",
  },
  {  id:2,
    title: "Chat-AI",
    subtitle:
      "It's a clone of Chat-GPT built using MERN stack and I have utilized Gemini AI in it.",
    image: image2,
    link:"https://chat-ai-lyart-eight.vercel.app/",
    gitLink:"https://github.com/UnnatiSharma7/Chat-AI",
  },
    {  id:3,
    title: "Todo-App",
    subtitle:
      "It allows users to create, manage, and categorize tasks. Users can add tasks, set their priority, and classify them as either Indoor or Outdoor tasks.",
    image: image3,
    link:"https://todo-app-dqm8.vercel.app/",
    gitLink:"https://github.com/UnnatiSharma7/Todo-App",
  },
];

export const BIO = [
  "I'm Unnati Sharma, a 2025 B.Tech Graduate in Computer Science & Engineering from RJIT and a Fullstack Developer specializing in the MERN Stack. I am passionate about building scalable, impactful solutions and enjoy transforming ideas into real-world applications that are both meaningful and efficient",
  
  "Apart from development, I love solving Data Structures & Algorithms (DSA) problems on platforms like LeetCode and GeeksforGeeks, which constantly sharpen my problem-solving mindset.",
  
 "I also have a vision of building AI-powered solutions and creating web applications that address real-world societal problems. Crafting technology that makes life easier and more productive truly excites me.",

  "Outside the tech world, I find balance through meditation, breathing practices (pranayama), yoga, and singing. I also enjoy listening to devotional hymns, which bring me peace and inspiration.",
  "I aspire to contribute my knowledge, skills, and expertise to a reputed organization whose vision aligns with my objective of building impactful technological solutions. My goal is to leverage technology to address real-world challenges, improve the quality of life, and make society healthier and happier—while continuously growing as a software developer in my career.",
  "I am eager to collaborate on innovative projects and open to exciting opportunities that challenge my creativity and technical expertise."
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    
  },
  {
    icon: <RiTailwindCssFill className="text-4xl lg:text-6xl text-white" />,
    name: "Tailwind CSS",
  
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-red-600" />,
    name: "MySQL",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
  },
  {
    icon: <RiJavascriptFill className="text-4xl lg:text-6xl text-sky-700" />,
    name: "JavaScript",
  },
    {
    icon: SiCplusplus({ className: "text-4xl lg:text-6xl text-blue-600" }),
    name: "C++",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/UnnatiSharma7",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/unnati-sharma-27ab0822b/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
