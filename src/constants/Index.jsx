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

import image1 from "../assets/jobPortal.png";
import image2 from "../assets/chatAI.png";

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
      "Focused on web development, C++. Actively involved in college clubs, where I developed several web applications using HTML, CSS, JavaScript.My current CGPA is 8.49 ",
  },
  {
    degree: "PCM",
  institution: "Sister Nivedita Higher Secondary School",
    duration: "October 2019-2020",
    description:
      "Secured 2nd Rank in district Gwalior with 95%.",
  }
];


export const PROJECTS = [
  { id:1,
    title: "Job Portal",
    subtitle:
      "A full-stack job platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {  id:2,
    title: "Chat-AI",
    subtitle:
      "It's a clone of Chat-GPT built using MERN stack and I have utilized Gemini AI in it.",
    image: image2,
  },
 
];

export const BIO = [
  "Hello! I'm Unnati Sharma, a Computer Science Engineering undergraduate from RJIT, Taknepur. I have a strong passion for technology and innovation, which has driven me to work on various projects and actively participate in extracurricular activities throughout my academic journey.",
  
 " In addition to my academic projects, I have been an active member of the Innovators Club at my college. In this role, I have conducted several lectures on front-end technologies for junior students, helping them understand and apply the latest trends and best practices in web development.",
  
  "Furthermore, I have had the opportunity to be a guest lecturer at the BSF Academy, where I educated BSF personnel on the importance of hackathons. I emphasized how participating in hackathons can enhance problem-solving skills, encourage teamwork, and foster innovative thinking, which are crucial in their professional development.",
  
 " Academically, I have also achieved notable success. I secured the 2nd rank in my district, Gwalior, in my 12th board examination. At RJIT, I am proud to be among the top performers in the CSE wing, reflecting my dedication and commitment to my studies.",
  
  "Outside of academics and technology, I have a deep interest in reading the Shrimad Bhagavad Gita and practicing meditation. These hobbies help me maintain a balanced and focused mindset, providing a source of spiritual growth and inner peace.",
  "Overall, I am a proactive and enthusiastic individual, constantly seeking to learn and grow in the field of computer science and technology. My experiences have equipped me with a solid foundation in both theoretical knowledge and practical application, preparing me well for future challenges and opportunities in the tech industry."
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
