import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    // Bookstore,
  } from "../assets";

  // import img from '../assets/projectsImg/BookStore.png'

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    // {
    //   title: "MERN",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd2rMcfI56SZEenhvautbZl_xUsPSHaktNw&s",
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Web Intern",
      company_name: "Info Tech",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABxUlEQVR4Ab2RA5ceMQAA+09q2+5Dbdv2U23btm3btm0bp/VmM7f5zvZNrIlyAK+Jh5DgCLDciGSLiL5E+KQE4o8mWXHTZsQJkx57DVpu1am/QaP22oik6i38vu57DIb7c5bdsPkZFmEMCO59FeSfG0pBP1VcFkbtdRqNN+m02BKRmmzWqeWL1FjBeaHkmR3K9U8iRqA7knf/PNRJgjSXf0EmwpP4Ecf1CNNsdEug2VLNUXNVPUYAEUgpWb34DJ2bL+bls28oXj3/Ts92Kzhx+AHxSCjwPMnEEbupUWo8d268RXH/9ntK5x3O+hXnUxYofv0M5umjzzi2i5Rw89obyuUfyZqlZ3EdoTZJXrB76w0G91zP929BHN53l2a1ZlMy11DqVplKjzbLeXjvY/KCOVMOU7HwaN6+/smls8/p03EVpXIPo02D+YwbulO9TfKCedOOUKXYWN68/BHxBnc+UK7ASDasvEAM2St4rx4x/YJnj79QsdAo5k8/qn5ApRQecfLhwILXL7+jCAk26O6/ftXiY+nfZQ1nTjxOXnDyyEOmjdvPrx/BRPHqxXcmj9pL306rOHbwfgLBa1ImcHTHEUgpIYZP4el6hiTboCJiAAAAAElFTkSuQmCC",
      iconBg: "#383E56",
      date: "june 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "MERN Stack training",
      company_name: "Shreyians Coding School",
      icon: "https://ik.imagekit.io/sheryians/Sheryians_logo_EzwgcppnD",
      iconBg: "#E6DEDD",
      date: "Sep 2023 - June 2024",
      points: [
        "From there, I learned the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js ",
        "They taught me about the technology stack and helped me create projects using HTML, CSS, and JavaScript for the frontend.",
        "For the backend, they guided me in creating projects using Node.js, Express.js, and EJS (Embedded JavaScript) templates.",
        "Finally, they helped me integrate and use React.js for building dynamic user interfaces.",
      ],
    },
    {
      title: "Frontend Intern",
      company_name: "TDP-VISTA",
      icon: 'https://www.tdpvista.in/_next/image?url=%2Fassets%2Flogo.png&w=640&q=75',
      iconBg: "#383E56",
      date: "June 2024",
      points: [
        "Correcting front-end errors and making necessary UI changes to improve user experience and functionality.",
        "Creating and enhancing the UI for various sites, ensuring they are visually appealing and user-friendly.",
        "Developing a complete website for MarineVista, a subcompany of TDP Vista, using modern front-end technologies such as HTML, CSS, Tailwind, Bootstrap, JavaScript, Next.js, and React.",
        "Utilizing front-end technologies to build responsive and interactive web applications, ensuring compatibility across different browsers and devices.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "VS CODE clone",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "EJS",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "https://bharatsiddharth.github.io/TDP-Vista-clone/",
      source_code_link: "https://github.com/Bharatsiddharth/file-handling---vs-code-simple-",
    },
    {
      name: "BookStore",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
      ],
      image: 'https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      source_code_link: "https://github.com/Bharatsiddharth/Bookstore-nodejs",
    },

    {
      name: "Social Media",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "https://bharatsiddharth.github.io/TDP-Vista-clone/",
      source_code_link: "https://github.com/Bharatsiddharth/Social-Media-Application",
    },
    
  ];


  const FrontEndProjects = [
    {
      name: "Brain Space",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "blue-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "https://bharatsiddharth.github.io/TDP-Vista-clone/",
      source_code_link: "https://github.com/Bharatsiddharth/we-think-elastic",
    },
    {
      name: "We Think Elastic",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "blue-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "https://bharatsiddharth.github.io/TDP-Vista-clone/",
      source_code_link: "https://github.com/Bharatsiddharth/we-think-elastic",
    },

    {
      name: "Kettle",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "blue-text-gradient",
        },
      ],
      image: "/src/assets/projectImage/kettle.png",
      liveLink: "https://kettle-eta.vercel.app/",
      source_code_link: "https://github.com/Bharatsiddharth/kettle",
    },
    {
      name: "TDP Vista",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "blue-text-gradient",
        },
      ],
      image: "/src/assets/projectImage/tdp.png",
      source_code_link: "https://github.com/Bharatsiddharth/TDP-Vista-clone",
      liveLink: "https://bharatsiddharth.github.io/TDP-Vista-clone/",
    },
    {
      name: "Lazarev",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "blue-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "https://bharatsiddharth.github.io/TDP-Vista-clone/",
      source_code_link: "https://github.com/Bharatsiddharth/LAZAREV--frontend-clone",
    },
    {
      name: "Significo",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "blue-text-gradient",
        },
      ],
      image: "https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "https://bharatsiddharth.github.io/TDP-Vista-clone/",
      source_code_link: "https://github.com/Bharatsiddharth/Significo-frontend-clone",
    },

   
    
  ];


  const Nextjsprojects = [
    {
      name: "Popper",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Gsap",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://images.unsplash.com/photo-1720649870436-5e772e52b830?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      source_code_link: "https://github.com/Bharatsiddharth/next-first-project",
    },
    {
      name: "Creator ants",
      description:
        "Built a responsive and modern static website for a client using Next.js and Tailwind CSS. The site showcases services and brand identity with optimized performance and clean design.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "AOS",
          color: "pink-text-gradient",
        },
      ],
      image: '/src/assets/projectImage/image.png',
      liveLink:"https://creator-ants.vercel.app/",
      source_code_link: "https://github.com/Bharatsiddharth/next-first-project",
    },
    {
      name: "Premium Asset Solutions",
      description:
        "Built a responsive and modern static website for a client using Next.js and Tailwind CSS. The site showcases services and brand identity with optimized performance and clean design.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: '/src/assets/projectImage/premium.png',
      liveLink:"https://ai-website-gilt.vercel.app/",
      source_code_link: "https://github.com/Bharatsiddharth/AI_website",
    },

    {
      name: "Movies App",
      description:
        "Built a responsive and modern static website for a client using Next.js and Tailwind CSS. The site showcases services and brand identity with optimized performance and clean design.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "axios",
          color: "pink-text-gradient",
        },
      ],
      image: '/src/assets/projectImage/premium.png',
      liveLink:"https://movie-app-dusky-one.vercel.app/",
      source_code_link: "https://github.com/Bharatsiddharth/Movie-App",
    },


     {
      name: "Botique",
      description:
        "Built a responsive and modern static website for a client using Next.js and Tailwind CSS. The site showcases services and brand identity with optimized performance and clean design.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "axios",
          color: "pink-text-gradient",
        },
      ],
      image: '/src/assets/projectImage/premium.png',
      liveLink:"https://botique-website-two.vercel.app/",
      source_code_link: "https://github.com/Bharatsiddharth/BotiqueWebsite",
    },
    
  ];


  const MERN = [
    {
      name: "Udyogi",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "Nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "Express js",
          color: "green-text-gradient",
        },
      ],
      image: '/src/assets/projectImage/udyogi.png',
      source_code_link: "https://github.com/Bharatsiddharth/next-first-project",
    },
  ]
  
  export { services, technologies, experiences, testimonials, projects, FrontEndProjects,Nextjsprojects };