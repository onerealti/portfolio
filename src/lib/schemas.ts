import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  email: z.string().email(),
  phone: z.string(),
  website: z.string().url(),
  github: z.string().url(),
  linkedin: z.string().url(),
  summary: z.string(),
});

export const ExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  location: z.string(),
  dateStart: z.string(), // e.g. "2025-06" or "June 2025"
  dateEnd: z.string(),   // e.g. "2025-09" or "Present"
  description: z.string().optional(),
  bullets: z.array(z.string()),
  skills: z.array(z.string()),
  profiles: z.array(z.string()), // e.g. ["backend", "distributed", "ml", "infrastructure"]
  importance: z.number().optional().default(10),
});

export const EducationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  fieldOfStudy: z.string(),
  location: z.string(),
  dateStart: z.string(),
  dateEnd: z.string(),
  gpa: z.string().optional(),
  details: z.array(z.string()).optional(),
  importance: z.number().optional().default(10),
});

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  repoURL: z.string().url().optional(),
  demoURL: z.string().url().optional(),
  date: z.string(),
  skills: z.array(z.string()),
  bullets: z.array(z.string()),
  profiles: z.array(z.string()),
  importance: z.number().optional().default(10),
  draft: z.boolean().optional().default(false),
});

export const SkillSchema = z.object({
  name: z.string(),
  category: z.string(), // e.g. "Languages", "Systems & Infrastructure", "ML & AI Infrastructure", "Tools"
  level: z.string().optional(),
  profiles: z.array(z.string()),
  importance: z.number().optional().default(10),
});

export const WritingSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(), // "YYYY-MM-DD"
  tags: z.array(z.string()),
  draft: z.boolean().optional().default(false),
});

export type Profile = z.infer<typeof ProfileSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type Writing = z.infer<typeof WritingSchema>;
