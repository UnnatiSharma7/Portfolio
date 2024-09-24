import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import { RiReactjsLine } from "react-icons/ri";
  import { RiTailwindCssFill } from "react-icons/ri";
  import { SiMongodb } from "react-icons/si";
  import { SiMysql } from "react-icons/si";
  import { FaNodeJs } from "react-icons/fa";
  import { RiJavascriptFill } from "react-icons/ri";
  
  import image1 from "../assets/project1.jpeg";
  import image2 from "../assets/project2.jpeg";
  import image3 from "../assets/project3.jpeg";
  import image4 from "../assets/project4.jpeg";
  import image5 from "../assets/project5.jpeg";
  import image6 from "../assets/project6.jpeg";
  

  export const NAVIGATION_LINKS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];
  
  
  export const ABOUT = {
    
      text1:"I create dynamic, responsive websites that blend creativity with efficiency",
    
      text2:"Hello! I'm Robert Butcher, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
  };
  
  export const PROFILE = {
    name: "Robert Butcher",
    info: "Full-stack developer with a flair for graphic design.",
  };

  export const EDUCATION = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Rustamji Institute of Technology, BSF Academy",
      duration: "October 2021-2025",
      description:
        "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript. Completed a senior project on developing an Job-portal platform.",
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
      title: "E-commerce Platform",
      subtitle:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
      image: image1,
    },
    {  id:2,
      title: "Social Media App",
      subtitle:
        "A social media application developed using Next.js and Firebase.",
      image: image2,
    },
    {  id:3,
      title: "Project Management Tool",
      subtitle: "A project management tool built with Django and PostgreSQL.",
      image: image3,
    },
    {  id:4,
      title: "Personal Portfolio",
      subtitle:
        "A personal portfolio website designed with HTML, CSS, and JavaScript.",
      image: image4,
    },
    {  id:5,
      title: "Weather Dashboard",
      subtitle:
        "A weather dashboard application built with Vue.js and Express.js.",
      image: image5,
    },
    { id:6,
      title: "Blog Platform",
      subtitle:
        "A blogging platform developed with Ruby on Rails and PostgreSQL.",
      image: image6,
    },
   
  ];
  
  export const BIO = [
    "Hello! I'm Unnati Sharma, a Computer Science Engineering undergraduate from RJIT, Taknepur. I have a strong passion for technology and innovation, which has driven me to work on various projects and actively participate in extracurricular activities throughout my academic journey.",

   " One of the key projects I worked on is a Job Search Portal. This project is designed to connect job seekers with employers efficiently. The portal includes features such as advanced search filters, resume uploads, job recommendations, and an intuitive user interface. It is built using a combination of front-end technologies like HTML, CSS, JavaScript, and React, and back-end technologies including Node.js and MongoDB. The goal was to create a seamless and user-friendly platform that helps users find job opportunities that best match their skills and preferences.",
    
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
      experience: "2+ years",
    },
    {
      icon: <RiTailwindCssFill className="text-4xl lg:text-6xl text-white" />,
      name: "Tailwind CSS",
      experience: "1+ year",
    },
    {
      icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <SiMysql className="text-4xl lg:text-6xl text-red-600" />,
      name: "MySQL",
      experience: "1+ year",
    },
    {
      icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
      name: "Node.js",
      experience: "2+ years",
    },
    {
      icon: <RiJavascriptFill className="text-4xl lg:text-6xl text-sky-700" />,
      name: "JavaScript",
      experience: "1+ year",
    },
  ];
  
  
  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];
