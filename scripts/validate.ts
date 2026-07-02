import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";
import { z } from "zod";
import {
  ProfileSchema,
  ExperienceSchema,
  EducationSchema,
  ProjectSchema,
  SkillSchema,
  WritingSchema,
} from "../src/lib/schemas";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

interface CollectionConfig {
  dirName: string;
  schema: z.ZodSchema;
  isJson: boolean;
}

const collections: CollectionConfig[] = [
  { dirName: "profile", schema: ProfileSchema, isJson: true },
  { dirName: "experience", schema: ExperienceSchema, isJson: false },
  { dirName: "education", schema: EducationSchema, isJson: false },
  { dirName: "projects", schema: ProjectSchema, isJson: false },
  { dirName: "skills", schema: SkillSchema, isJson: true },
  { dirName: "writing", schema: WritingSchema, isJson: false },
];

function parseMarkdownFrontmatter(filePath: string): any {
  const content = fs.readFileSync(filePath, "utf-8");
  const parts = content.split(/^---$/m);
  if (parts.length < 3) {
    throw new Error("Invalid frontmatter structure. Make sure the file starts and ends frontmatter with '---'.");
  }
  const rawYaml = parts[1];
  const data = yaml.load(rawYaml);
  if (!data || typeof data !== "object") {
    throw new Error("Failed to parse YAML frontmatter.");
  }
  return data;
}

function validateAll() {
  let hasErrors = false;

  console.log("🔍 Validating content collections schemas...\n");

  for (const collection of collections) {
    const dirPath = path.join(CONTENT_DIR, collection.dirName);
    if (!fs.existsSync(dirPath)) {
      console.warn(`⚠️  Collection directory not found: ${collection.dirName}`);
      continue;
    }

    const files = fs.readdirSync(dirPath).filter(file => {
      return collection.isJson ? file.endsWith(".json") : (file.endsWith(".md") || file.endsWith(".mdx"));
    });

    console.log(`Checking [${collection.dirName}] (${files.length} files)...`);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      try {
        let parsedData: any;
        if (collection.isJson) {
          const raw = fs.readFileSync(filePath, "utf-8");
          parsedData = JSON.parse(raw);
        } else {
          parsedData = parseMarkdownFrontmatter(filePath);
        }

        const result = collection.schema.safeParse(parsedData);
        if (!result.success) {
          hasErrors = true;
          console.error(`❌ Validation failed in [${collection.dirName}/${file}]:`);
          console.error(JSON.stringify(result.error.format(), null, 2));
        } else {
          console.log(`  ✅ ${file}`);
        }
      } catch (err: any) {
        hasErrors = true;
        console.error(`❌ Error reading or parsing [${collection.dirName}/${file}]:`);
        console.error(`  ${err.message}`);
      }
    }
  }

  if (hasErrors) {
    console.error("\n❌ Validation failed. Please fix the schema errors above.");
    process.exit(1);
  } else {
    console.log("\n✨ All content validated successfully against schemas!");
    process.exit(0);
  }
}

validateAll();
