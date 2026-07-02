import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";
import {
  ProjectSchema,
  WritingSchema,
} from "../src/lib/schemas";
import type {
  Project,
  Writing,
} from "../src/lib/schemas";

const CONTENT_DIR = path.join(process.cwd(), "src/content");
const PUBLIC_DIR = path.join(process.cwd(), "public");

if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR);

function parseMarkdownFrontmatter<T>(filePath: string, schema: any): T {
  const content = fs.readFileSync(filePath, "utf-8");
  const parts = content.split(/^---$/m);
  if (parts.length < 3) {
    throw new Error(`Invalid markdown frontmatter in: ${filePath}`);
  }
  const rawYaml = parts[1];
  const parsed = yaml.load(rawYaml);
  return schema.parse(parsed) as T;
}

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: "blog" | "project";
  url: string;
  date: string;
  tags: string[];
}

function buildSearchIndex() {
  console.log("🔍 Building static search index...");
  const searchIndex: SearchItem[] = [];

  // 1. Process writing
  const writingDir = path.join(CONTENT_DIR, "writing");
  if (fs.existsSync(writingDir)) {
    const files = fs.readdirSync(writingDir).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
    files.forEach(file => {
      try {
        const id = file.replace(/\.(md|mdx)$/, "");
        const data = parseMarkdownFrontmatter<Writing>(path.join(writingDir, file), WritingSchema);
        if (!data.draft) {
          searchIndex.push({
            id,
            title: data.title,
            description: data.description,
            category: "blog",
            url: `/blog/${id}`,
            date: data.date,
            tags: data.tags,
          });
        }
      } catch (err: any) {
        console.error(`❌ Error parsing writing file: ${file}`, err.message);
      }
    });
  }

  // 2. Process projects
  const projDir = path.join(CONTENT_DIR, "projects");
  if (fs.existsSync(projDir)) {
    const files = fs.readdirSync(projDir).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
    files.forEach(file => {
      try {
        const id = file.replace(/\.(md|mdx)$/, "");
        const data = parseMarkdownFrontmatter<Project>(path.join(projDir, file), ProjectSchema);
        if (!data.draft) {
          searchIndex.push({
            id,
            title: data.title,
            description: data.description,
            category: "project",
            url: `/projects/${id}`,
            date: data.date,
            tags: data.skills, // Use skills as search tags
          });
        }
      } catch (err: any) {
        console.error(`❌ Error parsing project file: ${file}`, err.message);
      }
    });
  }

  const outputPath = path.join(PUBLIC_DIR, "search-index.json");
  fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2), "utf-8");
  console.log(`✨ Built search index with ${searchIndex.length} items at: public/search-index.json`);
}

buildSearchIndex();
