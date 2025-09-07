import { generateFiles } from "fumadocs-openapi";
import { openapi } from "@/lib/openapi";

void generateFiles({
  input: openapi.pt,
  output: "./content/docs/api/(generated)",
  includeDescription: true,
});

void generateFiles({
  input: openapi.en,
  output: "./content/docs/api/(generated)",
  beforeWrite(files) {
    for (const file of files) {
      file.path = file.path.replace(".mdx", ".en.mdx")
    }
  },
  includeDescription: true,
});