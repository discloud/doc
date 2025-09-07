import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { i18n } from "./i18n";
import { transformerOpenAPI } from "fumadocs-openapi/server";
import icons from "./icon";
import { createElement } from "react";

export const source = loader({
  i18n,
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  pageTree: {
    transformers: [transformerOpenAPI()],
  },
  icon(key) {
    if (key && key in icons){
      return createElement(icons[key]);
    }
  },
});