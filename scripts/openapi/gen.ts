import { generateFiles, type Config } from "fumadocs-openapi";
import { openapi } from "@/lib/openapi";

const defaults = {
  includeDescription: true,
  output: "./content/docs/api/(generated)",
  per: "tag",
} satisfies Partial<Config>;

void generateFiles({
  ...defaults,
  input: openapi.pt,
});
void generateFiles({
  ...defaults,
  input: openapi.en,
  beforeWrite(files) {
    for (const file of files) {
      file.path = file.path.replace(".mdx", ".en.mdx")
    }
  },
});