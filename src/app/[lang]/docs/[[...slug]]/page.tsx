import { source } from "@/lib/source";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import icons from "@/lib/icon";

export default async function Page(props: PageProps<"/[lang]/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);

  if (!page) notFound();

  const MDXContent = page.data.body;

  const IconComponent = page.data.icon ? icons[page.data.icon] : null;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>
        {IconComponent && <IconComponent className="inline" size={32} />} {page.data.title}
      </DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={{
            ...getMDXComponents(params.lang as "pt" | "en", {
              a: createRelativeLink(source, page),
            }),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams("slug", "lang");
}

export async function generateMetadata(props: PageProps<"/[lang]/docs/[[...slug]]">): Promise<Metadata> {
  const { lang, slug = [] } = await props.params;
  const page = source.getPage(slug, lang);
  if (!page) notFound();

  const images = {
    alt: "Banner",
    url: `/${lang}/og/${slug.join("/")}/image.png`,
    // width: 1430,
    // height: 660,
  }

  return {
    metadataBase: process.env.NODE_ENV === "development"
      ? new URL("http://localhost:3000")
      : new URL("https://docs.discloud.com"),
    title: page.data.title,
    description: page.data.description,
    openGraph: { images },
    twitter: { card: "summary_large_image", images }
  } satisfies Metadata;
}
