import icons from "@/lib/icon";
import { ImageResponse } from "next/og";
import { ImageResponseOptions } from "next/server";
import { createElement, type ReactElement, type ReactNode } from "react";

interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
  primaryTextColor?: string;
  icon?: string;
  site?: string;
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions,
): ImageResponse {
  const { title, description, primaryTextColor, icon, site, ...rest } = options;

  return new ImageResponse(
    generate({
      title,
      description,
      primaryTextColor,
      icon,
      site,
    }),
    {
      width: 1400,
      height: 600,
      ...rest,
    },
  );
}

export function generate(props: GenerateProps): ReactElement {
  return <div tw="relative flex flex-col w-full h-full text-white bg-[#0F0F0F] overflow-hidden border-[#26272C]">
    <div
      style={{
        position: "absolute",
        backgroundImage: `
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
        width: "100%",
        height: "100%",
        opacity: 0.2,
        maskImage: "linear-gradient(to bottom right, black, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom right, black, transparent)",
      }}
    />
    <div
      tw="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
      style={{
        background: "radial-gradient(circle at top right, rgba(87, 242, 135,0.6), transparent 70%)",
        filter: "blur(120px)",
      }}
    />
    <div tw="
      w-full h-full text-4xl
      flex flex-col justify-between text-white
      py-20 px-32 border
    ">
      <div tw="flex flex-col" style={{
        gap: "0px"
      }}>
        <h1>
          <span tw="flex flex-row items-center"
            style={{
              gap: "2rem",
              fontWeight: 500
            }}
          >
            {props.icon && createElement(icons[props.icon])}
            {props.title}
          </span>
        </h1>
        <p tw="text-5xl text-neutral-200">{props.description}</p>
      </div>
      <span tw="flex flex-row text-neutral-300 text-5xl text-[#57F287]">
        {props.site}
      </span>
    </div>
  </div>
}