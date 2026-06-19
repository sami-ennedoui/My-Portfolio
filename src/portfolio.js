/* Change this file to get your personal Porfolio */
/* Bilingual (EN / FR): translatable content lives in `en` and `fr` below; the
 * active bundle is chosen at load by getLanguage(). Language-neutral data
 * (settings, social links, icons) is shared. See i18n.js for the toggle. */

import { getLanguage } from "./i18n";

// ──────────────────────────────────────────────────────────────────────────
// Language-neutral settings
// ──────────────────────────────────────────────────────────────────────────
const settings = {
  isSplash: false,
};

const socialMediaLinks = [
  {
    name: "Github",
    icontype: "fab",
    link: "https://github.com/sami-ennedoui",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    icontype: "fab",
    link: "https://www.linkedin.com/in/sami-ennedoui-1347702a5/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "mail",
    icontype: "fas",
    link: "mailto:samiennedoui@proton.me",
    fontAwesomeIcon: "fa-envelope",
    backgroundColor: "#912ed9",
  },
];

const competitiveSites = {
  competitiveSites: [],
};

// Shared, language-neutral icon sets reused across skill blocks.
const PY = [
  {
    skillName: "Python",
    fontAwesomeClassname: "ion-logo-python",
    style: { backgroundColor: "transparent", color: "#3776AB" },
  },
];
const C_BASH = [
  {
    skillName: "The C programming language",
    fontAwesomeClassname: "simple-icons:c",
    style: { backgroundColor: "transparent", color: "#A8B9CC" },
  },
  {
    skillName: "GNU Bash",
    fontAwesomeClassname: "simple-icons:gnubash",
    style: { backgroundColor: "transparent", color: "#4EAA25" },
  },
];

const resumeLink =
  "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing";

// ──────────────────────────────────────────────────────────────────────────
// ENGLISH
// ──────────────────────────────────────────────────────────────────────────
const en = {
  seo: {
    title: "Sami Ennedoui",
    description:
      "ENSEEIHT engineering student entering the ModIA dual-degree (Mathematics, Data & AI). Looking for a Data / AI apprenticeship from September 2026.",
    og: {
      title: "Sami Ennedoui Portfolio",
      type: "website",
      url: "https://sami-ennedoui.github.io/",
    },
  },
  greeting: {
    title: "Sami Ennedoui",
    logo_name: "Samiennedoui",
    nickname: "",
    subTitle:
      "ENSEEIHT engineering student, entering the ModIA dual-degree (Mathematics, Data & AI) this fall. I like building things end to end: machine-learning pipelines, LLM-agent tooling, and embedded systems. I'm looking for a Data / AI apprenticeship from September 2026.",
    resumeLink,
    portfolio_repository: "https://github.com/sami-ennedoui/My-Portfolio",
    githubProfile: "https://github.com/sami-ennedoui",
  },
  skills: {
    data: [
      {
        title: "Machine Learning & Data",
        fileName: "CodeIMG",
        skills: [
          "I design and build end-to-end machine-learning pipelines: feature engineering, leakage-safe evaluation, and model comparison (linear models versus gradient boosting).",
          "I turn models into services, exposing predictions through a FastAPI endpoint, containerised with Docker and wired to CI.",
          "I am comfortable across the scientific Python stack: NumPy, SciPy, pandas, scikit-learn, and Matplotlib.",
        ],
        softwareSkills: PY,
      },
      {
        title: "Software Development & Systems (C, Bash)",
        fileName: "SoftwareIMG",
        skills: [
          "Low-level programming: I write C code to better understand memory management, CPU cycles, and fundamental computer architecture.",
          "Building from scratch: I develop complex logic applications, such as a fully functional retro 8-bit CHIP-8 emulator.",
          "Workflow automation: I use Linux environments and write Bash scripts to automate routine tasks and improve my development workflow.",
        ],
        softwareSkills: C_BASH,
      },
      {
        title: "LLM Tooling & Embedded Systems",
        fileName: "fixingIMG",
        skills: [
          "LLM-agent tooling: I build schema-constrained pipelines that turn messy documents (PDF datasheets) into validated JSON and generated C headers.",
          "Embedded systems: hands-on Battery Management System work on NXP boards (firmware init, CAN, Capella modeling) within the N7 Racing Team.",
          "I collaborate across multidisciplinary engineering teams and integrate work between sub-poles.",
        ],
        softwareSkills: C_BASH,
      },
    ],
  },
  degrees: {
    degrees: [
      {
        title: "Toulouse INP - ENSEEIHT & INSA Toulouse",
        subtitle: "Engineering Degree, transitioning to ModIA (Data & AI)",
        logo_path: "n7logo.png",
        alt_name: "INPT ENSEEIHT",
        duration: "2025 - 2028",
        descriptions: [
          "Currently (1st Year): Electrical Engineering student at ENSEEIHT, with a strong focus on applied mathematics, low-level programming (C), and scientific Python.",
          "Next Fall (Sept 2026): Officially admitted to the ModIA Dual-Degree program, specializing in Machine Learning, Statistical Modeling, and Scientific Computing.",
          "Looking for: A 2-to-3-year apprenticeship (alternance) in Data / AI / Software starting in September 2026 to complement my upcoming ModIA curriculum.",
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
          "Acquired deep knowledge and fundamentals in both maths and physics.",
          "Learned to work efficiently and perform under demanding conditions.",
          "Picked up Python, later applied in my final research project (TIPE) to combine maths and programming.",
        ],
        website_link:
          "https://www.linkedin.com/school/cpge-tetouan/?originalSubdomain=fr",
      },
    ],
  },
  certifications: {
    certifications: [
      {
        title: "Gestion de Projet",
        subtitle: "MOOC, Centrale Lille (Rémi Bachelet)",
        logo_path: "gdp_mooc_logo.svg",
        certificate_link:
          "https://moocgdp.gestiondeprojet.pm/certificates/c9fed50521274dde9ddb8d4bdb34486e",
        alt_name: "Centrale Lille",
        color_code: "#1A5276",
      },
    ],
  },
  experience: {
    title: "Career Development",
    subtitle: "Clubs, internships and summer jobs",
    description:
      "I am interested in the ways hardware and software interact, and I try to understand the field a little better every day through personal projects and my involvement in my school's clubs.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Clubs",
        work: true,
        experiences: [
          {
            title: "Motorsport Pole Representative",
            company: "N7 Racing Team",
            company_url: "",
            logo_path: "n7rt.png",
            duration: "2025 - Present",
            location: "Toulouse, France",
            description:
              "Elected representative of the Motorsport pole: technical arbitration across sub-poles and representation on the board. Technical contributor on the BMS sub-pole: firmware bring-up (NXP HVBMS kit), Eclipse Capella modeling, and CAN bus.",
            color: "#0879bf",
          },
          {
            title: "Founding Member, Board",
            company: "N7 IA (ENSEEIHT AI Club)",
            company_url: "",
            logo_path: "n7logo.png",
            duration: "2026 - Present",
            location: "Toulouse, France",
            description:
              "Co-founded the school's AI club and ran its first meeting. Building a platform to connect students around projects, hackathons, and AI watch.",
            color: "#1A5276",
          },
          {
            title: "Contributor, Trainers Pole",
            company: "N7 Consulting (Junior Enterprise)",
            company_url: "https://www.n7consulting.fr/",
            logo_path: "n7c.png",
            duration: "2025 - Present",
            location: "Toulouse, France",
            description:
              "Volunteer running internal workshops on project management, client relations, and deliverable writing.",
            color: "#000000",
          },
        ],
      },
      {
        title: "Internships",
        experiences: [
          {
            title: "Intern, Generative AI in Teaching",
            company: "ENSEEIHT",
            company_url: "https://www.enseeiht.fr/",
            logo_path: "n7logo.png",
            duration: "June 2026 - July 2026",
            location: "Toulouse, France",
            description:
              "EEEA department. Studying AI-assisted learning of programming (C++/OOP) and co-designing lab materials, with a self-taught ramp-up in C++/OOP.",
            color: "#5B2C6F",
          },
        ],
      },
      {
        title: "Summer Jobs",
        experiences: [
          {
            title: "Barista at a local cafe",
            company: "Local Cafe",
            company_url: "",
            logo_path: "cafe.png",
            duration: "June 2023 - September 2023",
            location: "Tangier, Morocco",
            description:
              "My first summer job. It taught me to communicate with customers and negotiate with suppliers, essential soft skills.",
            color: "#4285F4",
          },
        ],
      },
    ],
  },
  projectsHeader: {
    title: "International Mobility",
    description:
      "I am an international student from Morocco living in France, and I am learning German as my fourth language to widen my opportunities for international mobility.",
    avatar_image_path: "projects_image.svg",
  },
  publicationsHeader: {
    title: "Publications",
    description: "Some of my published articles, blogs and research.",
    avatar_image_path: "projects_image.svg",
  },
  publications: { data: [] },
  contactPageData: {
    contactSection: {
      title: "Contact Me",
      profile_image_path: "me.jpg",
      description:
        "I usually reply within a day. Happy to talk about Data, Machine Learning, embedded software, or an apprenticeship from September 2026.",
    },
    blogSection: {
      title: "Blogs",
      subtitle:
        "I like to document some of my experiences and share technical knowledge.",
      link: "https://github.com/sami-ennedoui",
      avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
      title: "Address",
      subtitle: "Toulouse, France",
      locality: "Toulouse",
      country: "France",
      region: "Occitanie",
      postalCode: "",
      streetAddress: "",
      avatar_image_path: "address_image.svg",
      location_map_link: "https://maps.google.com/?q=Toulouse,France",
    },
    phoneSection: { title: "", subtitle: "" },
  },
  ui: {
    nav: {
      home: "Home",
      education: "Engineering Course",
      experience: "Careers",
      projects: "International Mobility",
      opensource: "CSR/Civic Engagement",
      contact: "Other activities",
    },
    whatIDo: "What I Do?",
    moreProjects: "More Projects",
    myCV: "My CV",
    eduCourseHeading: "Engineering Course",
    eduCourseSub:
      "Engineering student at Toulouse INP - ENSEEIHT, heading into the selective ModIA dual-degree (Modeling, Data & AI), run with INSA Toulouse, from September 2026. My work spans applied mathematics, machine learning, and hands-on software and embedded systems.",
    eduProjectsHeading: "Projects",
    contact: {
      football: "Football",
      footballDesc: "I love playing football.",
      hiking: "Hiking",
      hikingDesc: "I go on hikes sometimes to clear my mind.",
      games: "Games and Esports",
      gamesDesc: "I am also a fan of esports and video games in general.",
    },
  },
};

// ──────────────────────────────────────────────────────────────────────────
// FRANÇAIS
// ──────────────────────────────────────────────────────────────────────────
const fr = {
  seo: {
    title: "Sami Ennedoui",
    description:
      "Élève ingénieur à l'ENSEEIHT, en route vers le double diplôme ModIA (mathématiques, data, IA). À la recherche d'une alternance Data / IA à partir de septembre 2026.",
    og: {
      title: "Portfolio de Sami Ennedoui",
      type: "website",
      url: "https://sami-ennedoui.github.io/",
    },
  },
  greeting: {
    title: "Sami Ennedoui",
    logo_name: "Samiennedoui",
    nickname: "",
    subTitle:
      "Élève ingénieur à l'ENSEEIHT, j'intègre cette rentrée le double diplôme ModIA (mathématiques, data, IA). J'aime construire de bout en bout : pipelines de machine learning, outils à base d'agents LLM et systèmes embarqués. Je recherche une alternance Data / IA à partir de septembre 2026.",
    resumeLink,
    portfolio_repository: "https://github.com/sami-ennedoui/My-Portfolio",
    githubProfile: "https://github.com/sami-ennedoui",
  },
  skills: {
    data: [
      {
        title: "Machine Learning & Data",
        fileName: "CodeIMG",
        skills: [
          "Je conçois et construis des pipelines de machine learning de bout en bout : feature engineering, évaluation sans fuite de données et comparaison de modèles (modèles linéaires contre gradient boosting).",
          "Je transforme les modèles en services : prédictions exposées via une API FastAPI, conteneurisées avec Docker et intégrées à une CI.",
          "Je suis à l'aise avec l'écosystème scientifique Python : NumPy, SciPy, pandas, scikit-learn et Matplotlib.",
        ],
        softwareSkills: PY,
      },
      {
        title: "Développement logiciel & systèmes (C, Bash)",
        fileName: "SoftwareIMG",
        skills: [
          "Programmation bas niveau : j'écris du C pour mieux comprendre la gestion mémoire, les cycles CPU et l'architecture des ordinateurs.",
          "Construire de zéro : je développe des applications à logique complexe, comme un émulateur CHIP-8 8 bits entièrement fonctionnel.",
          "Automatisation : je travaille sous Linux et j'écris des scripts Bash pour automatiser les tâches répétitives et fluidifier mon flux de travail.",
        ],
        softwareSkills: C_BASH,
      },
      {
        title: "Outils LLM & systèmes embarqués",
        fileName: "fixingIMG",
        skills: [
          "Outils à base d'agents LLM : je construis des pipelines contraints par schéma qui transforment des documents bruts (datasheets PDF) en JSON validé et en en-têtes C générés.",
          "Systèmes embarqués : travail concret sur un Battery Management System (cartes NXP : init firmware, CAN, modélisation Capella) au sein de la N7 Racing Team.",
          "Je collabore au sein d'équipes d'ingénierie pluridisciplinaires et fais le lien entre les différents sous-pôles.",
        ],
        softwareSkills: C_BASH,
      },
    ],
  },
  degrees: {
    degrees: [
      {
        title: "Toulouse INP - ENSEEIHT & INSA Toulouse",
        subtitle: "Diplôme d'ingénieur, en route vers ModIA (Data & IA)",
        logo_path: "n7logo.png",
        alt_name: "INPT ENSEEIHT",
        duration: "2025 - 2028",
        descriptions: [
          "Actuellement (1re année) : élève en EEEA à l'ENSEEIHT, avec un fort accent sur les mathématiques appliquées, la programmation bas niveau (C) et le Python scientifique.",
          "À la rentrée (sept. 2026) : admis au double diplôme ModIA, spécialisé en machine learning, modélisation statistique et calcul scientifique.",
          "Recherche : une alternance de 2 à 3 ans en Data / IA / logiciel à partir de septembre 2026, en complément du cursus ModIA.",
        ],
        website_link: "https://www.enseeiht.fr/",
      },
      {
        title: "CPGE Centre - Tétouan",
        subtitle: "Filière Maths-Physique (MP)",
        logo_path: "tet1.png",
        alt_name: "CPGE Centre - Tétouan",
        duration: "2023 - 2025",
        descriptions: [
          "Acquisition de solides fondamentaux en mathématiques et en physique.",
          "Apprentissage du travail efficace et de la performance en environnement exigeant.",
          "Découverte du Python, ensuite mis en pratique dans mon TIPE pour allier mathématiques et programmation.",
        ],
        website_link:
          "https://www.linkedin.com/school/cpge-tetouan/?originalSubdomain=fr",
      },
    ],
  },
  certifications: {
    certifications: [
      {
        title: "Gestion de Projet",
        subtitle: "MOOC, Centrale Lille (Rémi Bachelet)",
        logo_path: "gdp_mooc_logo.svg",
        certificate_link:
          "https://moocgdp.gestiondeprojet.pm/certificates/c9fed50521274dde9ddb8d4bdb34486e",
        alt_name: "Centrale Lille",
        color_code: "#1A5276",
      },
    ],
  },
  experience: {
    title: "Parcours & engagements",
    subtitle: "Clubs, stages et jobs d'été",
    description:
      "Je m'intéresse à la façon dont le matériel et le logiciel interagissent, et je cherche à mieux comprendre ce domaine chaque jour à travers mes projets personnels et mon implication dans les clubs de mon école.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Clubs",
        work: true,
        experiences: [
          {
            title: "Représentant du Pôle Motorisation",
            company: "N7 Racing Team",
            company_url: "",
            logo_path: "n7rt.png",
            duration: "2025 - aujourd'hui",
            location: "Toulouse, France",
            description:
              "Représentant élu du Pôle Motorisation : arbitrage technique inter-sous-pôles et représentation au bureau. Contributeur technique sur le sous-pôle BMS : initialisation firmware (kit NXP HVBMS), modélisation Eclipse Capella et bus CAN.",
            color: "#0879bf",
          },
          {
            title: "Membre fondateur, bureau",
            company: "N7 IA (Club IA de l'ENSEEIHT)",
            company_url: "",
            logo_path: "n7logo.png",
            duration: "2026 - aujourd'hui",
            location: "Toulouse, France",
            description:
              "Co-fondateur du club IA de l'école, première réunion animée. Construction d'une plateforme pour relier les élèves autour de projets, hackathons et veille en IA.",
            color: "#1A5276",
          },
          {
            title: "Pôle Intervenants",
            company: "N7 Consulting (Junior-Entreprise)",
            company_url: "https://www.n7consulting.fr/",
            logo_path: "n7c.png",
            duration: "2025 - aujourd'hui",
            location: "Toulouse, France",
            description:
              "Bénévole : animation de formations internes en gestion de projet, relation client et rédaction de livrables.",
            color: "#000000",
          },
        ],
      },
      {
        title: "Stages",
        experiences: [
          {
            title: "Stagiaire, IA générative en pédagogie",
            company: "ENSEEIHT",
            company_url: "https://www.enseeiht.fr/",
            logo_path: "n7logo.png",
            duration: "Juin 2026 - juillet 2026",
            location: "Toulouse, France",
            description:
              "Département EEEA. Étude de l'apprentissage de la programmation (C++/POO) assisté par IA générative et co-conception de supports de TP, avec montée en compétences C++/POO en autoformation.",
            color: "#5B2C6F",
          },
        ],
      },
      {
        title: "Jobs d'été",
        experiences: [
          {
            title: "Barista dans un café",
            company: "Café local",
            company_url: "",
            logo_path: "cafe.png",
            duration: "Juin 2023 - septembre 2023",
            location: "Tanger, Maroc",
            description:
              "Mon premier job d'été. Il m'a appris à communiquer avec les clients et à négocier avec les fournisseurs, des compétences humaines essentielles.",
            color: "#4285F4",
          },
        ],
      },
    ],
  },
  projectsHeader: {
    title: "Mobilité internationale",
    description:
      "Étudiant international originaire du Maroc et installé en France, j'apprends actuellement l'allemand comme quatrième langue pour élargir mes possibilités de mobilité internationale.",
    avatar_image_path: "projects_image.svg",
  },
  publicationsHeader: {
    title: "Publications",
    description: "Quelques articles, billets et travaux publiés.",
    avatar_image_path: "projects_image.svg",
  },
  publications: { data: [] },
  contactPageData: {
    contactSection: {
      title: "Me contacter",
      profile_image_path: "me.jpg",
      description:
        "Je réponds généralement sous 24 h. Avec plaisir pour échanger sur la data, le machine learning, le logiciel embarqué ou une alternance à partir de septembre 2026.",
    },
    blogSection: {
      title: "Blog",
      subtitle:
        "J'aime documenter certaines de mes expériences et partager des connaissances techniques.",
      link: "https://github.com/sami-ennedoui",
      avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
      title: "Adresse",
      subtitle: "Toulouse, France",
      locality: "Toulouse",
      country: "France",
      region: "Occitanie",
      postalCode: "",
      streetAddress: "",
      avatar_image_path: "address_image.svg",
      location_map_link: "https://maps.google.com/?q=Toulouse,France",
    },
    phoneSection: { title: "", subtitle: "" },
  },
  ui: {
    nav: {
      home: "Accueil",
      education: "Cursus ingénieur",
      experience: "Parcours",
      projects: "Mobilité internationale",
      opensource: "Engagement citoyen",
      contact: "Autres activités",
    },
    whatIDo: "Ce que je fais",
    moreProjects: "Plus de projets",
    myCV: "Mon CV",
    eduCourseHeading: "Cursus ingénieur",
    eduCourseSub:
      "Élève ingénieur à Toulouse INP - ENSEEIHT, j'intègre en septembre 2026 le double diplôme sélectif ModIA (modélisation, data, IA), mené avec l'INSA Toulouse. Mon travail couvre les mathématiques appliquées, le machine learning et le développement logiciel et embarqué.",
    eduProjectsHeading: "Projets",
    contact: {
      football: "Football",
      footballDesc: "J'adore jouer au football.",
      hiking: "Randonnée",
      hikingDesc: "Je pars parfois en randonnée pour m'aérer l'esprit.",
      games: "Jeux vidéo & e-sport",
      gamesDesc: "Je suis aussi fan d'e-sport et de jeux vidéo en général.",
    },
  },
};

// ──────────────────────────────────────────────────────────────────────────
// Active language selection + exports (names unchanged for consumers)
// ──────────────────────────────────────────────────────────────────────────
const language = getLanguage();
const t = language === "fr" ? fr : en;

const seo = t.seo;
const greeting = t.greeting;
const skills = t.skills;
const degrees = t.degrees;
const certifications = t.certifications;
const experience = t.experience;
const projectsHeader = t.projectsHeader;
const publicationsHeader = t.publicationsHeader;
const publications = t.publications;
const contactPageData = t.contactPageData;
const ui = t.ui;

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
  ui,
  language,
};
