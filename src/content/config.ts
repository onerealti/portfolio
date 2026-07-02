import { defineCollection } from "astro:content";
import {
  ProfileSchema,
  ExperienceSchema,
  EducationSchema,
  ProjectSchema,
  SkillSchema,
  WritingSchema,
} from "../lib/schemas";

const profile = defineCollection({
  type: "data",
  schema: ProfileSchema as any,
});

const experience = defineCollection({
  type: "content",
  schema: ExperienceSchema as any,
});

const education = defineCollection({
  type: "content",
  schema: EducationSchema as any,
});

const projects = defineCollection({
  type: "content",
  schema: ProjectSchema as any,
});

const skills = defineCollection({
  type: "data",
  schema: SkillSchema as any,
});

const writing = defineCollection({
  type: "content",
  schema: WritingSchema as any,
});

export const collections = {
  profile,
  experience,
  education,
  projects,
  skills,
  writing,
};
