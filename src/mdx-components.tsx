import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Card, Cards } from "fumadocs-ui/components/card";
import { ClipboardCheck, LibraryBig, PersonStanding, Search } from "lucide-react";
import { APIPage } from "fumadocs-openapi/ui";
import { openapi } from "./lib/openapi";

const ICONS_MAP = {
  ClipboardCheck,
  LibraryBig,
  PersonStanding,
  Search
} as const;

type IconName = keyof typeof ICONS_MAP;

const AccordionWithEmote = (props: any) => {
  const IconComponent = props.emote ? ICONS_MAP[props.emote as IconName] : null;
  return (
    <Accordion
      {...props}
      title={
        <>
          {IconComponent && <IconComponent className="inline" size={16} />}
          {props.title}
        </>
      }
    />
  );
};

export function getMDXComponents(lang: "pt" | "en" = "pt", components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Accordions,
    Accordion: AccordionWithEmote,
    APIPage: (props) => <APIPage {...openapi[lang].getAPIPageProps(props)} />,
    Card, Cards,
    ...components,
  };
}
