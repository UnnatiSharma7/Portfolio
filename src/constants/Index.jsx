import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import { RiReactjsLine } from "react-icons/ri";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiMongodb } from "react-icons/si";
  import { DiRedis } from "react-icons/di";
  import { FaNodeJs } from "react-icons/fa";
  import { BiLogoPostgresql } from "react-icons/bi";
  
  import image1 from "../assets/project1.jpeg";
  import image2 from "../assets/project2.jpeg";
  import image3 from "../assets/project3.jpeg";
  import image4 from "../assets/project4.jpeg";
  import image5 from "../assets/project5.jpeg";
  import image6 from "../assets/project6.jpeg";
  import image7 from "../assets/project7.jpeg";
  import image8 from "../assets/project8.jpeg";
  
  import user1 from "../assets/profile-pictures/user1.jpg";
  import user2 from "../assets/profile-pictures/user2.jpg";
  import user3 from "../assets/profile-pictures/user3.jpg";
  import user4 from "../assets/profile-pictures/user4.jpg";
  
  export const NAVIGATION_LINKS = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];
  
  export const PROFILE = {
    name: "Unnati Sharma",
    info: "Full-stack developer with a flair for graphic design.",
  };
  
  export const ABOUT = {
    
      text1:"I create dynamic, responsive websites that blend creativity with efficiency",
    
      text2:"Hello! I'm Robert Butcher, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
  };
  
  export const EXPERIENCES = [
    {
      title: "Lead Frontend Developer",
      company: "Innovative Tech Solutions",
      duration: "July 2020 - Present",
      description:
        "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
    },
    {
      title: "Frontend Engineer",
      company: "Digital Creations",
      duration: "February 2016 - June 2020",
      description:
        "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
    },
    {
      title: "Junior Web Developer",
      company: "Bright Future Technologies",
      duration: "August 2014 - January 2016",
      description:
        "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
    },
  ];
  
  export const EDUCATION = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      duration: "September 2012 - June 2014",
      description:
        "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University of California, Berkeley",
      duration: "September 2008 - June 2012",
      description:
        "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
    },
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
    {  id:7,
      title: "Fitness Tracker",
      subtitle: "A fitness tracking app created using Flutter and Firebase.",
      image: image7,
    },
    {  id:8,
      title: "Recipe Finder",
      subtitle: "A recipe finder application developed with Angular and Node.js.",
      image: image8,
    },
  ];
  
  export const BIO = [
    "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
    "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
    "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
  ];

  export const SKILLS = [
    {
      icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
      name: "React",
      experience: "2+ years",
    },
    {
      icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
      name: "Next.js",
      experience: "1+ year",
    },
    {
      icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
      name: "Redis",
      experience: "1+ year",
    },
    {
      icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
      name: "Node.js",
      experience: "2+ years",
    },
    {
      icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
      name: "PostgreSQL",
      experience: "1+ year",
    },
  ];
  
  export const ACHIEVEMENT = {
    title: "International Hackaton - Tokyo",
    award: "Gold Medalist - 2024",
    description:
      "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
  };
  
  export const TESTIMONIALS = [
    {
      name: "Emily Johnson",
      title: "CEO, Tech Innovators",
      quote:
        "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
      image: user1,
    },
    {
      name: "Michael Lee",
      title: "CTO, Creative Minds",
      quote:
        "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
      image: user2,
    },
    {
      name: "Sophia Martinez",
      title: "Lead Developer, Digital Solutions",
      quote:
        "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
      image: user3,
    },
    {
      name: "Daniel Thompson",
      title: "Project Manager, InnovateX",
      quote:
        "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
      image: user4,
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
