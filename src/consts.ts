import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Murtaza Ahmed",
  EMAIL: "murtazaofficial@protonmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Murtaza Ahmed - Systems & ML Infrastructure Engineer. Portfolio focusing on AI workloads scheduling, GPU cluster orchestration, and embedded systems.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Academic background, research work, and engineering competencies.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Professional roles, edge AI research positions, and software engineering experience.",
};

export const RESUME: Metadata = {
  TITLE: "Resume",
  DESCRIPTION: "HTML resume and typeset PDF variants compiled from shared content models.",
};

export const BLOG: Metadata = {
  TITLE: "Blog & Research",
  DESCRIPTION: "Technical articles on distributed systems, storage engine internals, and kernel development.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Robotics systems integration, workspace provisioning pipelines, and software tools.",
};

export const OPEN_SOURCE: Metadata = {
  TITLE: "Open Source",
  DESCRIPTION: "Contributions to the Linux kernel, database systems, and dev tool ecosystems.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/onerealti"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/murahmed",
  }
];
