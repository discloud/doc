import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = {
  pt: createOpenAPI({
    input: ["./scripts/openapi-pt.json"],
  }),
  en: createOpenAPI({
    input: ["./scripts/openapi-en.json"],
  })
}