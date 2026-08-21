export const personalInfo = {
  name: "Rahul Batham",
  title: "Full-Stack Developer",
  location: "Gwalior, India 🇮🇳",
  email: "rahulbatham767@gmail.com",
  phone: "+91 7999754170",
  portfolio: "https://ipodify.tech",
  linkedin: "https://linkedin.com/in/rahul-batham767",
  github: "https://github.com/rahulbatham767",
  avatar: "/images/my-avatar.png",
  about: [
    "Hi, I'm <strong>Rahul Batham</strong> 👋 — A Full-Stack Developer & Blockchain Engineer from <strong>Gwalior, India</strong> 🇮🇳. Building real-time dashboards, cross-platform mobile apps, and decentralized identity solutions.",
    "Full-stack developer with hands-on experience building production applications across React, React Native, Node.js/Express, and TypeScript, including real-time dashboards, cross-platform mobile apps, and REST APIs integrated with third-party and government data sources. Comfortable owning a feature end-to-end — from state management and UI to backend services and deployment — with additional experience integrating blockchain-based identity infrastructure into full-stack products.",
  ],
};

export const services = [
  {
    icon: "/images/icon-dev.svg",
    title: "Full-Stack Web Systems",
    description:
      "Building real-time dashboards, WebSockets integrations, and REST API services using React, Next.js, Node.js, Express, and TypeScript.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile Development & Biometrics",
    description:
      "Cross-platform mobile apps in React Native (Expo) & Android (Kotlin/Java), incorporating Aadhaar eKYC and biometric authentication.",
  },
  {
    icon: "/images/icon-design.svg",
    title: "Decentralized Identity & Blockchain",
    description:
      "Hyperledger Indy, Fabric, ACA-Py, DIDComm, W3C DIDs, Verifiable Credentials, and Zero-Knowledge Proof (ZKP) predicate workflows.",
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Backend Services & REST APIs",
    description:
      "Developing robust REST APIs, microservices, and secure backend integrations using Node.js, Express, Spring Boot, and Python.",
  },
];

export const highlights = [
  {
    id: 1,
    avatar: "/images/avatar-1.png",
    title: "CDAC — SSI Engineering",
    summary:
      "Built production Self-Sovereign Identity ecosystems at CDAC using Hyperledger Indy, ACA-Py, and Docker Compose with Issuer–Holder–Verifier workflows.",
    description:
      "At CDAC (Centre for Development of Advanced Computing), I designed and deployed a complete Self-Sovereign Identity (SSI) ecosystem from scratch. The system used Hyperledger Indy as the decentralized ledger, ACA-Py (Aries Cloud Agent Python) as the agent framework, and Docker Compose for multi-container orchestration.\n\nKey achievements include implementing DIDComm-based Issuer–Holder–Verifier workflows for verifiable credential issuance and verification, automating predicate-driven ZKP (Zero-Knowledge Proof) pipelines that improved onboarding efficiency by 40%, and integrating Aadhaar-based offline eKYC for identity verification.",
    tags: ["Hyperledger Indy", "ACA-Py", "Docker", "ZKP", "DIDComm", "SSI"],
    date: "Oct 2024 – Present",
  },
  {
    id: 2,
    avatar: "/images/avatar-2.png",
    title: "Real-Time Dashboards & APIs",
    summary:
      "Architected live telemetry monitoring dashboards with MERN stack & WebSockets to handle concurrent updates across multi-client connected environments.",
    description:
      "Designed and built high-performance real-time monitoring dashboards using the MERN stack (MongoDB, Express, React, Node.js) with WebSocket-based bidirectional communication.\n\nThe system handled concurrent data streams from multiple clients simultaneously, maintaining smooth UI performance with React state management optimizations. Implemented efficient data diffing strategies to minimize DOM re-renders and WebSocket message throttling to prevent overload under high-frequency telemetry data ingestion.",
    tags: [
      "React",
      "Node.js",
      "WebSockets",
      "MongoDB",
      "Express",
      "TypeScript",
    ],
    date: "2024",
  },
  {
    id: 3,
    avatar: "/images/avatar-3.png",
    title: "Aadhaar eKYC & Biometrics",
    summary:
      "Developed native Android modules (Kotlin/Java) for encrypted biometric data capture (face, iris, fingerprint) aligned with UIDAI specs.",
    description:
      "Built native Android modules for secure biometric data capture fully compliant with UIDAI (Unique Identification Authority of India) specifications. The modules support multi-modal biometric capture including face, iris, and fingerprint recognition.\n\nImplemented end-to-end encryption for biometric data at rest and in transit, integrated with Aadhaar offline eKYC XML verification, and designed the system to work in offline-capable mode with local validation fallbacks. The solution was integrated into a Spring Boot backend for server-side KYC processing.",
    tags: [
      "Kotlin",
      "Java",
      "Android",
      "Biometrics",
      "UIDAI",
      "eKYC",
      "Spring Boot",
    ],
    date: "2024",
  },
  {
    id: 4,
    avatar: "/images/avatar-4.png",
    title: "REST APIs & Microservices",
    summary:
      "Designed robust REST APIs and scalable microservice architectures with Express, Node.js, Spring Boot, and Docker containers.",
    description:
      "Architected and implemented production-grade REST API systems and microservice architectures serving enterprise-scale workloads. Designed API gateways with rate limiting, JWT-based authentication, and request validation pipelines.\n\nMicroservices were containerized with Docker and orchestrated for high availability. Integrated with third-party government APIs, implemented comprehensive error handling, logging, and monitoring. Used both PostgreSQL and MongoDB depending on data access patterns, with Redis for caching high-frequency lookup data.",
    tags: [
      "Node.js",
      "Express",
      "Spring Boot",
      "Docker",
      "PostgreSQL",
      "Redis",
      "JWT",
    ],
    date: "2023 – 2024",
  },
];

export const experience = [
  {
    role: "Blockchain & Android Developer — SSI Engineering",
    company: "CDAC (Centre for Development of Advanced Computing)",
    period: "Oct 2024 — Present",
    bullets: [
      "Built real-time monitoring dashboards using MERN stack and WebSockets to visualize live data streams and system events.",
      "Developed native Android modules for secure data capture and verification with government (UIDAI) APIs & iris/fingerprint biometric authentication.",
      "Architected a production-grade Self-Sovereign Identity ecosystem using Hyperledger Indy and ACA-Py (Issuer–Holder–Verifier workflows).",
      "Designed automated predicate-driven ZKP decision pipelines for credential validation & onboarding, improving system efficiency by 40%.",
      "Orchestrated multi-agent containerized SSI infrastructure using Docker Compose & integrated Aadhaar-based offline eKYC.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) — Computer Science Engineering",
    institution: "Institute of Technology and Management, Gwalior",
    period: "2020 — 2024",
    detail:
      "GPA: 7.7 / 10 · Distributed Systems, Software Engineering, Database Systems, Network Security, Cryptography",
  },
];

export const certifications = [
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google",
    date: "Feb 2025",
    id: "96RXHXDOS6AC",
  },
  {
    name: "Salesforce Developer Certification — 3 Super Badges",
    issuer: "Salesforce",
    id: "SISFVIPAD2023-75406",
  },
];

export const skills = [
  {
    label: "Frontend (React, React Native Expo, Next.js, TypeScript)",
    percent: 95,
  },
  {
    label: "Backend (Node.js, Express, Spring Boot, REST APIs, WebSockets)",
    percent: 92,
  },
  {
    label: "Blockchain & SSI (Hyperledger Indy, Fabric, ACA-Py, DIDComm, ZKPs)",
    percent: 90,
  },
  {
    label: "Mobile & Security (Android Kotlin/Java, Biometrics, UIDAI eKYC)",
    percent: 88,
  },
  {
    label: "DevOps & Cloud (Docker, Git, MongoDB, PostgreSQL, Nginx)",
    percent: 85,
  },
];

export const projects = [
  {
    id: 1,
    title: "Saboot — Digital Evidence Management",
    category: "applications",
    image: "/images/project-1.jpg",
    video: "/Saboot.mp4",
    tags: "React Native · Expo · Redux Toolkit · NativeWind",
    link: "#",
    isExternal: false,
  },
  {
    id: 2,
    title: "Aadhaar Decentralized KYC Suite",
    category: "applications",
    image: "/images/project-2.png",
    video: "/adhaar_auth.mp4",
    tags: "Kotlin · Java · Spring Boot · Android · Biometrics",
    link: "#",
    isExternal: false,
  },
  {
    id: 3,
    title: "Self-Sovereign Identity (SSI) Platform",
    category: "blockchain & ssi",
    image: "/images/project-3.jpg",
    tags: "ACA-Py · React · Zustand · Python · Node.js",
    link: "#",
    isExternal: false,
  },
  {
    id: 4,
    title: "iPodify — Retro YouTube Player",
    category: "web development",
    image: "/images/project-5.png",
    tags: "React · Vite · CSS",
    link: "https://ipodify.tech",
    isExternal: true,
  },
  {
    id: 5,
    title: "Hyperledger Fabric Enterprise Network",
    category: "blockchain & ssi",
    image: "/images/project-6.png",
    tags: "Hyperledger Fabric · Docker · CA Setup",
    link: "#",
    isExternal: false,
  },
];

export const filterCategories = [
  "All",
  "Web development",
  "Applications",
  "Blockchain & SSI",
];

export const blogPosts = [
  {
    id: 1,
    image: "/images/blog-1.jpg",
    category: "Blockchain & SSI",
    date: "2026-03-15",
    dateDisplay: "Mar 15, 2026",
    title: "Building Production SSI Solutions with Hyperledger Indy & ACA-Py",
    excerpt:
      "A comprehensive guide to issuing and verifying credentials using Aries Cloud Agent Python and Indy ledgers.",
    link: "#",
  },
  {
    id: 2,
    image: "/images/blog-2.jpg",
    category: "Web Development",
    date: "2026-02-20",
    dateDisplay: "Feb 20, 2026",
    title: "Real-Time Dashboards with MERN & WebSockets",
    excerpt:
      "Patterns for managing high-frequency live data streams and concurrent client updates.",
    link: "#",
  },
  {
    id: 3,
    image: "/images/blog-3.jpg",
    category: "Mobile Engineering",
    date: "2026-01-10",
    dateDisplay: "Jan 10, 2026",
    title: "Developing Native Android Biometric KYC Modules with UIDAI",
    excerpt:
      "Biometric capture (iris, face, fingerprint) and Aadhaar eKYC integration using Kotlin and Java.",
    link: "#",
  },
  {
    id: 4,
    image: "/images/blog-4.jpg",
    category: "Backend Engineering",
    date: "2025-11-28",
    dateDisplay: "Nov 28, 2025",
    title: "Designing Scalable REST API Gateways for Identity Systems",
    excerpt:
      "Best practices for rate limiting, validation pipelines, data encryption, and robust microservices architecture.",
    link: "#",
  },
];

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  receiverName: "Rahul Batham",
  receiverEmail: "rahulbatham767@gmail.com",
};
