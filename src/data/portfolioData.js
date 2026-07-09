// ============================================================
// portfolioData.js — Centralized configuration for Sai Kumar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Sai Kumar",
  firstName: "Sai Kumar",
  brandName: "Sai Kumar",
  title: "Full Stack Java Developer",
  location: "Raleigh, NC",
  phone: "(219) 316-1376",
  emails: {
    primary: "tsaikumar557@gmail.com",
  },
  summary:
    "Full Stack Java Developer with 7+ years of experience designing, developing, and maintaining scalable, enterprise-grade web applications using Java, Spring Boot, Microservices, React, and Angular across AWS and Azure cloud platforms.",
  resumeUrl: "/Sai_Kumar_Java_Resume.pdf",
};

// Social links intentionally left empty until real profile URLs are provided.
// Components conditionally render these icons/links only when a value is set.
export const socialLinks = {
  github: "",
  linkedin: "",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Sai Kumar",
  titleHighlight: "Full Stack Java Developer",
  subtitle:
    "I build scalable, enterprise-grade applications using Java, Spring Boot, Microservices, React, and Angular across AWS and Azure.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:tsaikumar557@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Sai Kumar,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Sai_Kumar_Java_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sai Kumar</span>, a Full Stack Java Developer based in Raleigh, NC, with 7+ years of experience designing and building scalable, secure, high-performing enterprise applications for organizations like Paychex, JPMorgan Chase, and Blue Cross Blue Shield.`,
  techStack: ["Java", "Spring Boot", "AWS Cloud"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn requirements into production-grade applications",
  description:
    "I follow a structured, agile, and highly technical approach to deliver robust, scalable enterprise applications from the ground up.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing requirements, understanding system constraints, and aligning with stakeholders across the full SDLC before writing a line of code.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting scalable microservices and clean, maintainable systems using proven J2EE design patterns and cloud-native principles.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building robust Spring Boot backends and responsive React/Angular frontends with rigorous test-driven development.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "CI/CD pipelines, containerized deployments on AWS/Azure, and ongoing production support to keep systems fast, secure, and reliable.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data — derived from resume
export const technicalSkills = {
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 70 },
        { name: "PL/SQL", level: 85 },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 88 },
        { name: "Angular / AngularJS", level: 88 },
        { name: "HTML5 / CSS3", level: 90 },
        { name: "Bootstrap / jQuery", level: 85 }
      ]
    },
    {
      title: "Backend & Microservices",
      skills: [
        { name: "Spring Boot / Spring MVC", level: 95 },
        { name: "Hibernate / Spring Data JPA", level: 90 },
        { name: "REST & SOAP Web Services", level: 92 },
        { name: "Kafka / RabbitMQ", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, Lambda, RDS)", level: 88 },
        { name: "Azure", level: 78 },
        { name: "Docker / Kubernetes", level: 85 },
        { name: "Jenkins CI/CD", level: 88 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "Oracle / PL-SQL", level: 88 },
        { name: "PostgreSQL / MySQL", level: 85 },
        { name: "MongoDB / Cassandra", level: 82 },
        { name: "DynamoDB", level: 78 }
      ]
    },
    {
      title: "Testing & Tools",
      skills: [
        { name: "JUnit / Mockito", level: 90 },
        { name: "Selenium", level: 80 },
        { name: "Maven / Ant", level: 88 },
        { name: "Git / Postman / JIRA", level: 90 }
      ]
    }
  ]
};

export const projects = [
  {
    id: "microservices-modernization",
    number: "01",
    badge: "🚀 Enterprise Modernization",
    title: "Enterprise Microservices Modernization",
    description:
      "Led the upgrade of a large-scale Spring Boot microservices ecosystem — migrating from Java 8 to Java 17, Spring Boot 2.7 to 3.x, and JUnit 4 to JUnit 5. Converted legacy SOAP endpoints to REST, introduced Kafka and RabbitMQ for asynchronous inter-service messaging, and containerized deployments on OpenShift, improving application performance by 50%.",
    techTags: [
      "Java 17",
      "Spring Boot",
      "Kafka",
      "RabbitMQ",
      "OpenShift",
      "Docker",
      "Jenkins",
      "GraphQL",
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "schema-visualization-platform",
    number: "02",
    badge: null,
    title: "Schema Visualization & Governance Platform",
    description:
      "Built a custom Maven/Liquibase schema management plugin adopted across multiple departments, paired with a React-based visualization application that maps relationships between microservice domains in real time using Kafka and an Avro schema registry. Secured with OAuth 2.0 SSO via Ping Federate.",
    techTags: ["React", "Spring Boot", "Kafka", "Avro", "AWS EKS", "PostgreSQL", "OAuth 2.0"],
    links: {
      github: null,
    },
    isFlagship: false,
  },
  {
    id: "provider-screening-platform",
    number: "03",
    badge: null,
    title: "Advanced Provider Screening Platform",
    description:
      "Developed a RESTful RFP microservice with Spring Boot and Spring MVC, backed by a React/Redux single-page application for CMS provider network operations. Designed a highly available AWS architecture (EC2, S3, RDS, Lambda) and implemented Okta-based authentication across environments.",
    techTags: ["React", "Redux", "Spring Boot", "MongoDB", "AWS", "Oracle", "Okta"],
    links: {
      github: null,
    },
    isFlagship: false,
  },
];

// Professional Experience — real employers from resume
export const internshipsList = [
  {
    organization: "Paychex Inc., Rochester",
    role: "Sr. Java/UI Developer",
    duration: "Sep 2022 – Present",
    skills: [
      "Led Java 8 → 17 and Spring Boot 2.7 → 3.x upgrade across microservices",
      "Migrated SOAP endpoints to REST APIs, documented with Swagger",
      "Implemented Kafka & RabbitMQ for real-time inter-service messaging",
      "Improved application performance by 50% through bottleneck analysis",
    ],
    tech: ["Java", "Spring Boot", "Angular JS", "Kafka", "RabbitMQ", "OpenShift", "Docker", "Jenkins"],
  },
  {
    organization: "JP Morgan Chase & Co, Chicago",
    role: "Sr. Java/J2EE Developer",
    duration: "Apr 2021 – Jun 2022",
    skills: [
      "Built a custom Maven/Liquibase schema management plugin adopted org-wide",
      "Developed a React-based schema visualization platform integrated with Kafka/Avro",
      "Implemented OAuth 2.0 SSO via Ping Federate for enterprise web services",
      "Deployed microservices on AWS EKS with Jenkins CI/CD on Kubernetes",
    ],
    tech: ["Java", "Spring Boot", "React", "Kafka", "AWS", "Kubernetes", "PostgreSQL"],
  },
  {
    organization: "NIPR, Kansas",
    role: "Sr. Java/J2EE Developer",
    duration: "Mar 2019 – Mar 2021",
    skills: [
      "Built Single Page Applications with Angular 8 and Spring Boot microservices",
      "Enabled service discovery with Netflix Eureka and a Zuul API Gateway",
      "Secured REST endpoints with Spring Security & OAuth 2.0",
      "Automated CI/CD pipelines with Jenkins and managed code quality with Sonar",
    ],
    tech: ["Java", "Angular", "Spring Boot", "Hibernate", "AWS", "Kafka", "Jenkins", "Oracle"],
  },
  {
    organization: "Aprima Medical, Richardson, TX",
    role: "Sr. Java/J2EE Developer",
    duration: "Feb 2018 – Feb 2019",
    skills: [
      "Migrated Angular 4 controllers to Angular 6 components for better performance",
      "Designed REST resource URIs with Swagger for practice management APIs",
      "Achieved 95% test coverage using Mockito, JaCoCo, and H2 in-memory testing",
      "Containerized services with Docker, orchestrated via Docker Swarm/Kubernetes",
    ],
    tech: ["Java 1.8", "Angular", "Spring Boot", "Spring JPA", "Cassandra", "PostgreSQL", "Azure", "Okta"],
  },
  {
    organization: "Blue Cross Blue Shield, Kansas City, MO",
    role: "Mid-level Java Developer",
    duration: "Nov 2016 – Jan 2018",
    skills: [
      "Built a RESTful RFP microservice using Spring Boot & Spring MVC",
      "Developed a React/Redux SPA for the Advanced Provider Screening platform",
      "Designed a highly available AWS architecture (EC2, S3, RDS, Lambda)",
      "Implemented Okta-based authentication across sandbox environments",
    ],
    tech: ["Java", "React", "Redux", "Spring Boot", "MongoDB", "AWS", "Oracle", "Selenium"],
  },
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering challenges into clean, logical, and modular solutions." },
  { name: "Communication", icon: "💬", desc: "Clear, concise interactions across offshore-onsite teams, stakeholders, and business partners." },
  { name: "Team Leadership", icon: "👑", desc: "Leading small teams and coordinating as an Offshore–Onsite point of contact on delivery-critical projects." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks and tools — from Spring Boot 3 to GraphQL to Kubernetes." },
  { name: "Agile Collaboration", icon: "🤝", desc: "Deep experience in Agile/Scrum methodology, sprint planning, and cross-functional delivery." },
  { name: "Time Management", icon: "⏰", desc: "Balancing production support, feature delivery, and sprint goals under tight deadlines." },
  { name: "Mentorship", icon: "🎓", desc: "Guiding teams through major upgrades and migrations while maintaining system stability." },
  { name: "Ownership", icon: "🎯", desc: "End-to-end accountability from requirements gathering through deployment and production support." }
];

export const education = {
  items: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Governors State University",
      icon: "🎓",
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "JNTU",
      icon: "📘",
    },
  ],
};

export const footerContent = {
  taglines: [
    "Software Engineering & Web Dev",
    "Java · Spring Boot · React",
    "Full Stack Enterprise Applications",
  ],
  credential: "7+ Years · Full Stack Java Developer",
  copyright: `© ${new Date().getFullYear()} Sai Kumar | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
