/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sami Ennedoui",
  description:
    " A third year electrical engineering student, passionate about electronics and embedded software.",
  og: {
    title: "Sami Ennedoui Portfolio",
    type: "website",
    url: "http://samiennedoui.com/",
  },
};

//Home Page
const greeting = {
  title: "Sami Ennedoui",
  logo_name: "Samiennedoui",
  nickname: "",
  subTitle:
    " Third year electrical engineering student, passionate about electronics and embedded software.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/sami-ennedoui/My-Portfolio",
  githubProfile: "https://github.com/sami-ennedoui",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sami-ennedoui",
  // linkedin: "https://www.linkedin.com/in/sami-ennedoui-1347702a5/",
  // gmail: "samiennedoui@proton.me"
  {
    name: "Github",
    icontype: "fab",
    link: "https://github.com/sami-ennedoui",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    icontype: "fab",
    link: "https://www.linkedin.com/in/sami-ennedoui-1347702a5/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "mail",
    icontype: "fas",
    link: "mailto:samiennedoui@proton.me",
    fontAwesomeIcon: "fa-envelope",
    backgroundColor: "#912ed9",
  },
];

const skills = {
  data: [
    {
      title: "Programming",
      fileName: "CodeIMG",
      skills: [
        "⚡ Building small-scale projects using Bash and python scripting",
        "⚡ Learning to program using low level languages.",
        "⚡ Basics in Hardware Description Languages",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "The C programming language",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            backgroundColor: "transparent",
            color: "#A8B9CC",
          },
        },
        {
          skillName: "GNU Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            backgroundColor: "transparent",
            color: "#4EAA25",
          },
        },
        {
          skillName: "Verilog",
          imageSrc: "verilog.png",
        },
      ],
    },
    {
      title: "Hardware-Software Integration",
      fileName: "SoftwareIMG",
      skills: [
        "⚡ Using Vivado for FPGA design including writing Verilog modules, creating testbenches, and running simulations to validate circuit behavior.",
        "⚡ Learning how to integrate simple firmware with FPGA configurations for embedded system projects.",
        "⚡ Continuously building knowledge by experimenting with embedded systems concepts and tools.",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Toulouse INP - ENSEEIHT",
      subtitle:
        " Electronics Electrical Energy and Automation (3EA) departement ",
      logo_path: "n7logo.png",
      alt_name: "INPT ENSEEIHT",
      duration: "2025 - now",
      descriptions: [
        "⚡ I am currently studying the basics of electrical engineering.",
        "⚡ I am also working on various projects on my own to gain more practical knowledge in the fields that interest me the most.",
      ],
      website_link: "https://www.enseeiht.fr/",
    },
    {
      title: "CPGE Centre - Tétouan",
      subtitle: "Math and Physics major",
      logo_path: "tet1.png",
      alt_name: "CPGE Centre - Tétouan",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Acquired deep knowledge and fundementals in both maths and physics.",
        "⚡ Learned to work efficiently and flourish in stressful environemnts. ",
        "⚡ Acquired basic knowledge in the Python programming language which I later applied in my final Project to combine my knowledge in math and programming.",
      ],
      website_link:
        "https://www.linkedin.com/school/cpge-tetouan/?originalSubdomain=fr",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Carrer Developpement",
  subtitle: "Clubs, internships and summer jobs",
  description:
    "I am interested in the ways hardware and software intarct together and I am aiming to understand this field a little better everyday through personnal projects and my cooperation with members of the clubs at my school.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Clubs",
      work: true,
      experiences: [
        {
          title: "Contributor at N7 Consulting",
          company: "N7 Consulting",
          company_url: "https://www.n7consulting.fr/",
          logo_path: "n7c.png",
          duration: "October 2025 - Present",
          location: "Toulouse, France.",
          description:
            "By being a contributor at N7 Consulting I can work on projects for real clients and gain more experience in the professional world.",
          color: "#000000",
        },
        {
          title: "Member of the N7 Racing Team",
          company: "N7 Racing Team",
          company_url: "",
          logo_path: "n7rt.png",
          duration: "October 2025 - Present",
          location: "Toulouse, France",
          description:
            "I am working alongside other fellow engineering students in the data and electronics departement to help create a racing car for the Formula student France 2026.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Summer Jobs",
      experiences: [
        {
          title: "Barista at local cafe",
          company: "Local Cafe",
          company_url: "",
          logo_path: "cafe.png",
          duration: "June 2023 - September 2023",
          location: "Tangier, Morocco",
          description:
            "My first Summer Job. It gave me the opportunity to learn how to communicate with customers and negotiate with distributors which are vital soft skills for any Job.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "International Mobility",
  description:
    "I am an international student from Morocco currently living in France and I am currently learning German as my Fourth language so I can expand my opportunities for international mobility.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
