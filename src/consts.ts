import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Alex Rivers",
  EMAIL: "alex.rivers@example.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Alex Rivers - Systems & Infrastructure Engineer. Portoflio focusing on distributed systems, databases, and low-latency programming.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Academic background, research work, and engineering competencies.",
};

export const RESUME: Metadata = {
  TITLE: "Resume",
  DESCRIPTION: "Professional experience, projects, skills, and academic history.",
};

export const BLOG: Metadata = {
  TITLE: "Blog & Research",
  DESCRIPTION: "Technical articles on distributed systems, storage engine internals, and kernel development.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "High-performance codebases and system tools developed from scratch.",
};

export const OPEN_SOURCE: Metadata = {
  TITLE: "Open Source",
  DESCRIPTION: "Contributions to the Linux kernel, database systems, and dev tool ecosystems.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/alexrivers"
  },
  { 
    NAME: "linkedin",
    HREF: "https://linkedin.com/in/alex-rivers",
  }
];
